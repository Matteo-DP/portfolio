import Button from '@/components/Button'
import FadeIn from '@/components/FadeIn'
import ProjectCard from '@/components/ProjectCard'
import React from 'react'


export default function index() {

  const projects = [
    {
      title:"Smart lighting",
      description:"Full-stack smart lighting web application. Backend built with Python and hosted on a Raspberry Pi B+ wired to a relay. Front-end in Next.js which includes comprehensive statistics broken down into hours per day by default with the option of advanced time filtering.",
      tags: ["Full-stack", "Python", "NextJS", "TailwindCSS", "SQLite"],
      privateProject: true
    },
    {
      title:"URL Shortener",
      description:"Simple full-stack url shortener webapp using Firebase authentication and a MySQL database.",
      tags: ["Full-stack", "NextJS", "TailwindCSS", "Firebase Auth", "MySQL"],
      privateProject: false,
      href: "https://url-shortener-beige.vercel.app/"
    },
    {
      title:"Whats in your fridge?",
      description:"Full-stack recipe recommendation webapp. Input the desired ingredients and search through 500K+ recipes. OpenAI generated recommended recipe. Includes the option to save recipes when logged in.",
      tags: ["Full-stack", "NextJS", "TailwindCSS", "Firebase Auth", "MySQL", "OpenAI API"],
      privateProject: false,
      href: "https://whatsinyourfridge.vercel.app/"
    },
    {
      title:"Portfolio website",
      description:"Simple portfolio website built with NextJS and TailwindCSS.",
      tags: ["NextJS", "TailwindCSS"],
      privateProject: false,
      href: "#home"
    },
  ]

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
            href=""
          />
        </div>
      </section>

      <section className='pt-16 min-h-screen' id='projects'>
        <h1 className='text-2xl font-semibold text-zinc-100 mb-4'>Featured projects</h1>
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
              />
            </FadeIn>
          )}
        </div>
      </section>
    </>
  )
}