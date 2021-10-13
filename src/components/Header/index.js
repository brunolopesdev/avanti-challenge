import { useContext, useState } from "react"
import { BsFillCartFill } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from "react-router-dom"
import DataContext from "../../Context"
import Logo from "../../assets/logo.png"
import "./index.scss"

export const Header = () => {
    const { getCartTotal } = useContext(DataContext)

    const [showMenu, setShowMenu] = useState(false)

    const handleClick = () => setShowMenu(!showMenu)

    let mobileMenu

    if (mobileMenu) {
        mobileMenu =
            <nav className="mobile__navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Menu 2</Link></li>
                <li><Link to="/">Menu 3</Link></li>
                <li><Link to="/">Menu 4</Link></li>
            </nav>
    }

    return (
        <header className="avanti__header">
            <div className="avanti__topContent">
                <div className="avanti__logo"><img src={Logo} alt="Logotipo" /></div>
                <div className="avanti__searchBox">
                    <input type="text" placeholder="O que procura?" />
                    <button type="submit">OK</button>
                </div>
                <div className="avanti__miniCart">
                    <Link to="/cart"><i><BsFillCartFill /></i></Link>
                    <p>{getCartTotal()}</p>
                </div>
                <i className="hamburger" onClick={() => setShowMenu(!showMenu)}>
                    <GiHamburgerMenu />
                </i>
            </div>
            <nav className="avanti__navbar">
                <ul className="navbar_links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Categorias</Link></li>
                    <li><Link to="/">Contato</Link></li>
                    <li><Link to="/">Entrega</Link></li>
                </ul>
            </nav>

            {showMenu && (
                <nav className="mobile__navbar">
                    <ul className="navbar_links">
                        <li><Link to="/" onClick={() => handleClick(!showMenu)}>Home</Link></li>
                        <li><Link to="/" onClick={() => handleClick(!showMenu)}>Categorias</Link></li>
                        <li><Link to="/" onClick={() => handleClick(!showMenu)}>Contato</Link></li>
                        <li><Link to="/" onClick={() => handleClick(!showMenu)}>Entrega</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    )
}
