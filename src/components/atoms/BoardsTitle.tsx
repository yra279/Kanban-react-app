import React, { useRef } from 'react';


export default function BoardsTitle({ title, active, onClick }: { title: string, active: boolean, onClick: undefined | (() => void) }) {
    const refImg = useRef<HTMLImageElement | null>(null);

    const setIndigoIcon = () => {
        if (refImg.current !== null && refImg.current !== null) {
            refImg.current.src = 'iconTitleBoardIndigo.png';
        }
    }

    const removeIndigoIcon = () => {
        if (refImg.current !== null && refImg.current !== null) {
            refImg.current.src = active ? './iconTitleBoardActive.jpg' : './iconTitleBoard.png';
        }
    }

    return (
        <div onClick={onClick} onMouseDown={setIndigoIcon} onMouseLeave={removeIndigoIcon} className={`${active ? 'bg-indigo-my' : 'bg-ingido-gray-my'} py-3 pl-7 rounded-r-full flex cursor-pointer`} style={{ width: '256px', borderTopRightRadius: '9999px', borderBottomRightRadius: '9999px' }}>
            <img ref={refImg} src={active ? './iconTitleBoardActive.jpg' : './iconTitleBoard.png'} alt="" className={`row-auto mt-1 w-5 h-5 ${active ? 'bg-indigo-my' : 'bg-ingido-gray-my'}`} style={{marginLeft: '34px'}} />
            <p className={`row pl-4 ml-3 mt-0.5 ${active ? 'bg-indigo-my text-white' : 'bg-ingido-gray-my'}`}>{title}</p>
        </div>
    )
}
