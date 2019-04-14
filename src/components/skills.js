import React from 'react'
import illustrator from '../images/illustrator.svg'
import indesign from '../images/InDesign.svg'
import photoshop from '../images/Photoshop.svg'
import php from '../images/php-logo.svg'
import access from '../images/access_2010.png'

export const Skills = () => (
    <div id="skills">
        <h2>Skills</h2>
            <img className="logo" src={illustrator} alt="illustrator" />
            <img className="logo" src={photoshop} alt="Photoshop" />
            <img className="logo" src={indesign} alt="InDesign" />
            <img className="logo" src={php} alt="PHP-logo" />
            <img className="logo" src={access} alt="access" />
    </div>
)

export default Skills