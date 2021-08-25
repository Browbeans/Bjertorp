import "../style/main.css"

function GridSection() {

    return(
        <div className="grid-section">
            <div className="news">
                <h3>
                    Nyheter
                </h3>
            </div>
            <div className="court-status">
                <h3>
                    Banstatus
                </h3>
            </div>
            <div className="booking">
                <h3>
                    Boka din tid här
                </h3>
            </div>
            <div className="court-guide">
                <h3>
                    Banan
                </h3>
            </div>
        </div>
    )
}

export default GridSection