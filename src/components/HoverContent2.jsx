import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export default function HoverContent2() {
    const context = useContext(ThemeContext);
    const {bgColor, changeBackground} = context;
    
    return (
        <>
            <h1 onMouseOver={changeBackground} style={{'backgroundColor': bgColor}}>Background Color Changes2</h1>
        </>
    );
}