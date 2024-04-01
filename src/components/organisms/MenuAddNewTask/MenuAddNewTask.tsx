import React, { useEffect, useRef, useState } from 'react'
import { Dialog, Textarea } from '@material-tailwind/react'
import Input from '../../atoms/Input.tsx';
import SelectDefault from '../../atoms/SelectDefault.tsx';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../interface.tsx';
import Button from '../../atoms/Button.tsx';
import { add_todo } from '../../../store/actions/todos-action.ts';
import SubTasks from '../../molecules/SubTasks.tsx';

export default function MenuAddNewTask({
    open, handleClose, handleOpen
}: {
    open: boolean, handleClose: () => void, handleOpen: () => void
}) {
    const modalRef = useRef<HTMLDivElement>(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const listObjecTitlesAndId = useSelector((state: store) => state.titleTodos);
    const listTitles = listObjecTitlesAndId.map(({ title }: { title: string }) => title);
    const [statusId, setStatus] = useState(listTitles[0]);
    const [listTasks, setListTasks] = useState([]);
    const theme = useSelector((state: store) => state.theme);

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
            <div className={`flex-col rounded-md flex p-6 ${theme === 'Dark' ? 'text-white' : 'text-black'}`} ref={modalRef} style={{ background: theme === 'Dark' ? '#2c2c38' : '#fff', gap: '30px' }}>
                    <div className={`text-xl ${theme === 'Dark' ? 'text-white' : 'text-black'}`}>Add New Task</div>
                <Input
                    onChange={(title) => setTitle(title)}
                    defaultValue=''
                    style={undefined}
                    textPlaceHolder='Name Task'
                />
                <Input
                    onChange={(description: string) => setDescription(description)}
                    defaultValue=''
                    style={undefined}
                    textPlaceHolder='Description'
                    // label='Description'
                />

                <SubTasks listTasks={listTasks} setListTasks={setListTasks} title='' />
                <SelectDefault listLabel={listObjecTitlesAndId} onChange={(status) => setStatus(status)} />

                <Button text='Create Task' onClick={sumbit} classNames={undefined} />
            </div>
        </Dialog>
    );
}
