import React from 'react';

import './InfoBar.css';

const InfoBar = ({ room }) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src="https://raw.githubusercontent.com/adrianhajdin/project_chat_application/master/client/src/icons/onlineIcon.png" alt="online image"/>
            <h3>{room}</h3>
        </div>
        <div className="RightInnerContainer">
            <a href="/"><img src="https://raw.githubusercontent.com/adrianhajdin/project_chat_application/master/client/src/icons/closeIcon.png" alt="close image"/></a>
        </div>
    </div>
)

export default InfoBar;