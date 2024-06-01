import React from 'react'

export default function ErrorCard({ error }) {

  return (
    <div className='fixed z-50 top-5 right-5 bg-zinc-900 border border-teal-400 max-w-sm px-4 py-2 rounded-xl'>
        <h2 className='text-xl text-red-500'>ERROR!</h2>
        <p className='text-white'>{error.message}</p>
    </div>
  )
}
