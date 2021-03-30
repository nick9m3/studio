import React, {Component} from 'react';
import emailjs from 'emailjs-com';


class Servizi extends Component{
    render(){
        function sendEmail(e) {
            e.preventDefault();
        
            emailjs.sendForm('service_nick9m3', 'template_nick9m3', e.target, 'user_HNg3JJoVP5inqXdrleyNz')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
        }
        return(
            <div>
                <form className="contact-form" onSubmit={sendEmail}>
                    <input type="hidden" name="utente" />
                    <label>Name</label>
                    <input type="text" name="utente" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </div>
        );
    }
}

export default Servizi;