
import React from "react";
import {Component} from "react";
import arrowUp from '../images/arrow-up-icon.png';
import '../styles/footer.component.css';


export default class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <p>© 2018 by addicthead
                    <a href="#"><img className="scroll-up-icon" src={arrowUp} /></a>
                </p>
            </div>
        )
    }
}
