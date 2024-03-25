import React from 'react'

export default function HideSidebar({ hide, changeHide }: { hide: boolean, changeHide: () => void }) {
    return (
        <div className='flex cursor-pointer' onClick={() => changeHide()}>
            <img src={hide ? './closedEye.jpg' : "./closedEye.jpg"} alt="" />
            <p className='bg-gray-my-c ml-3'>{hide ? 'Open' : 'Hide'} Sidebar</p>
        </div>
    )
}
