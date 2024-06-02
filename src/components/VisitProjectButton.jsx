import React, { useEffect } from 'react'
import { ErrorContext } from '@/pages/_app'
import { useContext } from 'react'

export default function VisitProjectButton({ href }) {

  const raiseError = useContext(ErrorContext)

  if(href) {
    return (
      <a className='ml-6 group text-zinc-200' href={href} target="_blank" rel="noreferrer">
          Visit project
          <i className='fa-solid fa-arrow-right ml-4 group-hover:translate-x-3 ease-in transition-transform' />
      </a>
    )
  } else {
    return (
      <button className='ml-6 group text-zinc-200' onClick={() => raiseError({
        message: "No href found! Either you're already on this page or I forgot to add a link.",
        time: 5
      })}>
          Visit project
          <i className='fa-solid fa-arrow-right ml-4 group-hover:translate-x-3 ease-in transition-transform' />
      </button>
    )
  }
}
