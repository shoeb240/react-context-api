import React from "react";
import ThemeContext from "../contexts/ThemeContext"

export default class ClickContent extends React.Component {
    render() {
        let {changeBackground} = this.context;
        return(
            <> 
            <button onClick={changeBackground} >Change Background Color</button>
            </>
        );
    }
}

ClickContent.contextType = ThemeContext;