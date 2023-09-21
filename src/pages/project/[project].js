import React from 'react'
import projects from "public/projects/list.json"
import ProjectPage from '@/components/ProjectPage';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import html from 'remark-html';

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
    const fs = require('fs').promises;
    const path = `public/projects/${project.path}.md`
    const markdown = await fs.readFile(path, 'utf8');

    return { props: { project, markdown } }
}