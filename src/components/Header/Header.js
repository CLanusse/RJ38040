import { useEffect } from 'react'
import './Header.scss'


export const Header = () => {


    return (
        <header className="bg-header">
            <div className="header-container">

                <h1 className="header-title">CODER</h1>

                <nav className="header-navbar">
                    <a className="header-navlink">LINK 1</a>
                    <a className="header-navlink">LINK 2</a>
                    <a className="header-navlink">LINK 3</a>
                </nav>
            </div>
        </header>
    )
}