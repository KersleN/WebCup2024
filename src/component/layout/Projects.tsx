import Project from "@/static/Project";
import projectData from "../../../public/data/projects.json"

function Projects() {
    return <div id="Benefits" className="bg-gradient-to-r from-gradientLeft to-gradientRight">
        <img className="w-full h-44" src="/transitions/transition_grey.svg" alt="transition" />
        <p className="flex text-4xl my-8 justify-center text-white font-bold">Benefits</p>
        <div className="flex flex-wrap w-full desktop:px-20 justify-center">
            {projectData.data.map((item, index) =>
                <Project key={index} headline={item.title} image={item.image} text={item.text} tags={item.tags} link={item.link} />
            )}
        </div>
    </div>
}

export default Projects;