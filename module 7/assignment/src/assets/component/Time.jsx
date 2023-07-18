import { useState, useEffect } from "react";

function Time() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="text-neutral-400">
            {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}
        </div>
    );
}

export default Time;
