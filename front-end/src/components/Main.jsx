import { Route, Switch } from "react-router-dom"
import "../style/main.css"
import GridSection from "./GridSection"
import News from "./news"
import SingleNews from "./SingleNews"

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
                <Route path="/specificNews/:id">
                     <SingleNews/>
                </Route>

            </Switch>
        </div>
    )
}

export default Main