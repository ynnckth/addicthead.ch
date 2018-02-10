
import React from "react";
import {Component} from "react";


export default class GigsComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>upcoming</h2>
                <ul>
                    <li>coming soon...</li>
                </ul>

                {this.props.showPast &&
                    <div>
                        <h2>past</h2>
                        <ul>
                            <li>2018/01/18 schwarzer engel st. gallen w/ franky four fingers</li>
                            <li>2018/01/05 off basel w/ franky four fingers</li>
                            <li>2017/11/11 kaff frauenfeld w/ monument</li>
                            <li>2017/10/20 amriswil w/ franky four fingers, bordeaux lips</li>
                            <li>2017/09/30 z88 kreuzlingen w/ franky four fingers</li>
                            <li>2017/07/27 musig uf de gass rorschach</li>
                            <li>2017/06/16 openair grienen winterthur</li>
                            <li>2017/08/05 bambole openair winterthur</li>
                            <li>2017/05/27 horst kreuzlingen</li>
                            <li>2017/05/13 strange noise vol. 1 kloten w/ roadkill rabits, the shattered mind machine</li>
                            <li>2017/04/29 mais oui zürich</li>
                            <li>2017/03/14 werk 21 zürich</li>
                            <li>2017/02/18 gaswerk winterthur w/ monkey3</li>
                            <li>2017/01/21 restessbar winterthur</li>
                            <li>2016/12/31 kaff frauenfeld w/ deaddrunk, franky four fingers</li>
                            <li>2016/11/12 akut thun w/ the chemical mindfuck show</li>
                            <li>2016/04/01 helvti winterthur w/ black media</li>
                            <li>2016/03/10 kaff frauenfeld w/ rotor (de)</li>
                            <li>2015/12/05 "strangers" single release horst klub kreuzlingen</li>
                            <li>2015/11/07 jugendhaus winterthur</li>
                            <li>2015/10/15 kaff frauenfeld w/ papir (dnk)</li>
                            <li>2015/07/31 out in the green garden kulturfestival frauenfeld</li>
                            <li>2015/05/30 hafe17 openair kreuzlingen w/ the peacocks</li>
                            <li>2014/08/01 out in the green garden kulturfestival frauenfeld</li>
                            <li>2014/05/10 kaff frauenfeld w/ hubeskyla</li>
                            <li>2014/03/15 kulturbahnhof affoltern w/ snarf</li>
                            <li>2014/01/25 hafe17 kreuzlingen w/ urbane praxen</li>
                            <li>2013/11/23 langstars zürich w/ the living shape</li>
                            <li>2013/09/28 eisenwerk frauenfeld w/ monsieur brisebard, parrot to the moon</li>
                            <li>2013/09/14 komturei tobel w/ honeyrider</li>
                            <li>2013/07/13 komturei tobel, rock im knast 3</li>
                            <li>2013/07/06 sundazed festival frauenfeld w/ franky four fingers</li>
                            <li>2013/07/05 contrast bar konstanz (de), molten universe w/ up in the sky</li>
                            <li>2013/02/02 kaff frauenfeld w/ franky four fingers</li>
                            <li>2013/01/26 t.o.m. kreuzlingen w/ honeyrider</li>
                            <li>2013/01/12 rümpeltum st. gallen w/ gletscher</li>
                            <li>2012/11/24 grabenhalle st. gallen</li>
                            <li>2012/10/20 kaff frauenfeld w/ snarf</li>
                            <li>2012/10/12 gare de lion wil</li>
                            <li>2012/06/15 sundazed festival frauenfeld w/ franky four fingers</li>
                            <li>2012/04/28 kaff frauenfeld w/ navel</li>
                            <li>2012/03/20 z88 kreuzlingen w/ franky four fingers</li>
                            <li>2011/08/01 out in the green garden kulturfestival frauenfeld</li>
                            <li>2011/07/09 komturei tobel, rock im knast 2</li>
                            <li>2011/03/21 gisi winterthur w/ mono circus, franky four fingers</li>
                        </ul>
                    </div>
                }
            </div>
        )
    }
}
