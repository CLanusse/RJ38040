import './Header.scss'

export const Header = () => {

    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__logo">LOGO</h1>

                <nav className="header__navbar">
                    <p className="header__link">Enlace 1</p>
                    <p className="header__link">Enlace 2</p>
                    <p className="header__link">Enlace 3</p>
                </nav>

                {/* <CartWidget /> */}
            </div>
        </header>
    )
}