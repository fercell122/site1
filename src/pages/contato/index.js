import React, { useRef, useState } from 'react';
import Menu from "../../components/menu/index";
import "./styles.css";
import Social from "../../components/social/index";
import emailjs from '@emailjs/browser';
import { Navigate } from "react-router-dom"

export default function Contato() {
    const form = useRef()
    const [confirm, setConfirm] = useState('')
   
    
    const sendEmail = (e) => {
        e.preventDefault();
        alert("Enviado com sucesso!")
        setConfirm('true')
         
        

          emailjs.sendForm('service_0vcwu3v', 'template_do1vln3', form.current, 'K4pt809tJtHvokYIj')
            .then((result) => {
                console.log(result.text);
                
            }, (error) => {
                console.log(error.text);
            }); 
            
            
    };

    if(confirm) {
        return <Navigate to="/"/>;
        } 

    return (
        <div>
            <Menu />
            <main id="inicio">
                <div id="info">
                    <p>isabelagbarreiros@gmail.com</p>
                    <p>(12) 99139-1578</p>
                    <Social />
                </div>
                <div id="contact">
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Nome</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Mensagem</label>
                        <textarea name="message" />
                        <input type="submit" value="Enviar" />
                    </form>
                </div>
            </main>
        </div>
    )
}