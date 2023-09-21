import React from 'react'
import Tag from './Tag'
import ReactMarkdown from 'react-markdown'
import Button from '@/components/Button'
import remarkGfm from 'remark-gfm'

export default function ProjectPage({ project, markdown }) {

  return (
    <section className='pt-24 min-h-[80vh]'>

        <h1 className='text-3xl sm:text-2xl text-zinc-300 font-mono'>Project blog
            <strong className='ml-1 text-4xl sm:text-3xl text-teal-500'>:</strong>
        </h1>
        <h1 className='mt-1 text-5xl sm:text-4xl'>
            {project.title}
        </h1>
        <Tag tags={project.tags} />
        <div className='flex flex-col divide-y w-full divide-zinc-600'>
          <div className='max-w-4xl pb-10'>
            <p className='text-zinc-200 mt-6'>
              {project.description}
            </p>
            <Button 
              text={"Visit project"}
              href={project.href}
              disabled={project.privateProject}
              tooltipText={"Sorry, this project is private. Please contact me for more info"}
              icon={<i className="fa-solid fa-link fa-sm mr-2"></i>}
            />
            <a className='ml-6 group text-zinc-200 underline' href={project.github} target="_blank" rel="noreferrer">
                View on
                <i className='fa-brands fa-github mr-1 ml-2' />
                <p className='inline'>Github</p>
                <i className='fa-solid fa-arrow-right ml-4 group-hover:translate-x-3 ease-in transition-transform' />
            </a>
          </div>

          <div className='w-full pt-10'>
            <section className='prose prose-headings:text-zinc-200 max-w-full prose-strong:text-teal-800 prose-a:text-teal-500'>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdown}
              </ReactMarkdown>
            </section>
          </div>

        </div>
    </section>
  )
}
