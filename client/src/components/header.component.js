
import React from "react";
import {Component} from "react";
import {Link} from "react-router-dom";
import banner from '../assets/images/banner.png';
import '../assets/styles/header.component.css';


export default class Header extends Component {

    render() {
        return (
            <Link to={`/`}>
                <img className="banner" src={banner} alt="banner" />
            </Link>
        )
    }
}
