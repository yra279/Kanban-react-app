import React from 'react'

export default function AddNewTitleTask({ onCLick } : { onCLick: () => void }) {
    return (
        <div onClick={onCLick} className="rounded-md buttonAddNewTitleTask w-64 justify-center flex text-2xl items-center" style={{width: '18rem', height: '91%'}}>
            + New Column
        </div>
    )
}
