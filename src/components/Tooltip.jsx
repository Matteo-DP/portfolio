import React from 'react'

export default function Tooltip({ text = "This is a tooltip" }) {
  return (
    <span className='absolute px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-3xl text-zinc-300 text-sm w-64 
      top-[100%] left-[50%] ml-[-95px] mt-[5px]
      sm:left-[105%] sm:top-[50%] sm:ml-0 sm:mt-[-20px]'>
        {text}
    </span>
  )
}
