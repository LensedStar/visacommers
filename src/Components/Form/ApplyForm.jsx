
// eslint-disable
import React, { /*useState*/} from "react"

import axios from "axios";

import 'react-phone-number-input/style.css'

import ru from 'react-phone-number-input/locale/ru'

import ua from 'react-phone-number-input/locale/ua'

import en from 'react-phone-number-input/locale/en'

import PhoneInput,{isValidPhoneNumber} from 'react-phone-number-input'

import { useForm,Controller } from "react-hook-form"

import {useTranslation} from "react-i18next";

import CountryData from "./CountryData";

import "./FormStyle.scss"

import Button from "../Button/Button";


const BotAPI ={
    BOTTOKEN:"6265162226:AAEyqqLJPTdZBxcQulBTbak33sxa2Ywl0VU",
    CHANNELID:"-1001941982397",
}
export default function ApplyForm() {
const {t,i18n} = useTranslation();
    const { register,
        handleSubmit,
        formState:{ errors },
        control
    } = useForm();

    const fetchForm=(data,event)=>{
        event.preventDefault();
        console.log("Send")
        axios.post(`https://api.telegram.org/bot${BotAPI.BOTTOKEN}/sendMessage`,{
            chat_id:BotAPI.CHANNELID,
            parse_mode:"HTML",
            text: `Имя: ${data.name}
            \nФамилия: ${data.surname} 
            \nНациональность: ${data.country} 
            \nТелефон: ${data.phone} \nEmail: ${data.email} 
            \nТип визы: ${data.type }
            \nКак с вами связаться: ${data.howContact}`
        }).then(()=>console.log("Send"))
    }

    const setLocale=()=>{
        if(i18n.language==="en"){
            return en
        }
        else if(i18n.language==="ru"){
            return ru
        }else if(i18n.language==="ua"){
            return ua
        }
    }
    return(
        <>
        <form className="applyForm" onSubmit={handleSubmit(fetchForm)}>
            <input type="text" placeholder={t("form.name")} {...register("name",{required:true,maxLength:20})}/>
            { errors.name && <span className="error">{t("form.error")}</span> }
            <input type="text" placeholder={t("form.surname")} {...register("surname",{required:true,maxLength:30})}/>
            { errors.surname && <span className="error">{t("form.error")}</span> }
            <select defaultValue='' className="cSelect" {...register("country",{required:true,maxLength:70,pattern:[/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/]})} >
                <option value='' hidden disabled >{t("form.nationality")}</option>
                {CountryData.map((country,index)=>{
                    return(
                        <option className="cOption" value={country.name} key={index}>{country.name}</option>
                    )})
                }
            </select>
            { errors.country && <span className="error">{t("form.error")}</span> }
            <Controller
                name="phone"
                control={control}
                rules={{
                    required: true,
                    validate: (value)=>isValidPhoneNumber(value)
                }}
                render={({ field: { onChange, value } }) => (
            <PhoneInput
                international
                labels={setLocale()}
                defaultCountry={i18n.language === "ua" && "UA" || i18n.language === "ru" && "RU" }
                value={value}
                initialValueFormat="national"
                onChange={onChange}
                placeholder={t("form.phone")}
                countryCallingCodeEditable={false}/>)} />
            { errors.phone && <span className="error">{t("form.error")}</span> }

            <input type="email" placeholder={t("form.email")} {...register("email",{required:true})}/>
            { errors.email && <span className="error">{t("form.error")}</span> }
            <select defaultValue="" {...register("type",{required:true})}>
                <option value=""  hidden disabled  >Select visa type</option>
                <option value="study">{t("form.vFast")}</option>
                <option value="bussines">{t("form.vStudy")}</option>
            </select>
            { errors.type && <span className="error">{t("form.error")}</span> }
            <select defaultValue="" {...register("howContact",{required:true})}>
                <option value="" hidden disabled >{t("form.howContact")}</option>
                <option value="Telegram">Telegram</option>
                <option value="Viber">Viber</option>
                <option value="Whatsapp">WhatsApp</option>
                <option value="Email">Email</option>
            </select>
            { errors.howContact && <span className="error">{t("form.error")}</span> }
            <Button type="submit" content={t("form.submit")} />
        </form>
</>
    )
}