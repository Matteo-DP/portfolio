import React from 'react'

export default function Footer() {
  return (
    <footer className='h-48 mt-48 relative'>
        <div className='absolute bg-zinc-800 w-screen h-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
            <p className='absolute bottom-5 w-full text-zinc-500 text-center'>
                <i className="fa-regular fa-copyright mr-2 text-zinc-500"></i>
                Matteo De Pauw
            </p>
        </div>
    </footer>
  )
}
