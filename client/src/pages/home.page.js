
import React from "react";
import {Component} from "react";
import GigsComponent from "../components/gigs.component";
import GalleryComponent from "../components/gallery.component";
import Feed from "../components/feed.component";
import '../assets/styles/home.page.css';


export default class Home extends Component {

    render() {
        return (
            <div>
                <div className="album-preview-container">
                    <div className="album-preview">
                        <iframe className="bandcamp-iframe" src="https://bandcamp.com/EmbeddedPlayer/album=547180559/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/transparent=true/" seamless>
                            <a href="http://addicthead.bandcamp.com/album/addicthead">Addicthead by ADDICTHEAD</a>
                        </iframe>
                    </div>
                </div>

                <GigsComponent showPast={false} />

                <Feed />

                <div className="some-impressions">
                    <h2>some impressions...</h2>
                    <GalleryComponent/>
                </div>
            </div>
        )
    }
}
