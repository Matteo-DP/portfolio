import React, { useState } from 'react'
import Tooltip from '@/components/Tooltip'
import { useContext } from 'react'
import { ErrorContext } from '@/pages/_app'

export default function Button({ href, text, type = "primary", icon = undefined, disabled = false, tooltipText }) {

    const [hover, setHover] = useState(false);
    const raiseError = useContext(ErrorContext)

    if(type.toLocaleLowerCase() == "primary")  {
        if(href) {
            return (
            <a 
                className={`mt-6 px-4 py-2 ${disabled ? "bg-teal-800" : "bg-teal-600"} rounded-3xl text-zinc-50 inline-block relative w-max`}
                href={href}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {icon}
                {text}
                {disabled && hover &&
                    <Tooltip
                        text={tooltipText}
                    />
                }
            </a>
            )
        } else {
            return (
                <button 
                    className={`mt-6 px-4 py-2 ${disabled ? "bg-teal-800" : "bg-teal-600"} rounded-3xl text-zinc-50 inline-block relative w-max`}
                    onClick={() => raiseError({message: "No href found! Either you're already on this page or I forgot to add a link.", time: 5})}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    {icon}
                    {text}
                    {disabled && hover &&
                        <Tooltip
                            text={tooltipText}
                        />
                    }
                </button>
            )
        }
    }

    if(type.toLocaleLowerCase() == "secondary") return (
        <a className='text-md text-teal-500 font-medium' 
            href={href}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {text}
            <i className={`fa-solid fa-arrow-right ml-2 text-teal-500 ${hover && "translate-x-2"} ease-in duration-75`}></i>
        </a>
    )
}
