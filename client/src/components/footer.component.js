
import React from "react";
import {Component} from "react";
import '../assets/styles/footer.component.css';


export default class Footer extends Component {

    scrollToTop() {
        document.body.scrollTop = 0;            // Safari
        document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
    }

    render() {
        return (
            <div className="footer">
                <p>© 2018 by addicthead
                    <span onClick={this.scrollToTop} className="scroll-up-icon">
                        <i className="fas fa-caret-up" />
                    </span>
                </p>
            </div>
        )
    }
}
