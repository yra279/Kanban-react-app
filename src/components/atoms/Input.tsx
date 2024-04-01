import React from 'react'
import { Input as InputTailWind } from '@material-tailwind/react';

interface InputsProps {
    textPlaceHolder: string;
    onChange: (title: string) => void;
    style: { [key: string]: string } | undefined;
    defaultValue: string | undefined;
}

export default function Input({ textPlaceHolder, defaultValue, onChange, style }: InputsProps) {
    return (
        <div>
            <div className="relative mt-2 rounded-md shadow-sm">
                <InputTailWind
                    label={textPlaceHolder}
                    onChange={(e) => {
                        const value: string = e.target.value;
                        onChange(value);
                    }}
                    defaultValue={defaultValue}
                    style={style ? style : {}}
                    // title='FA'
                />
            </div>
        </div>
    );
}
