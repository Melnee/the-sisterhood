import React from "react";
import Events from "./../../assets/Events.jpg";
import Join from "./../../assets/Join.jpg";
import "./styles.scss";

const Directory = props => {
    return (
        <div className = "directory">
            <div className = "wrap">
                <div
                    className = "item"
                    style = {{
                        backgroundImage: 'url(' + Events + ')'
                    }}
                >
                    <a>
                        Events
                    </a>
                </div>
                <div
                    className = "item"
                    style = {{
                        backgroundImage: 'url(' + Join + ')'
                    }}
                >
                    <a>
                        Join
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Directory;