import React from 'react'
import TodoListName from '../atoms/TodoListName.tsx'
import Todo from '../atoms/Todo.tsx'

export default function TodoList({ titleListTodos, listTodos, onClickToTask }: { titleListTodos: string, listTodos: any, onClickToTask: (title: string, listTasks: any, text: string, id: string) => void }) {
    return (
        <div className='w-64' style={{ width: '16rem' }}>
            <TodoListName title={titleListTodos} count={listTodos.length} />
            {
                listTodos.map(({ title, listTasks, text, id }: { title: string, listTasks: any, text: string, id: string }) => {

                    const titleArray = title.split('');
                    return (
                        <Todo
                            title={titleArray.length > 20 ? titleArray.slice(0, 20).join('') + '...' : title}
                            text={`0 of ${listTasks.length} subtasks`}
                            onClick={() => {
                                onClickToTask(title, listTasks, text, id);
                                console.log(listTasks);
                            }}
                        />
                    );

                })
            }

        </div>
    )
}
