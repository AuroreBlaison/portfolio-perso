import React, { useState } from 'react'
import competences from '../competences'

const Competences = () => {

    const [clic, setClic] = useState({
        statusFront: false,
        statusBack: false,
    })

    const affichFront = competences.filter(item => {
        return (item.category === "front")
    }).map(item => {
        return (
            <li key={item.name}>{item.name}</li>
        )
    })

    const affichBack = competences.filter(item => {
        return (item.category === "back")
    }).map(item => {
        return (
            <li key={item.name}>{item.name}</li>
        )
    })

    const handleClickFront = () => {
        setClic({
            statusFront: !clic.statusFront,
            statusBack: clic.statusBack,
        })
    };

    const handleClickBack = () => {
        setClic({
            statusFront: clic.statusFront,
            statusBack: !clic.statusBack,
        })

    };

    return (
        <div className='competences' id="skills">

            <h1>Compétences</h1>

            <div className="competences-wrapper">

                <div className="front" onClick={handleClickFront}>
                    {clic.statusFront ? <ul>{affichFront} </ul> : <p>front-end</p>}
                </div>
                <div className="back" onClick={handleClickBack}>
                    {clic.statusBack ? <ul>{affichBack} </ul> : <p>back-end</p>}
                </div>
            </div>
        </div>
    )
}

export default Competences