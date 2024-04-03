import React, { useEffect, useRef, useState } from 'react'
import { Dialog } from '@material-tailwind/react'
import SelectDefault from '../../atoms/SelectDefault.tsx';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../interface.tsx';
import { active_todo, delete_todo, update_id_todo } from '../../../store/actions/todos-action.ts';
import CheckBox from '../../atoms/CheckBox.tsx';
import EllipsisButton from '../../atoms/EllipsisButton.tsx';
import ParamsBoard from '../../molecules/ParamsBoard.tsx';

export default function ViewTask({
    open, handleClose, handleOpen, title, text, listTasks, idTitle
}: {
    open: boolean, handleClose: () => void, handleOpen: () => void, title: string | undefined, text: string, listTasks: string[], idTitle: string
}) {
    const modalRef = useRef<HTMLDivElement>(null);
    const listObjecTitlesAndId = useSelector((state: store) => state.titleTodos);
    const listTitles = listObjecTitlesAndId.map(({ title }: { title: string }) => title);
    const [status, setStatus] = useState(listTitles.lenght > 0 ? listTitles[0].id : '');
    const [openParams, setOpenParams] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const theme = useSelector((state: store) => state.theme);

    const dispatch = useDispatch();

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                if (listTitles[0][0] !== status) {
                    console.log(status);
                    console.log(idTitle);
                    console.log(title);
                    if (title) dispatch(update_id_todo(idTitle, title, status));
                }
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
                className="flex-col rounded-md flex justify-center justify-items-center p-6 text-white"
                ref={modalRef}
                style={{ background: theme === 'Dark' ? '#2c2c38' : '#fff', gap: '30px', wordWrap: 'break-word', whiteSpace: 'pre-wrap', }}
            >
                <div className="flex">
                    <div className={`text-xl ${theme === 'Dark' ? 'text-white' : 'text-black'}`}>
                        {title}
                    </div>
                    <div style={{ marginLeft: '360px' }}>
                        <EllipsisButton onClick={() => setOpenParams(!openParams)} />
                    </div>

                    <div style={{ marginLeft: '405px', position: 'absolute' }}>
                        {
                            openParams ? (
                                <ParamsBoard
                                    openEdit={openEdit}
                                    setOpenEdit={setOpenEdit}
                                    openDelete={openDelete}
                                    setOpenDelete={((a: boolean) => {
                                        if (title) dispatch(delete_todo(idTitle, title));
                                        handleClose();
                                    })}
                                />
                            ) : ''
                        }
                    </div>
                </div>
                <div className="">
                    {text}
                </div>

                {
                    listTasks.map(({ text, active, id }: { text: string, active: boolean, id: string }) => {
                        return (
                            <CheckBox
                                text={text}
                                setActive={() => { console.log(idTitle, id); dispatch(active_todo(idTitle, id)); }}
                                active={active}
                            />
                        )
                    })
                }



                <SelectDefault listLabel={listObjecTitlesAndId} onChange={(status) => setStatus(status)} />

            </div>
        </Dialog>
    );
}