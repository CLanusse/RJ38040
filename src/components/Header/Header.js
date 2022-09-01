
import './Header.scss'
import { Link } from 'react-router-dom'

export const Header = () => {


    return (
        <header className="bg-header">
            <div className="header-container">

                <Link to="/"><h1 className="header-title">CODER</h1></Link>

                <nav className="header-navbar">
                    <Link to='/productos/remeras' className="header-navlink">Remeras</Link>
                    <Link to='/productos/zapatillas' className="header-navlink">Zapatillas</Link>
                    <Link to='/productos/gorros' className="header-navlink">Gorros</Link>
                </nav>
            </div>
        </header>
    )
}