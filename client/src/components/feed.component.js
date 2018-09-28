
import React from "react";
import {Component} from "react";
import '../assets/styles/feed.component.css';


export default class Feed extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="last-gig">
                    <img src={require('../assets/images/feed/last_gig.jpg')} />
                    <p>
                        Nach Zehn Jahren harten Riffs und kosmischen Grooves feiern Addicthead ihr Jubiläum im Gaswerk. Es werden aber nicht nur hemmungslos die Haare geschüttelt, sondern vielleicht auch die eine oder andere Träne vergossen - denn Addicthead geben ihr letztes Konzert.<br/>
                        <br/>
                        2008 wurde Addicthead von vier Teenagern gegründet, die sich durch ihr Interesse an schweren und psychedelischen Musik gefunden hatten. Das Interesse wurde durch zahlreiche Besuche an legendären Stoner-Konzerten im Gaswerk zur Liebe gesteigert und im Debut-Album, dass 9 Jahre später das Licht der Welt erblickte, musikalisch verarbeitet. Nun ist es für die vier Musiker aber Zeit, einen Schlussstrich zu ziehen, um frisch anzufangen und so neue tiefen der psychedelischen Rockmusik zu erforschen.
                        Das Kapitel Addicthead ist zu Ende, die Band existiert aber weiter. Sie zieht sich in einen tiefen Winterschlaf zurück, um in unbestimmter Zukunft unter neuem Namen, neuem Konzept und neuen Riffs wieder aufzutauchen.<br/>
                        <br/>
                        Mit dabei als Special Guests sind Monument, P. Noir (Ex-Snarf) und VJ Grypus, mit denen Addicthead schon einige Konzerte bestritten haben.
                    </p>
                </div>

            </div>
        )
    }
}
