import { Select, Option } from "@material-tailwind/react";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import store from "../interface";

export default function SelectDefault({ listLabel, onChange }: { listLabel: any, onChange: (status: string) => void }) {
    const [value, setValue] = useState("");
    const refSelect = useRef<HTMLSelectElement>();
    const titleTodos = useSelector((state: store) => state.titleTodos);

    // Обработчик изменения значения селектора
    const handleSelectChange = (value: string) => {
        setValue(value[0]);
        onChange(titleTodos.filter(({ title }) => title[0] === value[0])[0].id); // Передаем выбранное значение в родительский компонент
        console.log(value[0]);
        console.log(titleTodos);
        console.log(titleTodos.filter(({ title }) => title[0] === value[0]));
    };

    // Изменение текста в селекторе при изменении состояния value
    useEffect(() => {
        if (refSelect.current) {
            refSelect.current.children[0].children[0].textContent = value;
        }
    }, [value]);

    return (
        <div className="w-72 border-solid border-inherit">
            <Select
                label="Select Version"
                className='text-white'
                onChange={(value: string) => handleSelectChange(value)}
                defaultValue={value}
                ref={refSelect}
            >
                <span>{value}</span>
                {
                    listLabel.map(({ title, id }: { title: string, id: string }) => (
                        <Option key={id} id={id} style={{ borderRadius: '0' }} value={title}>{title}</Option>
                    ))
                }
            </Select>
        </div>
    );
}
