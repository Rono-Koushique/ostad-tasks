import { Icon } from "@iconify/react";

function Task({ task, setTasks }) {
    const toggleCompleted = (dateCreated) => {
        setTasks((prevState) => {
            const newState = [...prevState];
            newState.forEach((loopTask) => {
                if (loopTask.dateCreated === dateCreated) {
                    loopTask.completed = !loopTask.completed;
                }
            });
            return newState;
        });
    };

    const deleteTask = (dateCreated) => {
        setTasks((prevState) => {
            return prevState.filter((loopTask) => loopTask.dateCreated !== dateCreated);
        });
    };

    return (
        <div className="p-2 min-h-[3rem] rounded-[1.75rem] shadow-xl bg-neutral-950/50 text-neutral-400 flex items-center w-full gap-1.5">
            <div
                className={`ml-4 text-lg leading-tight py-2 flex-1 pr-4 break-all ${
                    task.completed ? "line-through" : ""
                }`}
            >
                {task.name}
            </div>
            <Button onClick={() => toggleCompleted(task.dateCreated)}>
                <Icon className="text-2xl" icon="mdi:tick" />
            </Button>
            <Button onClick={() => deleteTask(task.dateCreated)}>
                <Icon className="text-[1.6rem]" icon="solar:trash-bin-2-outline" />
            </Button>
        </div>
    );
}

function Button({ children, onClick }) {
    return (
        <button
            className="flex items-center justify-center bg-neutral-300/20 active:bg-neutral-400/50 hover:bg-neutral-200/70 w-[2.1rem] aspect-square rounded-full text-neutral-900"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Task;
