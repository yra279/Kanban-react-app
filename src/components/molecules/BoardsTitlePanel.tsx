import React, { useState } from 'react';
import BoardsTitle from '../atoms/BoardsTitle.tsx';
import './BoardsTitlePanel.module.css';
import { useDispatch, useSelector } from 'react-redux';
import store from '../interface.tsx';
import { addTitle } from '../../store/actions/boardTitleList-action.ts';
import AddBoardsTitle from '../atoms/AddBoardTitle.tsx';


export default function BoardsTitlePanel() {
    const boardsTitleList = useSelector((store: store) => store.boardTitlelist);
    const dispatch = useDispatch();
    const [activeIndexTitle, setActiveIndexTitle] = useState(0);

    return (
        <div className=''>
            <div className="pb-2 uppercase text-sm" style={{padding: '0px 0px 10px 34px'}}>all boards ({boardsTitleList.length})</div>
            {
                boardsTitleList.map((title, index) => {
                    return (
                        <BoardsTitle onClick={() => setActiveIndexTitle(index)} key={index} title={title} active={activeIndexTitle === index} />
                    );
                })
            }
            <AddBoardsTitle onClick={() => { dispatch(addTitle(`Titles ${boardsTitleList.length}`)) }} title={'+Create New Board'} active={false} />
        </div>
    )
}
