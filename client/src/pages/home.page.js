
import React from "react";
import {Component} from "react";
import GigsComponent from "../components/gigs.component";


export default class Home extends Component {

    render() {
        return (
            <div>
                <GigsComponent showPast={false} />
            </div>
        )
    }
}
