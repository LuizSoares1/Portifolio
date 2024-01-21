import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
  } from 'react-icons/di'

import {
    SiTypescript,
} from 'react-icons/si'

import { GrGraphQl } from "react-icons/gr";
  
import '../styles/components/technologiescontainer.sass'
  
const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "ts", name: "TypeScript", icon: <SiTypescript /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "graphql", name: "GraphQl", icon: <GrGraphQl /> },
]
  
const TechnologiesContainer = () => {
    return (
        <>
            <section className="technologies-container">
                <h2>Tecnologias</h2>
                <div className="technologies-grid">
                    {technologies.map((tech) => (
                        <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                        </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
  
export default TechnologiesContainer