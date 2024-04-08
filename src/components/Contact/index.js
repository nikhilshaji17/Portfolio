import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef



    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) =>{
        e.preventDefault()
        emailjs
        .sendForm(
            'gmail',
            'service_7v3z0ot',
        )
    }

    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't' , ' ', 'M', 'e']} idx={15}  letterClass={letterClass}/>
                    </h1>
                    <p>I'm interested in software development and web development roles. 
                        However, if you have any other request or question, 
                        don't hesitate to contact me using the form below.
                    </p>
                    <div className='contact-form'>
                        {/* <form ref={refForm} onSubmit={sendEmail}/> */}
                        <form/>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input type='text' name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name="email" placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required/>
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value={"Send"} required />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default Contact