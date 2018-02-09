import React from "react";
import {Component} from "react";
import {Link} from "react-router-dom";
import bandcamp from '../images/bandcamp-icon.png';
import youtube from '../images/youtube-icon.png';
import facebook from '../images/facebook-icon.png';
import '../styles/navbar.component.css';


export default class Navbar extends Component {

    render() {
        return (
            <div className="navbar">
                <ul>
                    <Link to={`/`}><li>home</li></Link>
                    <Link to={`/music`}><li>music</li></Link>
                    <Link to={`/gigs`}><li>gigs</li></Link>
                    <Link to={`/gallery`}><li>gallery</li></Link>
                    <Link to={`/about`}><li>about</li></Link>
                    <Link to={`/contact`}><li>contact</li></Link>
                </ul>

                <div className="refs">
                    <a className="link"
                       href="http://addicthead.bandcamp.com/releases">
                        <img src={bandcamp} alt="bandcamp" height="20" width="20" />
                    </a>
                    <a className="link"
                       href="https://www.youtube.com/channel/UCLSLQIwQ4BleT7IsoHNdBGw">
                        <img src={youtube} alt="youtube" height="27" width="27" />
                    </a>
                    <a className="link"
                       href="https://www.facebook.com/addicthead">
                        <img src={facebook} alt="facebook" height="16" width="16" />
                    </a>
                </div>
            </div>
        )
    }
}
