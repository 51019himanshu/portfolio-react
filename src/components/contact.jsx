import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';




const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lwr9e72', 'template_qcmktbn', form.current, '35vcGvY0Flgx6tYY_')
            .then((result) => {
                console.log(result.text);
                console.log("message sent")
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    // const handleSubmit = () => {
    //     props.showAlert("Email sent", "success")
    // }
    return (
        
    <div className="newContact">
        <form ref={form} className='form' onSubmit={sendEmail}>
            <label>Name</label>
            <label><input type="text" className='form-input' name="user_name" id='name' placeholder='Enter your name' /></label>
            <label>Email</label>
            <input type="email" name="user_email" className='form-input' id='email' placeholder='Enter your Email' />
            <label>Message</label>
            <textarea name="message" className='form-input' id='text' cols={30} rows={10} placeholder='Type your messege..'/>
            <input type="submit" className='submitbtn btn'  value="Send" />
        </form>
    </div>
    
    )
}

export default Contact;