import React from 'react'
import portrait from '../img/portrait.jpg'
// import motif from '../img/motif.jpg'
import cv from '../img/CV-AURORE-BLAISON.pdf'

const Presentation = () => {
    return (
        <div className='presentation' id="prez">

            <div className="presentation-wrapper">

                <div id="portrait">
                    <img src={portrait} alt="portrait" />
                </div>

                <div className="contenu-wrapper">
                    <div className="contenu">
                        <h1 id="name">Aurore Blaison</h1>
                        <h2>développeuse web</h2>
                        <p>Après 12 ans d'expérience en tant que styliste pour de grands groupes, je mets ma créativité au service d'un nouveau défi : devenir développeuse Web.</p>
                        <p>Dans le cadre de ma formation Développeur Web/Web mobile, je suis à la recherche d'un stage du 27 Mars au 21 Avril 2023.</p>
                    </div>
                    {/* mettre un <a href avec url du cv + un attribut download> au lieu d'une balise bouton */}
                    <button className='cv'>
                        <a href={cv} download="CV-AURORE-BLAISON">télécharger mon CV</a>
                    </button>
                </div>


            </div>

        </div>
    )
}

export default Presentation