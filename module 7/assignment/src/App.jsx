import { useState, useEffect } from "react";
import "./App.css";
import NewTask from "./assets/component/NewTask";
import Time from "./assets/component/Time";
import Task from "./assets/component/Task";

function App() {
    const [tasks, setTasks] = useState([]);
    const [sortedTasks, setSortedTasks] = useState([]);

    useEffect(() => {
        setSortedTasks(
            tasks.sort((a, b) => {
                if (a.completed && !b.completed) {
                    return 1;
                }
                if (!a.completed && b.completed) {
                    return -1;
                }
                return a.dateCreated - b.dateCreated;
            })
        );
    }, [tasks]);

    return (
        <main className="min-h-screen bg-gradient-to-r from-[#545455] to-[#0C3140] py-20 px-4">
            <section className="z-10 w-full flex flex-col">
                <h1 className="mx-auto text-7xl leading-tight text-center text-white">
                    Keep Track.
                </h1>
            </section>
            <section className="mt-16 w-full max-w-xl mx-auto">
                <NewTask setAllTasks={setTasks} />
            </section>
            <section className="mt-8 w-fit mx-auto">
                <Time />
            </section>
            <section className="mt-8 max-w-sm mx-auto">
                <div className="flex flex-col gap-3">
                    {sortedTasks &&
                        sortedTasks.map((task, idx) => {
                            return (
                                <Task
                                    key={`task-${idx}`}
                                    task={task}
                                    setTasks={setTasks}
                                />
                            );
                        })}
                </div>
            </section>
        </main>
    );
}

export default App;
