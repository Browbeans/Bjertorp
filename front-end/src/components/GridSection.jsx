import "../style/main.css"
import { Link } from "react-router-dom"

function GridSection() {

    return(
        <div className="grid-section">
            <div className="news">
                <Link to="/news" style={{textDecoration: "none"}}>
                    <h3>
                        Nyheter
                    </h3>
                </Link>
            </div>
            <div className="court-status">
                <Link to="/court-status" style={{textDecoration: "none"}}>
                    <h3>
                        Banstatus
                    </h3>
                </ Link>
            </div>

            <div className="booking">
                <Link to="/booking" style={{textDecoration: "none"}}>
                    <h3>
                       Boka din tid här
                    </h3>
                </Link>
            </div>
            <div className="court-guide">
                <Link to="/court-guide" style={{textDecoration: "none"}}>
                    <h3>
                        Banan
                    </h3>
                </Link>    
            </div>
        </div>
    )
}

export default GridSection