import React from 'react'
import profileImage from "../assest/img/Amish.jpg"

const Header = () => {
    return (
        <div className='header-container' id='home'>
            <div className='header-left'>
                <div className='profile-image'>
                    <img src={profileImage} />
                </div>
            </div>
            <div className='header-right'>
                <div className='header-right-content'>
                    <h3>Web Developer</h3>
                    <h1>Amish Ranjan</h1>
                    <p>I'm passionate about developing a better world through technology. I've always been an analytical problem solver as well and the software developing process is a great fit for my personality and thinking style</p>
                    <div className='header-right-button'>
                        <a  download=""><button>Download</button></a>
                        <a href='#contact'><button>Contact</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header