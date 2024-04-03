import { Dialog } from '@material-tailwind/react';
import React, { useEffect, useRef, useState } from 'react'
import Input from '../../atoms/Input.tsx';
import SubTasks from '../../molecules/SubTasks.tsx';
import Button from '../../atoms/Button.tsx';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../interface.tsx';
import { update_board } from '../../../store/actions/board.ts';
import { add_title, delete_title, update_title } from '../../../store/actions/todos-action.ts';

export default function MenuEditBoard({
    open, handleOpen, handleClose, boardName, setBoardName
}: {
    open: boolean, handleOpen: () => void, handleClose: () => void, boardName: string, setBoardName: (name: string) => void
}) {
    const modalRef = useRef<HTMLDivElement>(null);
    const [nameBoard, setNameBoard] = useState('');
    const FilterTitleListTodos = useSelector((state: store) => state.filterTitleTodos);
    const [listColumn, setListColumns] = useState(FilterTitleListTodos);
    const dispatch = useDispatch();
    const theme = useSelector((state: store) => state.theme);


    useEffect(() => {
        setListColumns(FilterTitleListTodos);
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


    const clickButtonComplete = () => {
        if (nameBoard !== '') {
            dispatch(update_board(boardName, nameBoard));
            setBoardName(nameBoard);
        }

        listColumn.map(({ title, text, id }) => {
            if (!title) dispatch(add_title(text, boardName));
            if (text) dispatch(update_title(id, text));
        });

        FilterTitleListTodos.filter(elem => listColumn.indexOf(elem) === -1).map(({ title, id }) => { console.log('Yes'); dispatch(delete_title(id)) });

        handleClose();
    }

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
                className={`flex-col rounded-md flex p-6 ${theme === 'Dark' ? 'text-white' : 'text-black'}`}
                ref={modalRef}
                style={{ background: theme === 'Dark' ? '#2c2c38' : '#fff', gap: '30px' }}
            >
                Edit Board

                <Input textPlaceHolder='Board Name' defaultValue={boardName} onChange={setNameBoard} style={undefined} />
                <SubTasks
                    title='Columns'
                    listTasks={listColumn}
                    setListTasks={setListColumns}
                />
                <Button onClick={clickButtonComplete} text='Edit Board' classNames={undefined} />
            </div>
        </Dialog>
    );
}
