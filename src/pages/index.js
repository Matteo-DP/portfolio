import Button from '@/components/Button'
import React from 'react'
import FeaturedProjectsGrid from '@/components/FeaturedProjectsGrid'
import projects from "public/projects/list.json"


export default function index() {

  return (
    <>
      <section className='h-screen flex items-center' id='home'>
        <div>
          <h1 className='text-zinc-100 font-semibold text-3xl md:text-5xl'>I&apos;m a web developer building<br/> creative projects
            <strong className='text-4xl md:text-6xl text-teal-500'>
              .
            </strong>
          </h1>
          <p className='text-zinc-400 mt-8 mb-6'>
            With intermediate experience in both front- and backend development, <br/>
            I&apos;m currently a freelancing full stack developer building projects for fun.
          </p>
          <Button
            text="Contact me"
            type="secondary"
            href="mailto:matteodepauw@yahoo.com"
          />
        </div>
      </section>

      <section className='pt-16 min-h-screen' id='projects'>
        <h1 className='text-2xl font-semibold text-zinc-300 mb-4'>Featured projects</h1>
        <FeaturedProjectsGrid
          projects={projects}
        />
      </section>
    </>
  )
}