import React from 'react'
import './style.css'
import { ImBooks } from 'react-icons/im';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <header className='center header'>
                <h1><ImBooks size={40}/> Bibliophile Library</h1>
                <h5>Takes you to another world</h5>
            </header>
            <div className='d-flex justify-content-center navbar'>
                <Link to="/" className='menu'>Home</Link>
                <Link to="/kategori" className='menu'>Kategori</Link>
                <Link to="/admin" className='menu'>Admin</Link>
            </div>
        </div>
    )
}

export default Header
