import React, { useEffect, useState } from 'react'
import './Main.module.scss';
import TodoList from '../../molecules/TodoList.tsx';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../interface.tsx';
import AddNewTitleTask from '../../molecules/AddNewTitleTask.tsx';
import { add_title } from '../../../store/actions/todos-action.ts';
import ViewTask from '../ViewTask/ViewTask.tsx';


export default function Main({ boardName }: { boardName: string }) {
    const FilterTitleListTodos = useSelector((state: store) => state.filterTitleTodos);
    const titleListTodos = useSelector((state: store) => state.titleTodos);
    const [titleActiveTask, setTitleActiveTask] = useState('');
    const [openViewTask, setOpenViewTask] = useState(false);
    const [descriptionTaskActive, setDescriptionTaskActive] = useState('');
    const [listTasks, setListTasks] = useState([]);
    const [activeTaskId, setActiveTaskId] = useState('');


    const board = useSelector((state: store) => state.board);

    useEffect(() => {
        const boardNew = board.filter(({ title }: { title: string }) => {
            console.log(title, boardName);
            return title === boardName;
        })[0]?.listIdTitles;

        const filterTitleListTodos = titleListTodos.filter(({ id }) => {

            return boardNew?.indexOf(id) !== -1
        });

        dispatch({ type: "UPDATE_FILTER_TITLE_TODOS", state: filterTitleListTodos });

    }, [boardName, titleListTodos]);


    const listTodos = useSelector((state: store) => state.listTodos);
    const dispatch = useDispatch();

    const onClickToTask = (title: string, listTasks: any, text: string, id: string) => {
        setTitleActiveTask(title);
        setDescriptionTaskActive(text);
        console.log(id);
        setActiveTaskId(id);
        setOpenViewTask(true);
    }


    return (
        <div className='w-screen h-screen flex p-4' style={{ gap: '1.5rem' }}>
            {
                FilterTitleListTodos.map(({ title, id }: { title: string, id: string }) => {
                    return (
                        <TodoList
                            titleListTodos={title}
                            onClickToTask={onClickToTask}
                            listTodos={listTodos.filter(({ id: idTitle }) => idTitle === id)}
                        />
                    )
                })
            }
            {
                boardName !== '' ? (
                    <AddNewTitleTask onCLick={() => dispatch(add_title('new column', boardName))} />
                ) : ''
            }

            {
                console.log(listTodos)
            }

            <ViewTask
                title={titleActiveTask}
                text={descriptionTaskActive}
                listTasks={listTodos.length > 0 ? listTodos[0].listTasks : []}
                idTitle={activeTaskId}
                open={openViewTask}
                handleClose={() => setOpenViewTask(false)}
                handleOpen={() => setOpenViewTask(true)}
            />
        </div>

    );
}
