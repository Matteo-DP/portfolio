import React from 'react'
import FadeIn from '@/components/FadeIn'
import ProjectCard from '@/components/ProjectCardGrid'

export default function FeaturedProjectsGrid({ projects }) {
  return (
    <div className='flex flex-row flex-wrap'>
    {projects.map((p) =>
      <FadeIn
        key={p.title}
      >
        <ProjectCard
          key={p.title}
          title={p.title}
          description={p.description}
          tags={p.tags}
          privateProject={p.privateProject}
          href={p?.href}
          path={p.path}
        />
      </FadeIn>
    )}
  </div>
  )
}