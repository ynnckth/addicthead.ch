
import React from "react";
import {Component} from "react";
import {Link} from "react-router-dom";
import banner from '../images/banner.png';
import '../styles/header.component.css';


export default class Header extends Component {

    render() {
        return (
            <Link to={`/`}>
                <img src={banner} alt="banner" />
            </Link>
        )
    }
}
