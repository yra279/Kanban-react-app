import React from 'react'

export default function HideSidebar({ hide, changeHide }: { hide: boolean, changeHide: () => void }) {
    return (
        <div className='flex cursor-pointer' onClick={() => changeHide()}>
            <img src='icon-hide-sidebar.d684fd30.svg' alt="" style={{height: '70%', marginTop: '4px'}} />
            <p className='bg-gray-my-c ml-3'>Hide Sidebar</p>
        </div>
    )
}
