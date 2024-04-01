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
        <div className={`flex p-2 gap-4 h-11 rounded-md`} style={{ width: '254px', backgroundColor: theme === 'Light' ? '#f4f7fd' : '#21212d' }}>
            <img src="./icon-light-theme.d2e8d63e.svg"  alt="" style={{width: '18px', height: '18px', marginLeft: '55px', marginTop: '5px'}} />
            <div onClick={changeTheme} className="bg-indigo-my rounded-full cursor-pointer w-12 h-5 p-0.5 mt-1">
                <div className='w-4 h-4 bg-white rounded-full' style={{marginLeft: `${sliderButtonActive ? '2px' : '27px'}`}}></div>
            </div>
            <img src="./icon-dark-theme.02961dba.svg" alt="" style={{width: '18px', height: '18px', marginTop: '5px'}} />
        </div>
    )
}
