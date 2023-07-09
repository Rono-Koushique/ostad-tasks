import React from "react";

function Content() {
    const [text, setText] = React.useState("");

    const handleClick = () => {
        const inputTextEl = document.querySelector("#input-text");
        setText(inputTextEl.value);
    };

    return (
        <div className="page-content">
            <div className="container">
                <div className="form-control">
                    <label htmlFor="input-text">Input</label>
                    <textarea id="input-text" name="input-text" />
                </div>
                <div>
                    <button className="update-btn" onClick={handleClick}>
                        Update
                    </button>
                </div>
                <div>
                    <label>Output</label>
                    <pre className="output">{text}</pre>
                </div>
            </div>
        </div>
    );
}

export default Content;
