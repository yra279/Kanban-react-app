import React, { useRef } from 'react'
import Button from '../atoms/Button.tsx'
import Inputs from '../atoms/Input.tsx';
import { useSelector } from 'react-redux';
import store from '../interface';

export default function SubTasks({ listTasks, setListTasks, title = 'Subtasks' }: { listTasks: any, setListTasks: any, title: string }) {
    const nextId = useRef(0);
    const theme = useSelector((state: store) => state.theme);

    const addNewTask = () => {
        const newTask = { id: nextId.current++, text: '', active: false };
        setListTasks(prevListTasks => [...prevListTasks, newTask]);
    };

    const handleInputChange = (text, id) => {
        setListTasks(prevListTasks => {
            return prevListTasks.map(task => {
                if (task.id === id) {
                    return { ...task, text: text };
                }
                return task;
            });
        });
    };

    const handleDeleteClick = (id) => {
        setListTasks(prevListTasks => {
            return prevListTasks.filter(task => task.id !== id);
        });
    };

    return (
        <div className='flex-col flex gap-4'>
            <div className={theme  === 'Dark' ? 'text-white' : 'text-black'}>
                {title}
            </div>
            {
                listTasks.map(task => {
                    console.log(listTasks);
                    return (
                        <div className='flex' key={task.id}>
                            <Inputs
                                textPlaceHolder="e.g. Make coffee"
                                onChange={(text) => handleInputChange(text, task.id)}
                                style={{ width: '390px' }}
                                defaultValue={task.title}
                            />
                            <img
                                src="./icon-cross.svg"
                                alt=""
                                className='w-5 h-5 ml-3'
                                style={{ marginTop: '0.5rem' }}
                                onClick={() => handleDeleteClick(task.id)}
                            />
                        </div>
                    );
                })
            }
            <Button
                classNames={`w-40 ${theme === 'Dark' ? 'buttonInvers' : 'buttonInversLight'} h-12 rounded-full`}
                text='+ Add New Subtask'
                onClick={addNewTask}
            />
        </div>
    )
}
