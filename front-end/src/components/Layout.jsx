import "../style/layout.css"
import Header from "./Header"
import Main from "./Main"

function Layout() {
    return (
        <div className="layout">
            <Header />
            <div className="main-container">
                <Main />
            </div>
        </div>
    )
}

export default Layout