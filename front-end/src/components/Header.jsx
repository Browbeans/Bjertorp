import "../style/header.css"
import stenhaga from "../assets/pics/stenhaga.png"
import swegon from "../assets/pics/swegon.png"
import bjertorp from "../assets/pics/Hanna/small-logo.png"
import { Link } from "react-router-dom"

function Header() {
    return(
        <div className="header">
            <div className="left-image">
                <img src={stenhaga} alt="" />
            </div>
            <div className="navigation">
                <span>MENU</span>
                <span>MENU</span>
                <Link to="/">
                    <img src={bjertorp} alt="" />
                </Link>
                <span>MENU</span>
                <span>MENU</span>
            </div>
            <div className="right-image">
                <img src={swegon} alt="" />
            </div>
        </div>
    )
}

export default Header