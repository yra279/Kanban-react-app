import React, { useState } from 'react';
import BoardsTitlePanel from '../../molecules/BoardsTitlePanel.tsx';
import ThemeBar from '../../molecules/ThemeBar.tsx';
import HideSidebar from '../../molecules/HideSidebar.tsx';
import './SideBar.scss';


export default function SideBar({ activeSideBar, setActiveSideBar }: { activeSideBar: boolean, setActiveSideBar: (active: boolean) => void }) {

    return activeSideBar ? (
        <aside className='grid container grid-rows-[2fr,12fr,2fr,2fr] h-max h-screen grid-cols-1' style={{ gridTemplateRows: '2fr 12fr 2fr 2fr', width: '300px' }}>
            <section className="pt-3 row-span-1" style={{ paddingLeft: '34px' }}>
                <img src="./logo.jpg" alt="" />
            </section>
            <section className='row-span-1' >
                <BoardsTitlePanel />
            </section>
            <section className='row-span-1 pt-5 ml-8'>
                <div className="mt-4 ml-4">
                    <ThemeBar />
                </div>
            </section>
            <section className='row-span-1 ml-4'>
                <HideSidebar hide={activeSideBar} changeHide={() => setActiveSideBar(!activeSideBar)} />
            </section>
        </aside>

    ) : (
        <div
            className="absolute w-10 cursor-pointer rounded-r-full h-10 bg-indigo-my"
            style={{ width: '50px', height: '45px', top: '88.25%', borderTopRightRadius: '9999px', borderBottomRightRadius: '9999px', paddingLeft: '1rem', paddingTop: '1rem' }}
            onClick={() => setActiveSideBar(!activeSideBar)}
        >
            <img src="./OpenEye.svg" alt="" style={{ width: '17.5px', height: '12px' }} />
        </div>
    );
}
