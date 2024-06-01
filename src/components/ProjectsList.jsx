import React from 'react'
import ProjectsListItem from '@/components/ProjectListItem'

export default function ProjectsList({ projects }) {

    return (
        <div className='flex flex-col divide-y divide-zinc-800'>
            {projects.map((e, i) =>
                <ProjectsListItem 
                    key={i}
                    project={e}
                />
            )}
        </div>
    )
}
