import React from 'react'

export default function Todo({ title, text }: { title: string, text: string }) {
    return (
        <div className='bg-ingido-gray-my flex-col w-64 p-6 rounded-xl shawod-indigo-gray-my'>
            <div className='row-auto bg-ingido-gray-my'>{title}</div>
            <div className="bg-gray-my-c text-xs row-auto bg-ingido-gray-my">
                {text}
            </div>
        </div>
    )
}
