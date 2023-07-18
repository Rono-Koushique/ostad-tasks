import { useState } from "react";

function NewTask({ setAllTasks }) {
    const initialValue = "";
    const [task, setTask] = useState(initialValue);

    const handleChange = (event) => {
        setTask(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTask = {
            name: task,
            dateCreated: new Date(),
            completed: false,
        };
        setAllTasks((prevState) => {
            return [...prevState, newTask];
        });
        setTask(initialValue);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-stretch w-full rounded-full overflow-hidden shadow-[0_2px_6px] shadow-black/30 focus-within:shadow-[0_3px_12px]"
            autoComplete="off"
        >
            <div className="form-control flex-1">
                <input
                    type="text"
                    name="new-task"
                    placeholder="Create new task"
                    value={task}
                    onChange={handleChange}
                    className="text-lg w-full px-6 py-3 bg-neutral-950/70 hover:bg-neutral-950/80 text-neutral-300 focus:outline-none"
                />
            </div>
            <button
                type="submit"
                className="self-stretch px-6 text-neutral-50 bg-cyan-800 hover:bg-cyan-900 active:bg-cyan-700 font-semibold transition duration-100 ease-in-out"
            >
                Add Task
            </button>
        </form>
    );
}

export default NewTask;
