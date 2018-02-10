
import React from "react";
import {Component} from "react";
import '../assets/styles/gallery.component.css';


function importAll(r) {
    return r.keys().map(r);
}
const thumbs = importAll(require.context('../assets/images/gigs/thumbs', false, /\.(png|jpe?g|svg)$/));


export default class GalleryComponent extends Component {

    render() {
        return (
            <div className="gallery">
                {thumbs.map(thumb => <div className="thumb"><img src={thumb} /></div>)}
            </div>
        )
    }
}
