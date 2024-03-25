import React from 'react'

export default function EllipsisButton({ onClick }: { onClick: () => void }) {
    return (
        <button type="button" onClick={onClick} className='p-2'>
            <img src="./Ellipsis.jpg" alt="" />
        </button>
    )
}
