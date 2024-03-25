import React from 'react'
import TodoListName from '../atoms/TodoListName.tsx'
import Todo from '../atoms/Todo.tsx'

export default function TodoList({ titleListTodos, listTodos }: { titleListTodos: string, listTodos: any }) {
    return (
        <div className='w-64' style={{ width: '16rem' }}>
            <TodoListName title={titleListTodos} count={listTodos.length} />
            {
                listTodos.map(({ title, listTasks }: { title: string, listTasks: any }) => {
                    console.log(listTasks);
                    return (
                        <Todo title={title} text={`0 of ${listTasks.length} subtasks`} />
                    );
                })
            }

        </div>
    )
}
