
import React from "react";
import {Component} from "react";
import GigsComponent from "../components/gigs.component";


export default class Gigs extends Component {

    render() {
        return (
            <div>
                <h1>gigs</h1>
                <GigsComponent showPast={true} />
            </div>
        )
    }
}
