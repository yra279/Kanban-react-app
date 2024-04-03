import React from 'react'
import { useSelector } from 'react-redux';
import store from '../interface';


export default function Todo({ title, text, onClick }: { title: string, text: string, onClick: () => void | undefined }) {
    const theme = useSelector((state: store) => state.theme);

    return (
        <div onClick={onClick} className={`${theme === 'Dark' ? 'bg-ingido-gray-my shawod-indigo-gray-my' : 'shadow-black-ligthTheme'} flex-col w-64 p-6 rounded-xl mt-4`} style={{background: theme === 'Dark' ? '' : '#fff'}}>
            <div className='row-auto' style={{color: theme === 'Dark' ? '#fff': '#000'}}>
                {title}
            </div>
            
            <div className="bg-gray-my-c text-xs row-auto">
                {text}
            </div>
        </div>
    )
}
