import React from 'react';

export default function Button({ text, onClick, classNames }: { text: string, onClick: () => void, classNames: string | undefined }) {
    return (
        <button type='button' onClick={onClick} className={classNames !== undefined ? classNames: 'w-40 button h-12 bg-indigo-600 rounded-full hover:bg-indigo-50 hover:text-indigo-600'}>
            {text}
        </button>
    );
}
