import './Header.scss';
import React, { useState } from 'react';
import Button from '../../atoms/Button.tsx';
import EllipsisButton from '../../atoms/EllipsisButton.tsx';
import MenuAddNewTask from '../MenuAddNewTask/MenuAddNewTask.tsx';

export default function Header({ activeSideBar }: { activeSideBar: boolean }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className='flex flex-col-reverse containerss relative'>

                <div className="text-white text-2xl p-6">
                    Platform Launch
                </div>
                <div className="" style={{ width: activeSideBar ? '61.8%' : '77.3%' }}></div>
                <div className="flex h-5 relative right-0" style={{ marginTop: '1rem' }}>
                    <Button text={'+Add New Task'} onClick={() => setOpen(true)} />
                    <div className="mt-1.5 ml-3">
                        <EllipsisButton onClick={() => { }} />
                    </div>
                </div>
            </header>

            <MenuAddNewTask handleOpen={() => setOpen(true)} open={open} handleClose={() => setOpen(false)} />
        </>
    );
}
