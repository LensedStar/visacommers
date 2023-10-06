
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

import { ErrorMessage } from "@hookform/error-message"


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
            \nТелефон: ${data.phone} 
            \nEmail: ${data.email} 
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
        <div className="formContainer">
        <form className="applyForm" onSubmit={handleSubmit(fetchForm)}>
            <input type="text" placeholder={t("form.name")} {...register("name",
                {required:t("form.error.name"),
                    maxLength:{
                        value:20,
                        message:t("form.error.max-length")
                    },
                minLength:{
                    value:2,
                    message:t("form.error.min-length")
                },
                pattern:{
                    value:/^[A-ZА-Я][a-zA-Zа-яА-Я]*$/
                    ,
                    message:t("form.error.name-pattern")
                }})}/>
            <ErrorMessage name={"name"} errors={errors}
                          render={({message})=><p className="error">{message}</p>}/>
            <input type="text" placeholder={t("form.surname")} {...register("surname",{required:t("form.error.surname"),
                maxLength:{
                    value:20,
                    message:t("form.error.max-length")
                },
            minLength:{
                value:2,
                message:t("form.error.min-length")
            },
                pattern:{
                    value:/^[A-ZА-Я][a-zA-Zа-яА-Я]*$/
                    ,
                    message:t("form.error.name-pattern")
                }})}/>
            <ErrorMessage errors={errors} name="surname"
                          render={({message})=><p className="error">{message}</p>}/>
            <select defaultValue='' className="cSelect" {...register("country",{required:true,maxLength:70,pattern:[/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/]})} >
                <option value='' hidden disabled >{t("form.nationality")}</option>
                {CountryData.map((country,index)=>{
                    return(
                        <option className="cOption" value={country.name} key={index}>{country.name}</option>
                    )})
                }
            </select>
            { errors.country && <span className="error">{t("form.error.country")}</span> }
            <Controller
                name="phone"
                control={control}
                rules={{
                    required: t("form.error.phone"),
                    validate: (value)=>isValidPhoneNumber(value) || t("form.error.phone-format")
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
            <ErrorMessage name={"phone"} errors={errors}
                          render={({message})=><p className="error">{message}</p>} />

            <input type="email" placeholder={t("form.email")} {...register("email",
                {required:t("form.error.email"),
                minLength:{
                    value:8,
                    message:t("form.error.min-length")
                },
                maxLength:{
                    value:40,
                    message:t("form.error.max-length")
                },
                pattern:{
                    value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                    message:t("form.error.email-format")
                }})}/>
            <ErrorMessage name={"email"} errors={errors}
                          render={({message})=><p className="error">{message}</p>}/>
            <select defaultValue="" {...register("type",{required:true})}>
                <option value=""  hidden disabled  >{t("form.visaType")}</option>
                <option value="study">{t("form.vFast")}</option>
                <option value="bussines">{t("form.vStudy")}</option>
            </select>
            { errors.type && <p className="error">{t("form.error.visa-type")}</p> }
            <select defaultValue="" {...register("howContact",{required:true})}>
                <option value="" hidden disabled >{t("form.howContact")}</option>
                <option value="Telegram">Telegram</option>
                <option value="Viber">Viber</option>
                <option value="Whatsapp">WhatsApp</option>
                <option value="Email">Email</option>
            </select>
            { errors.howContact && <p className="error">{t("form.error.contact-method")}</p> }
            <Button type="submit" content={t("form.submit")} classN="subBtn"/>
        </form>
        </div>
    )
}