import React from 'react'
import './Main.module.scss';
import TodoList from '../../molecules/TodoList.tsx';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../interface.tsx';
import AddNewTitleTask from '../../molecules/AddNewTitleTask.tsx';
import { add_title } from '../../../store/actions/todos-action.ts';


export default function Main() {
    const titleListTodos = useSelector((state: store) => state.titleTodos);
    const listTodos = useSelector((state: store) => state.listTodos);
    const dispatch = useDispatch();


    return (
        <div className='w-screen h-screen flex p-4' style={{ gap: '1.5rem' }}>
            {
                titleListTodos.map(({ title, id }: { title: string, id: string }) => {
                    console.log(listTodos)
                    return (
                    <TodoList titleListTodos={title} listTodos={listTodos.filter(({id: idTitle}) => idTitle[0] === id)} />
                )})
            }

            <AddNewTitleTask onCLick={() => dispatch(add_title('new column'))}/>
        </div>
        
    );
}
