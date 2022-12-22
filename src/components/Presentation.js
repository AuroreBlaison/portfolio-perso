import React from 'react'
import portrait from '../img/portrait.jpg'
import motif from '../img/motif.jpg'

const Presentation = () => {
    return (
        <div className='presentation'>

            <div className="visuel">
                <img id='motif' src={motif} alt="motif memphis" />
                <div id="portrait">
                    <img src={portrait} alt="portrait" />
                </div>
            </div>

            <div className="contenu">
                <h1>Aurore Blaison</h1>
                <h2>developpeuse web</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officia obcaecati enim aliquid fuga vitae eius asperiores, adipisci laudantium doloribus omnis consectetur? Quae fuga suscipit quibusdam ratione, non ea atque?</p>

                {/* mettre un <a href avec url du cv + un attribut download> au lieu d'une balise bouton */}
                <button className='cv'>
                    telecharger mon CV
                </button>
            </div>
        </div>
    )
}

export default Presentation