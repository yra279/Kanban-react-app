import React from 'react'

export default function CheckBox({ text, setActive, active }: { text: string, setActive: () => void, active: boolean }) {
    return (
        <div className='flex items-center mb-4 p-5 bg-indigo-dark bg-gray-my-c rounded-md'>

            <input
                id="default-checkbox"
                checked={active}
                type="checkbox"
                value=""
                onClick={setActive}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />

            <label
                htmlFor="default-checkbox"
                className='ms-2 bg-indigo-dark text-sm font-medium text-gray-900 bg-gray-my-c'
                style={{textDecorationLine: active ? 'line-through' : 'none'}}
            >
                <div className='ml-3'>{text}</div>
            </label>

        </div>
    )
}
