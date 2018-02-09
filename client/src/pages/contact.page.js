
import React from "react";
import {Component} from "react";
import pressDE from '../assets/press_DE.pdf';
import pressEN from '../assets/press_EN.pdf';
import '../assets/styles/contact.page.css';


export default class Contact extends Component {

    render() {
        return (
            <div className="contact">
                <h1>contact</h1>

                <p>booking and everything</p>
                <a href="mailto:contact@addicthead.ch">contact[at]addicthead.ch</a>

                <p>press (de)</p>
                <a href={pressDE} download>click to download</a>

                <p>press (en)</p>
                <a href={pressEN} download>click to download</a>
            </div>
        )
    }
}
