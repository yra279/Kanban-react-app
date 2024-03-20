import { Select, Option } from "@material-tailwind/react";
import React from "react";

export default function SelectDefault({ listLabel }: { listLabel: string[] }) {
    return (
        <div className="w-72 border-solid border-inherit">
            <Select
                label="Select Version"
                className='text-white'
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
            >
                {
                    listLabel.map((labelTitle: string) => (
                        <Option style={{ borderRadius: '0' }}>{labelTitle}</Option>
                    ))
                }
            </Select>
        </div>
    )
}
