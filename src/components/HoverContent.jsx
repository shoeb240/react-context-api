import ThemeContext from "../contexts/ThemeContext";

export default function HoverContent() {
    return (
        <ThemeContext.Consumer>
            {({bgColor, changeBackground}) => (
                <h1 onMouseOver={changeBackground} style={{'backgroundColor': bgColor}}>Background Color Changes</h1>
            )}
        </ThemeContext.Consumer>
    );
}