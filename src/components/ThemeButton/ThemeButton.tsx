import React, { useEffect, useState } from 'react'
import { FaLightbulb } from 'react-icons/fa'

const ThemeButton = () => {
    const [themeScheme, setThemeScheme] = useState<string>('dark')
    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            setThemeScheme('dark')
            localStorage.setItem('theme', 'dark');
            document.documentElement.setAttribute('data-theme', 'dark');
        } else if (localStorage.getItem('theme') === 'light') {
            setThemeScheme('light')
            localStorage.setItem('theme', 'light');
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, [])

    function handleClick() {
        if (themeScheme === 'light') {
            setThemeScheme('dark')
            localStorage.setItem('theme', 'dark');
            document.documentElement.setAttribute('data-theme', 'dark');
        } else if (themeScheme === 'dark') {
            setThemeScheme('light')
            localStorage.setItem('theme', 'light');
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }
    return (
        <>
            {themeScheme === 'light' &&
                <FaLightbulb
                    className='mx-2 cursor-pointer text-indigo-800 hover:text-indigo-700'
                    size='26'
                    onClick={handleClick}
                />
            }
            {themeScheme === 'dark' &&
                <FaLightbulb
                    className='mx-2 cursor-pointer text-indigo-50 hover:text-indigo-100'
                    size='26'
                    onClick={handleClick}
                />
            }
        </>
    )
}

export default ThemeButton