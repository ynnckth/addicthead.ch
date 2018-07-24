
import React from "react";
import {Component} from "react";

import GIGS from "../assets/gigs";

export default class GigsComponent extends Component {

    constructor(props) {
        super(props);
        this.upcomingGigs = GIGS.filter(gig => new Date(gig.date) >= new Date());
        this.pastGigs = GIGS.filter(gig => new Date(gig.date) < new Date());
    }

    render() {
        return (
            <div>
                <h2>upcoming</h2>
                <ul>
                    {this.upcomingGigs.length > 0
                        ? this.upcomingGigs.map(gig => <li>{`${gig.date} ${gig.description}`}</li>)
                        : <li>coming soon...</li>}
                </ul>

                {this.props.showPast &&
                    <div>
                        <h2>past</h2>
                        <ul>
                            {this.pastGigs.map(gig => <li>{`${gig.date} ${gig.description}`}</li>)}
                        </ul>
                    </div>
                }
            </div>
        )
    }
}
