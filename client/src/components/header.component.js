
import React from "react";
import {Component} from "react";
import banner from '../images/banner.png';
import '../styles/header.component.css';


export default class Header extends Component {

    render() {
        return (
            <img src={banner} alt="banner" />
        )
    }
}
