import React from 'react';

const colors = [
    'bg-indigo-500',
    'bg-orange-500',
    'bg-fuchsia-500',
    'bg-yellow-500',
    'bg-lime-500',
    'bg-violet-500',
    'bg-rose-500',
    'bg-teal-500',
    'bg-cyan-500',
    'bg-emerald-500',
    'bg-blue-650',
    'bg-red-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-amber-500',
    'bg-pink-500',
    'bg-sky-500',


]

const colorRandom = () => colors[Math.floor(Math.random() * 100 / 19)];

export default function TodoListName({ title, count }: { title: string, count: number }) {
    return (
        <div className='flex'>
            <div className={`circle w-4 h-4 rounded-full ${colorRandom()} mt-4`}></div>
            <div className="title uppercase bg-gray-my-c p-3">{title} {`(${count})`}</div>
        </div>
    )
}
