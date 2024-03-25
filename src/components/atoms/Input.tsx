import React from 'react'
import { Input } from '@material-tailwind/react';

interface InputsProps {
    textPlaceHolder: string;
    onChange: (title: string) => void;
    style: string | undefined;
}

export default function Inputs({ textPlaceHolder, onChange, style }: InputsProps) {
    return (
        <div>
            <div className="relative mt-2 rounded-md shadow-sm">
                {/* @ts-ignore */}
                <Input
                    label={textPlaceHolder}
                    onChange={(e) => {
                        const value: string = e.target.value;
                        onChange(value);
                    }}
                    style={style}
                />
            </div>
        </div>
    );
}
