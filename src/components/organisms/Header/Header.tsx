import React, { useState } from 'react';
import Button from '../../atoms/Button.tsx';
import EllipsisButton from '../../atoms/EllipsisButton.tsx';
import MenuAddNewTask from '../MenuAddNewTask/MenuAddNewTask.tsx';
import ParamsBoard from '../../molecules/ParamsBoard.tsx';
import MenuDeleteBoard from '../MenuDeleteBoard/MenuDeleteBoard.tsx';
import MenuEditBoard from '../EditBoard/EditBoard.tsx';
import './Header.css';
import { useSelector } from 'react-redux';
import store from '../../interface.tsx';

export default function Header({
        activeSideBar, boardName, setBoardName
    }: {
        activeSideBar: boolean, boardName: string, setBoardName: (name: string) => void
    }) {
    const [openAddNewTask, setOpenAddNewTask] = useState(false);
    const [openParams, setOpenParams] = useState(false);

    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    const theme = useSelector((state: store) => state.theme);


    return (
        <>
            <header className={`flex flex-col-reverse ${theme === 'Dark' ? 'containersDark' : 'containersLight'} relative`}>

                <div className={`${theme === 'Light' ? 'text-black ' : 'text-white'} text-2xl p-6`}>
                    Platform Launch
                </div>
                <div className="" style={{ width: activeSideBar ? '61.8%' : '77.3%' }}></div>
                <div className="flex h-5 relative right-2" style={{ position: 'absolute', marginTop: '1rem' }}>
                    <Button
                        text={'+Add New Task'}
                        onClick={boardName !== '' ? () => setOpenAddNewTask(true) : () => { }}
                        classNames={undefined}
                    />
                    <div className="mt-1.5 ml-3">
                        <EllipsisButton onClick={() => setOpenParams(!openParams)} />
                    </div>
                    {
                        openParams && boardName !== '' ? (
                            <ParamsBoard
                                openEdit={openEdit}
                                setOpenEdit={setOpenEdit}
                                openDelete={openDelete}
                                setOpenDelete={setOpenDelete}
                            />
                        ) : ''
                    }
                </div>
            </header>

            <MenuAddNewTask
                handleOpen={() => setOpenAddNewTask(true)}
                open={openAddNewTask}
                handleClose={() => setOpenAddNewTask(false)}
            />

            <MenuDeleteBoard
                open={openDelete}
                handleOpen={() => setOpenDelete(true)}
                handleClose={() => setOpenDelete(false)}
                boardName={boardName}
                setBoardName={setBoardName}
            />

            <MenuEditBoard
                open={openEdit}
                handleOpen={() => setOpenEdit(true)}
                handleClose={() => setOpenEdit(false)}
                boardName={boardName}
                setBoardName={setBoardName}
            />
        </>
    );
}
