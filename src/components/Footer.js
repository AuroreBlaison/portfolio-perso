import React from 'react'
import { FaLinkedin, FaGithubSquare, FaEnvelopeSquare } from "react-icons/fa";



const Footer = () => {
    return (
        <div className="footer" id='contact'>

            <h1>Contact</h1>
            <div className='links'>
                <div >
                    <p> Mon profil Linkedin :</p>
                    <a href="https://www.linkedin.com/in/aurore-blaison-developpeuse-web/" target="_blank" rel="noopener noreferrer"> <FaLinkedin /></a>
                </div>
                <div>
                    <p> Mon GitHub :</p>
                    <a href="https://github.com/AuroreBlaison" target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
                </div>
                <div>
                    <p> Contactez-moi par mail :</p>
                    <a href="mailto:aurore_blaison@hotmail.fr?subject:Contact"> <FaEnvelopeSquare /></a>
                </div>
            </div>


        </div>
    )
}

export default Footer

