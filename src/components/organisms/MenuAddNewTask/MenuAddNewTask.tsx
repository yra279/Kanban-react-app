import React, { useEffect, useRef, useState } from 'react'
import { Dialog } from '@material-tailwind/react'
import Input from '../../atoms/Input.tsx';
import SelectDefault from '../../atoms/SelectDefault.tsx';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../interface.tsx';
import Button from '../../atoms/Button.tsx';
import { add_todo } from '../../../store/actions/todos-action.ts';
import SubTasks from '../../molecules/SubTasks.tsx';

export default function MenuAddNewTask({ open, handleClose, handleOpen }: { open: boolean, handleClose: () => void, handleOpen: () => void }) {
    const modalRef = useRef<HTMLDivElement>(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const listObjecTitlesAndId = useSelector((state: store) => state.titleTodos);
    const listTitles = listObjecTitlesAndId.map(({ title }: { title: string }) => title);
    const [statusId, setStatus] = useState(listTitles[0]);
    const [listTasks, setListTasks] = useState([]);

    const dispatch = useDispatch();

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

    const sumbit = () => {
        dispatch(add_todo(title, description, statusId, listTasks));
    }


    return (
        <Dialog
            open={open}
            size={"xs"}
            handler={handleOpen}
            placeholder="" // добавлено пустое значение
            onPointerEnterCapture={handleClose} // добавлен пустой обработчик события
            onPointerLeaveCapture={handleClose} // добавлен пустой обработчик события
        // onClickOutside={handleClose}
        >
            <div className="flex-col rounded-md flex p-6 text-white" ref={modalRef} style={{ background: '#2c2c38', gap: '30px' }}>
                <div className="text-xl text-white">Add New Task</div>
                <Input onChange={(title) => setTitle(title)} textPlaceHolder='Name Task' />
                <Input onChange={(description) => setDescription(description)} textPlaceHolder='Description' />

                <SubTasks listTasks={listTasks} setListTasks={setListTasks} />
                <SelectDefault listLabel={listObjecTitlesAndId} onChange={(status) => setStatus(status)} />

                <Button text='Create Task' onClick={sumbit} />
            </div>
        </Dialog>
    )
}
