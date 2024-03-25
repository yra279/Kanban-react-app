import { Select, Option } from "@material-tailwind/react";
import React from "react";

export default function SelectDefault({ listLabel, onChange }: { listLabel: any, onChange: (status: string) => void }) {
    // const selectRef = useRef<HTMLDivElement>(null);
    const [value, setValue] = React.useState("react");

    return (
        <div className="w-72 border-solid border-inherit">
            <Select
                label="Select Version"
                className='text-white'
                placeholder=""
                value={value}
                onPointerEnterCapture={() => { }}
                onPointerLeaveCapture={() => { }}
                onChange={(val) => setValue(val)}
                selected={(e) => {
                    console.log(e?.props?.id);
                    onChange(e?.props?.id);
                }}
            >
                {
                    listLabel.map(({ title, id }: { title: string, id: string }) => (
                        <Option id={id} style={{ borderRadius: '0' }}>{title}</Option>
                    ))
                }
            </Select>
        </div>
    )
}
