
import React from "react";
import {Component} from "react";
import aboutBand from '../assets/images/about-band.jpg';
import '../assets/styles/about.page.css';


export default class About extends Component {

    render() {
        /* TODO: add translation toggle (english / german) */
        return (
            <div>
                <h1>about</h1>
                <div>
                    <img className="about-photo" src={aboutBand} alt="about band" />
                    <p className="credits">photo by fia sigfalk</p>
                    <p className="legend">tobias rüetschi (bass), rémy sax (vocals), mirko widmer (guitar), yannick streit (drums)</p>
                </div>
                <p>we're a young psych-band from frauenfeld, switzerland. after seven years of playing in various small stages
                    in eastern switzerland and working on our own sound we're proud to present our first physical release,
                    the „strangers 7-inch“, coming out this fall.</p>
                <p>our music is a mix between seemingly floating, psychedelic jams, neck-breaking, hard riffs and danceable,
                    deep grooves. since the beginnings of our band's history, we've enjoyed to play experimental and improvised
                    jams in our rehearsal room and on stage.
                </p>
            </div>
        )
    }
}
