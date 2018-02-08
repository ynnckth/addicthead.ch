
import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Header from "./components/header.component";
import Footer from "./components/footer.component";
import Home from "./pages/home.page";
import './styles/app.css';


export default class App extends Component {

    render() {
        return (
            <div className="main">
                <Header />
                <Switch>
                    <Route exact path='/' component={Home}/>
                </Switch>
                <Footer />
            </div>
        )
    }
}
