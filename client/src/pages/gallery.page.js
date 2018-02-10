
import React from "react";
import {Component} from "react";
import GalleryComponent from "../components/gallery.component";


export default class Gallery extends Component {

    render() {
        return (
            <div>
                <h1>gallery</h1>
                <GalleryComponent />
            </div>
        )
    }
}
