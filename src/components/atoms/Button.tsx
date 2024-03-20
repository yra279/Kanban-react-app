import React from 'react';

export default function Button({ text, onClick } : { text: string, onClick: () => {}}) {
    return (
        <button type='button' onClick={onClick} className='w-40 h-12 bg-indigo-600 rounded-full hover:bg-indigo-50 hover:text-indigo-600'>
            {text}
        </button>
    );
}
