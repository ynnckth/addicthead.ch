
import React from "react";
import {Component} from "react";

function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('../assets/images/gigs/thumbs', false, /\.(png|jpe?g|svg)$/));


export default class GalleryComponent extends Component {

    render() {
        return (
            <div>
                <img src={images[0]}/>
            </div>
        )
    }
}
