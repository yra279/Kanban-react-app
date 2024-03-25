import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import store from '../interface.tsx';
import { themeDark, themeLight } from '../../store/actions/theme-action.ts';

export default function ThemeBar() {
    const theme = useSelector((state: store) => state.theme);
    const [sliderButtonActive, setSliderButtonActive] = useState(theme === 'Light');
    const dispatch = useDispatch();

    const changeTheme = () => {
        setSliderButtonActive(!sliderButtonActive);

        theme === 'Dark' ? dispatch(themeLight()) : dispatch(themeDark());
    }

    return (
        <div className='flex p-2 bg-indigo-dark gap-4 h-11 rounded-md' style={{ width: '254px' }}>
            <img src="./iconSun.jpg" style={{marginLeft: '45px'}} alt="" />
            <div onClick={changeTheme} className="bg-indigo-my rounded-full cursor-pointer w-12 h-5 p-0.5 mt-1">
                <div className='w-4 h-4 bg-white rounded-full' style={{marginLeft: `${sliderButtonActive ? '2px' : '27px'}`}}></div>
            </div>
            <img src="./iconMoon.jpg" alt="" />
        </div>
    )
}
