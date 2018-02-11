
import React from "react";
import {Component} from "react";
import '../assets/styles/gallery.component.css';

function importAll(r) {
    return r.keys().map(r);
}
const THUMBS = importAll(require.context('../assets/images/gigs/thumbs', false, /\.(png|jpe?g|svg)$/));
const LARGES = importAll(require.context('../assets/images/gigs/larges', false, /\.(png|jpe?g|svg)$/));

export default class GalleryComponent extends Component {

    render() {
        return (
            <div className="gallery">
                {THUMBS.map((thumb, idx) =>
                    <div className="thumb">
                        <a href={LARGES[idx]} data-lightbox="mygallery">
                            <img src={thumb} />
                        </a>
                    </div>
                )}
            </div>
        )
    }
}
