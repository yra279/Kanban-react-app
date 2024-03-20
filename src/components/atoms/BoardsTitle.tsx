import React from 'react'

export default function BoardsTitle({ title, active }: { title: string, active: boolean }) {
    return (
        <button type="button" className={`${active ? 'bg-ingido-gray-my' : 'bg-gray-my'} py-3 pl-7 w-64 rounded-r-full flex`}>
            <img src={active ? './iconTitleBoardActive.jpg' : './iconTitleBoard.jpg'} alt="" className={`row-auto pt-1 ${active ? 'bg-ingido-gray-my' : 'bg-gray-my'}`} />
            <p className={`row pl-4 ${active ? 'bg-ingido-gray-my' : 'bg-gray-my'}`}>{title}</p>
        </button>
    )
}
