import { Dialog } from '@material-tailwind/react';
import React, { useEffect, useRef } from 'react'
import Button from '../../atoms/Button.tsx';
import store from '../../interface.tsx';
import { delete_title } from '../../../store/actions/todos-action.ts';
import { useDispatch, useSelector } from 'react-redux';
import { delete_board } from '../../../store/actions/board.ts';

export default function MenuDeleteBoard(
    { open, handleOpen, handleClose, boardName, setBoardName }:
        { open: boolean, handleOpen: () => void, handleClose: () => void, boardName: string, setBoardName: (name: string) => void }
) {
    const modalRef = useRef<HTMLDivElement>(null);
    const board = useSelector((state: store) => state.board);
    const dispatch = useDispatch();
    const theme = useSelector((state: store) => state.theme);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                handleClose();
            }
        }

        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open, handleClose]);

    return (
        <Dialog
            open={open}
            size={"xs"}
            handler={handleOpen}
            placeholder=""
            onPointerEnterCapture={handleClose}
            onPointerLeaveCapture={handleClose}
        >
            <div
                className="flex-col rounded-md flex p-6 text-white"
                ref={modalRef}
                style={{ background: theme === 'Dark' ? '#2c2c38' : '#fff', gap: '20px' }}
            >
                <div className="text-xl" style={{ color: 'rgb(239, 83, 80' }}>
                    Delete this board?
                </div>
                <div className="" style={{ fontSize: '0.9rem' }}>
                    Are you sure you want to delete the 'Platform Launch' board?
                    This action will remove all columns and tasks and cannot be reversed
                </div>
                <div className="flex">
                    <Button
                        text='Delete'
                        onClick={() => {
                            handleClose();
                            board.filter(({ title }) => title === boardName)[0]?.listIdTitles.forEach(id => {
                                dispatch(delete_title(id));
                            });
                            dispatch(delete_board(boardName));
                            setBoardName('');
                        }}
                        classNames='buttonRedRose rounded-full'
                    />
                    <Button
                        text='Cancel'
                        onClick={() => handleClose()}
                        classNames={`${theme === 'Dark' ? 'buttonInvers' : 'buttonInversLight'} w-50 h-12 rounded-full`}
                    />
                </div>
            </div>
        </Dialog>
    );
}
