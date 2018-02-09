
import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Header from "./components/header.component";
import Navbar from "./components/navbar.component";
import Footer from "./components/footer.component";
import Home from "./pages/home.page";
import Music from "./pages/music.page";
import Gigs from "./pages/gigs.page";
import Gallery from "./pages/gallery.page";
import About from "./pages/about.page";
import Contact from "./pages/contact.page";
import './assets/styles/app.css';


export default class App extends Component {

    render() {
        return (
            <div className="main">
                <Header />
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/music' component={Music}/>
                    <Route exact path='/gigs' component={Gigs}/>
                    <Route exact path='/gallery' component={Gallery}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/contact' component={Contact}/>
                </Switch>
                <Footer />
            </div>
        )
    }
}
