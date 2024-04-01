import React from 'react'

export default function Todo({ title, text, onClick }: { title: string, text: string, onClick: () => void | undefined }) {
    return (
        <div onClick={onClick} className='bg-ingido-gray-my flex-col w-64 p-6 rounded-xl shawod-indigo-gray-my mt-4'>
            <div className='row-auto bg-ingido-gray-my'>
                {title}
            </div>
            
            <div className="bg-gray-my-c text-xs row-auto bg-ingido-gray-my">
                {text}
            </div>
        </div>
    )
}
