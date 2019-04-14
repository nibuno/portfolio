import React from 'react'
import twitter from '../images/icons8-twitter.svg'
import github from '../images/icons8-github.svg'

const Contact = () => (
    <div id="contact">
        <h2>Contact</h2>
        <a href='https://twitter.com/sakura_willow'><img className="logo" src={twitter} alt="twitter" /></a>
        <a href='https://github.com/Yumihiki'><img className="logo" src={github} alt="github" /></a>
    </div>
)

export default Contact