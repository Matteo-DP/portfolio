import React from 'react'
import Button from '@/components/Button'


export default function ProjectCard({ href, description, title, date, tags, privateProject }) {

    return (
        <div className={`p-8 hover:bg-zinc-800 rounded-2xl ease-in-out duration-200 max-w-[500px] w-full min-h-[350px] flex flex-col justify-between`}>
            <div>
                <h1 className='text-zinc-100 text-lg font-semibold tracking-wide'>
                    {title}
                </h1>
                <p className='mt-4 text-zinc-400'>
                    {description}
                </p>
            </div>
            <div>
                <div className='mt-4 flex flex-row gap-1 flex-wrap'>
                    {tags.map((tag, i) => 
                        <span className='px-2 py-1 border border-teal-500 rounded-3xl text-sm text-zinc-300' key={i}>
                            {tag}
                        </span>
                    )}
                </div>
                <Button
                    text={"View more"}
                    href={href}
                    disabled={privateProject}
                    tooltipText='Sorry, this project is private. Please contact me for more info!'
                    icon={<i class="fa-solid fa-link fa-sm mr-2"></i>}
                />
            </div>
        </div>
    )
}
