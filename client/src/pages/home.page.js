
import React from "react";
import {Component} from "react";
import GigsComponent from "../components/gigs.component";


export default class Home extends Component {

    render() {
        /* TODO: extract into gigs component and reuse in gigs page */
        return (
            <div>
                <GigsComponent showPast={false} />
            </div>
        )
    }
}
