import React from 'react'

export default function Tag({ tags }) {
  return (
    <div className='mt-4 flex flex-row gap-1 flex-wrap'>
        {tags.map((tag, i) => 
            <span className='px-2 py-1 border border-teal-500 rounded-3xl text-sm text-zinc-300' key={i}>
                {tag}
            </span>
        )}
    </div>
  )
}
