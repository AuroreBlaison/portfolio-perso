import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            {/* <div className="logo">
                Aurore Blaison
            </div> */}

            <ul className='nav'>
                <li> <a href='#prez'>présentation </a></li>
                <li> <a href='#skills'>compétences</a></li>
                <li><a href='#projets'>portfolio</a></li>
                <li><a href='#contact'>contact</a></li>
            </ul>
        </div>
    )
}

export default Header