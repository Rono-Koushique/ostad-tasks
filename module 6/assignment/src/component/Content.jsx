import React from "react";

function Content() {
    const [text, setText] = React.useState("");
    const inputRef = React.useRef();

    const handleClick = () => {
        setText(inputRef.current.value);
    };

    return (
        <div className="page-content">
            <div className="container">
                <div className="form-control">
                    <label htmlFor="input-text">Input</label>
                    <textarea ref={inputRef} name="input-text" />
                </div>
                <div>
                    <button className="update-btn" onClick={handleClick}>
                        Update
                    </button>
                </div>
                <div className="output-container">
                    <label>Output</label>
                    <pre className="output">{text}</pre>
                </div>
            </div>
        </div>
    );
}

export default Content;
