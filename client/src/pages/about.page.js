import React from "react";
import {Component} from "react";
import aboutBand from '../assets/images/about-band.jpg';
import '../assets/styles/about.page.css';

const Langs = Object.freeze({
    EN: Symbol("english"),
    DE: Symbol("german"),
});

export default class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language: Langs.EN
        }
    }

    setLanguage(language) {
        this.setState({language: language});
    }

    render() {
        return (
            <div>
                <h1>about</h1>
                <div>
                    <img className="about-photo" src={aboutBand} alt="about band"/>
                    <p className="credits">photo by fia sigfalk</p>
                    <p className="legend">tobias rüetschi (bass), rémy sax (vocals), mirko widmer (guitar), yannick
                        streit (drums)</p>
                </div>

                <div className="toggle-language">
                    <a onClick={() => this.setLanguage(Langs.EN)}>english</a> | <a onClick={() => this.setLanguage(Langs.DE)}>deutsch</a>
                </div>

                {this.state.language === Langs.EN ?
                    <div>
                        <p>we're a young psych-band from frauenfeld, switzerland. after seven years of playing in
                            various small stages
                            in eastern switzerland and working on our own sound we're proud to present our first
                            physical release,
                            the „strangers 7-inch“, coming out this fall.</p>
                        <p>our music is a mix between seemingly floating, psychedelic jams, neck-breaking, hard riffs
                            and danceable,
                            deep grooves. since the beginnings of our band's history, we've enjoyed to play experimental
                            and improvised
                            jams in our rehearsal room and on stage.
                        </p>
                    </div>

                    : <div>
                        <p>wir sind eine junge psych-band aus frauenfeld. nachdem wir sieben jahre die bühnen der ostschweizer kulturlokale
                            bespielt und an unserem eigenen sound getüftelt haben, veröffentlichen wir im herbst 2015 mit der „strangers
                            7-inch“ unser erstes physisches release.</p>
                        <p>
                            unsere musik ist eine mischung aus schwebenden, psychedelischen jams, nackenbrechenden, harten riffs und tanzbaren, tiefen
                            grooves. seit anbeginn der bandgeschichte lassen wir unserer liebe für experimentelle und psychedelische
                            jam-sessions freien lauf, im proberaum sowie auf der stage.
                        </p>
                    </div>
                }
            </div>
        )
    }
}
