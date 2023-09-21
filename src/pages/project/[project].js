import React from 'react'
import projects from "public/projects/list.json"
import ProjectPage from '@/components/ProjectPage';

export default function Project({ project, markdown }) {

    return(
        <ProjectPage 
            project={project}
            markdown={markdown}
        />
    )
}

export async function getServerSideProps(ctx) {
    let { project } = ctx.query;

    let found = false;
    projects.map((project_) => {
        if(project_.path == project) {
            found = true
            project = project_ // Pass whole JSON to projectpage
        };
    });

    if(!found)
    {
        return { notFound: true }
    }

    // Get corresponding markdown file
    
    const path = process.env.NEXT_PUBLIC_BASE_URL + `/projects/${project.path}.md`
    const res = await fetch(path);
    const markdown = await res.text();

    return { props: { project, markdown } }
}