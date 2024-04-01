import { Dialog } from '@material-tailwind/react';
import React, { useEffect, useRef, useState } from 'react'
import Input from '../../atoms/Input.tsx';
import SubTasks from '../../molecules/SubTasks.tsx';
import Button from '../../atoms/Button.tsx';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../interface.tsx';
import { add_title } from '../../../store/actions/todos-action.ts';
import { addTitle } from '../../../store/actions/boardTitleList-action.ts';

export default function MenuEditBoard(
    { open, handleOpen, handleClose, setBoardName }:
        { open: boolean, handleOpen: () => void, handleClose: () => void, setBoardName: (name: string) => void }
) {
    const modalRef = useRef<HTMLDivElement>(null);
    const [nameBoard, setNameBoard] = useState('');
    const FilterTitleListTodos = useSelector((state: store) => state.filterTitleTodos);
    const [listColumn, setListColumns] = useState(FilterTitleListTodos);
    const dispatch = useDispatch();


    useEffect(() => {
        setListColumns(FilterTitleListTodos);
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                handleClose();
                setListColumns([]);
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
                style={{ background: '#2c2c38', gap: '30px' }}
            >
                Add Board

                <Input
                    textPlaceHolder='Board Name'
                    style={undefined}
                    defaultValue=''
                    onChange={setNameBoard}
                />
                <SubTasks
                    title='Columns'
                    listTasks={listColumn}
                    setListTasks={setListColumns}
                />
                <Button onClick={() => {
                    if (nameBoard) {
                        dispatch(addTitle(nameBoard));
                        setBoardName(nameBoard);
                    }

                    listColumn.map(({ text }) => {
                        dispatch(add_title(text, nameBoard));
                    });

                    setListColumns([]);

                    handleClose();
                }} text='Add Board' classNames={undefined} />
            </div>
        </Dialog>
    );
}
