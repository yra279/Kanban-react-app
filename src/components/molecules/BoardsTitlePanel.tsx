import React, { useState } from 'react';
import BoardsTitle from '../atoms/BoardsTitle.tsx';
import './BoardsTitlePanel.module.css';
import { useDispatch, useSelector } from 'react-redux';
import store from '../interface.tsx';
import AddBoardsTitle from '../atoms/AddBoardTitle.tsx';


export default function BoardsTitlePanel({
    setBoardName, setOpenWindowCreateTable, openWindowCreateTable
}: {
    setBoardName: (name: string) => void, setOpenWindowCreateTable: (open: boolean) => void, openWindowCreateTable: boolean
}) {
    const boardsTitleList = useSelector((store: store) => store.board);
    const [activeIndexTitle, setActiveIndexTitle] = useState(0);

    return (
        <div className=''>
            <div className="pb-2 uppercase text-sm" style={{ padding: '0px 0px 10px 34px' }}>all boards ({boardsTitleList.length})</div>
            {
                boardsTitleList.map(({ title }, index) => {
                    return (
                        <BoardsTitle
                            onClick={() => { setActiveIndexTitle(index); setBoardName(boardsTitleList[index].title); }}
                            key={index}
                            title={title}
                            active={activeIndexTitle === index}
                        />
                    );
                })
            }
            <AddBoardsTitle
                onClick={() => {
                    console.log(openWindowCreateTable);
                    setOpenWindowCreateTable(true);
                }}
                title={'+Create New Board'} active={false}
            />
        </div>
    )
}
