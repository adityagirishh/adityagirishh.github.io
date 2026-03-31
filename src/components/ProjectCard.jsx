import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project }) {
  const Wrapper = project.link ? 'a' : 'div'
  const wrapperProps = project.link
    ? { href: project.link, target: '_blank', rel: 'noreferrer' }
    : {}

  return (
    <Wrapper {...wrapperProps} className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-t border-zinc-200 block">
      <div className="md:col-span-3">
        <p className="text-sm font-medium text-zinc-500">{project.tag}</p>
      </div>
      <div className="md:col-span-9">
        <h3 className="text-lg font-medium text-zinc-900 flex items-center gap-2 group-hover:text-zinc-600 transition-colors">
          {project.name}
          <ArrowUpRight size={16} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-zinc-400 transition-all duration-300" />
        </h3>
        <p className="mt-3 text-base leading-relaxed text-zinc-500">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
          {project.highlights.map((item) => (
            <span key={item} className="text-sm text-zinc-400 font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}
