import React from 'react';


export default function AddBoardsTitle({ title, onClick }: { title: string, active: boolean, onClick: undefined | (() => void) }) {
    return (
        <div onClick={onClick} className='bg-ingido-gray-my py-3 pl-7 rounded-r-full flex cursor-pointer' style={{ width: '256px', borderTopRightRadius: '9999px', borderBottomRightRadius: '9999px' }}>
            <img src='./iconTitleBoardIndigo.png' alt="" className='row-auto mt-1 ml-5 w-5 h-5 bg-ingido-gray-my' style={{marginLeft: '34px'}} />
            <p style={{color: '#645eca'}} className={`row pl-4 ml-3 mt-0.5 bg-ingido-gray-my}`}>{title}</p>
        </div>
    )
}