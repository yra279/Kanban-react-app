import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import store from '../interface';


export default function BoardsTitle({ title, active, onClick }: { title: string, active: boolean, onClick: undefined | (() => void) }) {
    const refImg = useRef<HTMLImageElement | null>(null);
    const theme = useSelector((state: store) => state.theme);


    return (
        <div
            onClick={onClick}
            className={`${active ? 'bg-indigo-my' : theme === 'Dark' ? 'bg-ingido-gray-my' : '#fff'} py-3 pl-7 rounded-r-full flex cursor-pointer`}
            style={{ width: '256px', borderTopRightRadius: '9999px', borderBottomRightRadius: '9999px' }}
        >
            <img
                ref={refImg}
                src='./icon-board.f2b5d463.svg'
                alt=""
                className='row-auto mt-1 w-5 h-5'
                style={{ marginLeft: '34px' }}
            />
            <p className='row pl-4 ml-3 mt-0.5 text-white'>
                {title}
            </p>
        </div>
    )
}
