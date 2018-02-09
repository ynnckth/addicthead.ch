
import React from "react";
import {Component} from "react";
import '../assets/styles/music.page.css';


export default class Music extends Component {

    render() {
        return (
            <div>
                <h1>music</h1>
                <div className="albums">
                    <div className="album">
                        <iframe className="bandcamp-player"
                                src="https://bandcamp.com/EmbeddedPlayer/album=547180559/size=large/bgcol=ffffff/linkcol=333333/transparent=true/"
                                seamless><a href="http://addicthead.bandcamp.com/album/addicthead">Addicthead by ADDICTHEAD</a></iframe>
                    </div>
                    <div className="album">
                        <iframe className="bandcamp-player"
                                src="http://bandcamp.com/EmbeddedPlayer/album=2214690287/size=large/bgcol=ffffff/linkcol=333333/transparent=true/"
                                seamless><a href="http://addicthead.bandcamp.com/album/strangers-7">Strangers 7&#39;&#39; by ADDICTHEAD</a></iframe>
                    </div>
                    <div className="album">
                        <iframe className="bandcamp-player"
                                src="http://bandcamp.com/EmbeddedPlayer/album=3305211210/size=large/bgcol=ffffff/linkcol=333333/transparent=true/"
                                seamless><a href="http://addicthead.bandcamp.com/album/spring-sessions">Spring Sessions by ADDICTHEAD</a></iframe>
                    </div>
                </div>
            </div>
        )
    }
}
