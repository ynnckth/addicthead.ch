
import React from "react";
import {Component} from "react";
import GigsComponent from "../components/gigs.component";
import GalleryComponent from "../components/gallery.component";


export default class Home extends Component {

    render() {
        return (
            <div>
                <GigsComponent showPast={false} />

                <h2>some impressions...</h2>
                <GalleryComponent/>
            </div>
        )
    }
}
