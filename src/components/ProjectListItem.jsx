import React from 'react'
import Tag from './Tag'
import Button from './Button'
import VisitProjectButton from './VisitProjectButton'

export default function ProjectListItem({ project }) {
  return (
    <div className='p-6'>
        <a className='text-lg mb-2 hover:underline underline-offset-2' href={"/project/" + project.path}>
            <i className="fa-solid fa-link fa-sm mr-2 text-teal-400"></i>
            {project.title}
        </a>
        <p className='text-zinc-400'>{project.description}</p>
        <Tag tags={project.tags} />
        <Button
          text={"Read more"}
          href={`/project/${project.path}`}
          icon={<i className="fa-solid fa-link fa-sm mr-2"></i>}
        />
      <VisitProjectButton href={project.href} />
    </div>
  )
}
