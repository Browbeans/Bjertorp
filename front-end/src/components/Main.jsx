import { Route, Switch } from "react-router-dom"
import "../style/main.css"
import GridSection from "./GridSection"
import News from "./news"

function Main() {
    return(
        <div className="main">
            <Switch>
                <Route exact path="/">
                    <GridSection />
                </Route>
                <Route path="/news">
                    <News />
                </Route>
                <Route path="/court-status">

                </Route>
                <Route path="/booking">

                </Route>
                <Route path="/court-guide">

                </Route>

            </Switch>
        </div>
    )
}

export default Main