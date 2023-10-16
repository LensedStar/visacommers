
// eslint-disable
import React, { useState } from "react"

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

import apiCall from "./apiCall";

import { motion,AnimatePresence } from "framer-motion";

import iconDone from "./DoneImg/iconDone.svg";

import Hcaptcha from "@hcaptcha/react-hcaptcha";
export default function ApplyForm() {
    const {t, i18n} = useTranslation();
    const {
        register,
        handleSubmit,
        formState: {errors},
        control,
        watch
    } = useForm();

    const [isSend, setSend] = useState(false)

    const sendForm = (data, event) => {
        event.preventDefault();
        apiCall(data)
        localStorage.getItem("setCount") ? localStorage.setItem("setCount", Number(localStorage.getItem("setCount")) + 1) : localStorage.setItem("setCount", 1)
        setSend(true)

    }

    const setLocale = () => {
        if (i18n.language === "en") {
            return en
        } else if (i18n.language === "ru") {
            return ru
        } else if (i18n.language === "ua") {
            return ua
        }
    }

    const contact = watch("howContact","")
    return (
        (<AnimatePresence mode="wait">
            <div className="formContainer">
            {
                isSend ?
                    <motion.div
                        className="sucsessContainer"
                        key="sucsess"
                        initial={{y:500}}
                        animate={{y:0}}
                        transition={{
                            duration: 0.5,
                        }}
                        >
                        <img src={iconDone} alt="done-icon" />
                        <h1 className="sucsess">{t("form.success")}</h1>
                       <h1 className="sucsess">{t("form.thankYou")}</h1>
                    </motion.div>
                    :
                    <motion.form
                        className="applyForm"
                        onSubmit={handleSubmit(sendForm)}
                        key="form"
                        initial={{opacity:1 , y:0}}
                        exit={{opacity:0 , y:500}}
                        transition={{
                            duration: 0.5,
                        }}
                    >
                        <input type="text" placeholder={t("form.name")} {...register("name",
                            {
                                required: t("form.error.name"),
                                maxLength: {
                                    value: 20,
                                    message: t("form.error.max-length")
                                },
                                minLength: {
                                    value: 2,
                                    message: t("form.error.min-length")
                                },
                                pattern: {
                                    value: /^[a-zA-Zа-яА-Я\s]+$/,
                                    message: t("form.error.name-pattern")
                                },
                                validate: (value)=>/^.* {3}.*$/.test(value) === false || t("form.error.pattern")

                            })}/>
                        <ErrorMessage name={"name"} errors={errors}
                                      render={({message}) => <p className="error">{message}</p>}/>
                        <input type="text" placeholder={t("form.surname")} {...register("surname", {
                            required: t("form.error.surname"),
                            maxLength: {
                                value: 20,
                                message: t("form.error.max-length")
                            },
                            minLength: {
                                value: 2,
                                message: t("form.error.min-length")
                            },
                            pattern: {
                                value: /^[a-zA-Zа-яА-Я\s]+$/,
                                message: t("form.error.surname-pattern")
                            },
                            validate: (value)=>/^.* {3}.*$/.test(value) === false || t("form.error.pattern")
                        })}/>
                        <ErrorMessage errors={errors} name="surname"
                                      render={({message}) => <p className="error">{message}</p>}/>
                        <select defaultValue='' className="cSelect" {...register("country", {
                            required: true,
                            maxLength: 70,
                            pattern: [/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/]
                        })} >
                            <option value='' hidden disabled>{t("form.nationality")}</option>
                            {CountryData.map((country, index) => {
                                return (
                                    <option className="cOption" value={country.name} key={index}>{country.name}</option>
                                )
                            })
                            }
                        </select>
                        {errors.country && <span className="error">{t("form.error.country")}</span>}
                        <select defaultValue="" {...register("type", {required: true})}>
                            <option value="" hidden disabled>{t("form.visaType")}</option>
                            <option value="study">{t("form.vFast")}</option>
                            <option value="bussines">{t("form.vStudy")}</option>
                        </select>
                        {errors.type && <p className="error">{t("form.error.visa-type")}</p>}
                        <Controller
                            name="phone"
                            control={control}
                            rules={{
                                required: t("form.error.phone"),
                                validate: (value) => isValidPhoneNumber(value) || t("form.error.phone-format")
                            }}
                            render={({field: {onChange, value}}) => (
                                <PhoneInput
                                    international
                                    labels={setLocale()}
                                    defaultCountry={i18n.language === "ua" && "UA" || i18n.language === "ru" && "RU"}
                                    value={value}
                                    initialValueFormat="national"
                                    onChange={onChange}
                                    placeholder={t("form.phone")}
                                    countryCallingCodeEditable={false}/>)}/>
                        <ErrorMessage name={"phone"} errors={errors}
                                      render={({message}) => <p className="error">{message}</p>}/>

                        <input type="email" placeholder={t("form.email")} {...register("email",
                            {
                                required: t("form.error.email"),
                                minLength: {
                                    value: 8,
                                    message: t("form.error.min-length")
                                },
                                maxLength: {
                                    value: 40,
                                    message: t("form.error.max-length")
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                                    message: t("form.error.email-format")
                                }
                            })}/>
                        <ErrorMessage name={"email"} errors={errors}
                                      render={({message}) => <p className="error">{message}</p>}/>
                        <select defaultValue="" {...register("howContact", {required: true})}>
                            <option value="" hidden disabled>{t("form.howContact")}</option>
                            <option value="Telegram">Telegram</option>
                            <option value="Viber">Viber</option>
                            <option value="Whatsapp">WhatsApp</option>
                            <option value="Email">Email</option>
                        </select>
                        {errors.howContact && <p className="error">{t("form.error.contact-method")}</p>}
                        {contact === "Telegram" && <input type="text" name="tgTag" placeholder={t("form.tgTag")} {...register("tgTag",{
                            required: t("form.error.telegram"),
                            minLength: {
                                value: 3,
                                message: t("form.error.min-length")
                            },
                            maxLength: {
                                value: 40,
                                message: t("form.error.max-length")
                            },
                            validate:(value) => value[0] === "@" || t("form.error.telegram-format")
                        })}/>}
                        <ErrorMessage name="tgTag" errors={errors} render={({message})=>
                            <>
                                <p className="error">{message}</p>
                                <a href={i18n.language === "en" ?
                                    "https://clientdiary.com/knowledgebase/find-or-create-your-telegram-username-ios/"
                                    :
                                    "https://ustanovkaos.ru/obshchenie/kak-uznat-svoj-nik-v-telegramme.html#i-2"}
                                   target="_blank"
                                   rel="noreferrer"
                                   className="errorLink">
                                    {t("form.how-find")}
                                </a>
                            </>
                        } />
                        <span className="agreementContainer">
                            <input className ="cBox" type="checkbox" name="agreement" value="agree" {...register("agreement",{required:true})}/>
                            <label htmlFor="agrement">{t("form.agreement")}</label>
                        </span>
                        {errors.agreement && <p className="error">{t("form.error.agreement")}</p>}
                        <Button type="submit" content={t("form.submit")} classN="subBtn"/>
                        <Hcaptcha
                            site-key="bf9a31ef-6f77-4af8-9a49-8bae5c7be0e8"
                            onVerify={(token,ekey)=>console.log(token,ekey)}
                        />
                    </motion.form>
                    }
                </div>
        </AnimatePresence>
                )
    )
}