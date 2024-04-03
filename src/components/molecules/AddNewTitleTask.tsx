import React from 'react'
import { useSelector } from 'react-redux'
import store from '../interface'

export default function AddNewTitleTask({ onCLick }: { onCLick: () => void }) {
    const theme = useSelector((state: store) => state.theme);

    return (
        <div
            onClick={onCLick}
            className={`rounded-md ${theme === 'Dark' ? 'buttonAddNewTitleTaskDark' : 'buttonAddNewTitleTaskLight'} w-64 justify-center flex text-2xl items-center`}
            style={{ width: '18rem', height: '91%' }}
        >
            + New Column
        </div>
    )
}