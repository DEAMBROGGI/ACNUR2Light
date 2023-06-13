import "../styles/App.css"
import { Link as LinkRouter } from "react-router-dom"

function NavBar() {
    const NavLinks = [
        {
            name: "Home",
            path: "/Home"
        },
        {
            name: "Cities",
            path: "/Cities"
        },
        {
            name: "About Us",
            path: "/AboutUs"
        },
        {
            name: "Contacts",
            path: "/Contacts"
        }]

    return (
        <div className="NavBar">
            <LinkRouter to={"/Home"}><h1>LOGO</h1></LinkRouter>
                {
                    NavLinks.map(link => {
                        return <LinkRouter className="NavItem" to={link.path}>{link.name}</LinkRouter>
                    })

                }
        </div>
    )
}

export default NavBar;