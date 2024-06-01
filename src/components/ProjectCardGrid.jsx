import React from 'react'
import Button from '@/components/Button'
import Tag from '@/components/Tag'
import VisitProjectButton from './VisitProjectButton'


export default function ProjectCard({ href, description, title, date, tags, privateProject, path }) {

    return (
        <div className="p-8 rounded-2xl max-w-[500px] w-full min-h-[350px] flex flex-col justify-between
        hover:bg-zinc-800 duration-200 ease-in-out"> 
            <div>
                <h1 className='text-zinc-100 text-lg font-semibold tracking-wide'>
                    {title}
                </h1>
                <p className='mt-4 text-zinc-400'>
                    {description}
                </p>
            </div>
            <div>
            <Tag tags={tags} />
            <div>
                <Button
                    text={"Read more"}
                    href={`/project/${path}`}
                    icon={<i className="fa-solid fa-link fa-sm mr-2"></i>}
                />
                <VisitProjectButton href={href} />
            </div>
            </div>
        </div>
    )
}
