import React from 'react';
import '../common.css'
import './headerBar.css';
import sessionData from "../../session/sessionData";
import logoAmsDark from '../../brand/logo-ams-dark.png';
import logoDhsDark from '../../brand/logo-dhs-dark.png';
import logoFisDark from '../../brand/logo-fis-dark.png';
import {ReactComponent as BaeLogo} from '../../brand/logo_baesystems_borderless.svg';

class HeaderBar extends React.Component {
    render() {
        return (
            <div id="headerBar" className="headerBar">
                <div className="orangeBar"/>
                <div id="integrity" className="titleText">Integrity</div>
                <div id="hub" className="titleText">Hub</div>

                <div className="logo">
                    <img src={logoAmsDark} alt="ihub-Logo"/>
                    <img src={logoFisDark} alt="ihub-Logo"/>
                    <img src={logoDhsDark} alt="ihub-Logo"/>
                </div>
                <div className="userName">{sessionData.getUserName()}</div>
                <BaeLogo className="baeLogo"/>
            </div>
        )
    }
}

export default HeaderBar