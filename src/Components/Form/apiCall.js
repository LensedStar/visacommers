import axios from "axios";


const BotAPI ={
    BOTTOKEN:"6265162226:AAEyqqLJPTdZBxcQulBTbak33sxa2Ywl0VU",
    CHANNELID:"-1001941982397",
}
const fetchForm=(data)=>{
    console.log(data)
    axios.post(`https://api.telegram.org/bot${BotAPI.BOTTOKEN}/sendMessage`,{
        chat_id:BotAPI.CHANNELID,
        parse_mode:"HTML",
        text: `Имя: ${data.name}
            \nФамилия: ${data.surname} 
            \nНациональность: ${data.country} 
            \nТелефон: ${data.phone} 
            \nEmail: ${data.email} 
            \nТип визы: ${data.type }
            \nКак с вами связаться: ${data.howContact}
            \nТелеграм тэг: ${data.tgTag ? data.tgTag : "Не указано"}`
    }).then(()=>console.log("Send"))
}

export default fetchForm;