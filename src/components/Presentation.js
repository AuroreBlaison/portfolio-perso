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
                        <p>Styliste expérimentée dans le retail, j'ai fait le choix audacieux d'une reconversion pour devenir développeuse web. <br /> Ma créativité et mon adaptabilité issues de mon parcours artistique sont des atouts uniques dans ma pratique du développement. <br />Déterminée et bienveillante, je suis résolue à monter en compétences et à exploiter mon potentiel créatif dans ce métier en constante évolution.
                        </p>

                    </div>
                    {/* mettre un <a href avec url du cv + un attribut download> au lieu d'une balise bouton */}
                    <button className='cv'>
                        <a href={cv} download="CV-AURORE-BLAISON">Télécharger mon CV</a>
                    </button>
                </div>


            </div>

        </div>
    )
}

export default Presentation