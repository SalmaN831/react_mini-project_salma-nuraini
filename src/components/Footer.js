import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';
import { ImBooks } from 'react-icons/im';

function Footer() {
    return (
        <div>
            <footer className='d-flex justify-content-around'>
                <div>
                    <h2><ImBooks size={40}/> Bibliophile Library</h2>
                </div>
                <div className='d-flex flex-column' style={{textAlign : "left"}}>
                    <h3 className='mb-3'>Contact</h3>
                    <p><HiOutlineMail/> salmanuraini00@gmail.com</p>
                    <p><BsTelephone/> 0858-0487-7619</p>
                    <div className='d-flex justify-content-around'>
                        <a href='https://www.instagram.com/ssalma28/' className='icon-medsos'><FaInstagram size={30} /></a>
                        <a href='https://github.com/SalmaN831' className='icon-medsos'><FaLinkedin size={30}/></a>
                        <a href='https://github.com/SalmaN831' className='icon-medsos'><FaGithub size={30}/></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
