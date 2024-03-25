import React, { useState } from 'react';
import './App.css';
import SideBar from './components/organisms/SideBar/SideBar.tsx';
import Header from './components/organisms/Header/Header.tsx'
import Main from './components/organisms/Main/Main.tsx';

function App() {
  const [activeSideBar, setActiveSideBar] = useState(true);

  return (
    <div className="App flex h-screen w-screen">
      <div className="w-1/5 h-full">
        <SideBar setActiveSideBar={setActiveSideBar} activeSideBar={activeSideBar} />
      </div>
      <div className="flex flex-col" style={{width: '100%'}}>
        <div className="h-[10%]">
          <Header activeSideBar={activeSideBar} />
        </div>
        <div className="h-[90%]">
            <Main />
        </div>
      </div>

    </div>
  );
}

export default App;
