
import React from "react";
import {Component} from "react";
import '../assets/styles/footer.component.css';


export default class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <p>© 2018 by addicthead
                    <a className="scroll-up-icon" href="#"><i className="fas fa-caret-up" /></a>
                </p>
            </div>
        )
    }
}
