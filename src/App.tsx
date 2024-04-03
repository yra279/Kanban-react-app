import React, { useState } from 'react';
import './App.css';
import SideBar from './components/organisms/SideBar/SideBar.tsx';
import Header from './components/organisms/Header/Header.tsx'
import Main from './components/organisms/Main/Main.tsx';
import { useSelector } from 'react-redux';
import store from './components/interface.tsx';

function App() {
  const [activeSideBar, setActiveSideBar] = useState(true);
  const [boardName, setBoardName] = useState('');
  const theme = useSelector((state: store) => state.theme);

  return (
    <div className={`${theme === 'Dark' ? 'AppDark' : 'AppLight'} flex h-screen w-screen`}>
      <div className="w-1/5 h-full">
        <SideBar setActiveSideBar={setActiveSideBar} activeSideBar={activeSideBar} setBoardName={setBoardName} />
      </div>
      <div className="flex flex-col" style={{ width: activeSideBar ? '84.4%' : '100%', transition: '1s'}}>
        <div className="h-[10%]">
          <Header activeSideBar={activeSideBar} boardName={boardName} setBoardName={setBoardName} />
        </div>
        <div className="h-[90%]">
          <Main boardName={boardName} />
        </div>
      </div>

    </div>
  );
}

export default App;
