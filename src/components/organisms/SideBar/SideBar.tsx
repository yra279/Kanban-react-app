import React, { useState } from 'react';
import BoardsTitlePanel from '../../molecules/BoardsTitlePanel.tsx';
import ThemeBar from '../../molecules/ThemeBar.tsx';
import HideSidebar from '../../molecules/HideSidebar.tsx';
import './SideBar.css';
import MenuEditBoard from '../windowAddBoard/windowAddBoard.tsx';
import { useSelector } from 'react-redux';
import store from '../../interface.tsx';


export default function SideBar(
    { activeSideBar, setActiveSideBar, setBoardName }:
        { activeSideBar: boolean, setActiveSideBar: (active: boolean) => void, setBoardName: (name: string) => void }
) {
    const [openWindowCreateTable, setOpenWindowCreateTable] = useState(false);
    const theme = useSelector((state: store) => state.theme);

    return (
        <>
            <aside
                className={`grid ${theme === 'Dark' ? 'containerDark' : 'containerLight'} grid-rows-[2fr,12fr,2fr,2fr] h-screen grid-cols-1 ${activeSideBar ? 'SideBarContainerOpen' : 'SideBarContainerClose'}`}
                style={{ gridTemplateRows: '2fr 12fr 2fr 2fr', width: '300px' }}
            >
                <section className="pt-3 row-span-1" style={{ paddingLeft: '34px', paddingTop: '34px' }}>
                    <img src={theme !== 'Light' ? "./logo-light.4fb0dd87.svg" : "logo-dark.8590e096.svg"} alt="" />
                </section>
                <section className='row-span-1' >
                    <BoardsTitlePanel
                        openWindowCreateTable={openWindowCreateTable}
                        setBoardName={setBoardName}
                        setOpenWindowCreateTable={setOpenWindowCreateTable}
                    />
                </section>
                <section className='row-span-1 pt-5 ml-8'>
                    <div className="mt-4 ml-4">
                        <ThemeBar />
                    </div>
                </section>
                <section className='row-span-1 ml-4'>
                    <HideSidebar hide={true} changeHide={() => setActiveSideBar(false)} />
                </section>
            </aside>

            <MenuEditBoard
                open={openWindowCreateTable}
                handleOpen={() => setOpenWindowCreateTable(true)}
                handleClose={() => setOpenWindowCreateTable(false)}
                setBoardName={setBoardName}
            />




            <div
                className={`absolute w-10 cursor-pointer ${activeSideBar ? '': 'OpenYeye'} rounded-r-full h-10 bg-indigo-my`}
                style={{
                    width: '50px',
                    height: '45px',
                    top: '88.25%',
                    borderTopRightRadius: '9999px',
                    borderBottomRightRadius: '9999px',
                    paddingLeft: '1rem',
                    paddingTop: '1rem',
                    marginLeft: activeSideBar ? '-300px' : '0px',
                }}
                onClick={() => setActiveSideBar(!activeSideBar)}
            >
                <img src="./OpenEye.svg" alt="" style={{ width: '17.5px', height: '12px' }} />
            </div>


        </>
    )
}
