import React from "react";
import {Component} from "react";
import {Link} from "react-router-dom";
import '../assets/styles/navbar.component.css';


export default class Navbar extends Component {

    render() {
        return (
            <div className="navbar">
                <ul className="list">
                    <Link to={`/`}><li>home</li></Link>
                    <Link to={`/music`}><li>music</li></Link>
                    <Link to={`/gigs`}><li>gigs</li></Link>
                    <Link to={`/gallery`}><li>gallery</li></Link>
                    <Link to={`/about`}><li>about</li></Link>
                    <Link to={`/contact`}><li>contact</li></Link>
                </ul>

                <div className="refs">
                    <a className="link" href="http://addicthead.bandcamp.com/releases">
                        <i className="fab fa-bandcamp" />
                    </a>
                    <a className="link" href="https://www.youtube.com/channel/UCLSLQIwQ4BleT7IsoHNdBGw">
                        <i className="fab fa-youtube" />
                    </a>
                    <a className="link" href="https://www.facebook.com/addicthead">
                        <i className="fab fa-facebook" />
                    </a>
                </div>
            </div>
        )
    }
}
