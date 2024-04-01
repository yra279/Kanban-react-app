import React from 'react'
import { useSelector } from 'react-redux';
import store from '../interface';

export default function ParamsBoard(
    { setOpenEdit, openEdit, setOpenDelete, openDelete }:
    { setOpenEdit: (open: boolean) => void, openEdit: boolean, setOpenDelete: (open: boolean) => void, openDelete: boolean }) {

    const theme = useSelector((state: store) => state.theme);
    
    return (
        <>
            <div
                className='flex-col absolute p-4 shadow-md bg-indigo-dark rounded-md text-sm'
                style={{ top: '3.5rem', gap: '10px', width: '11rem', background: theme === 'Light' ? '#e4ebfa' : '', }}
            >
                <div
                    className="cursor-pointer"
                    onClick={() => setOpenEdit(!openEdit)}
                >
                    Edit Board
                </div>
                <div
                    className="text-red-400 mt-4 hover:text-gray-300 cursor-pointer"
                    style={{ color: 'rgb(239, 83, 80)' }}
                    onClick={(() => setOpenDelete(!openDelete))}
                >
                    Delete Board
                </div>
            </div>

            
        </>
    );
}
