import { ArrowUpRight } from 'lucide-react'

export default function OpenSourceCard({ item }) {
  return (
    <article className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-t border-zinc-200">
      <div className="md:col-span-3 flex items-start gap-4">
        {item.logo ? (
          <img 
            src={`${import.meta.env.BASE_URL}${item.logo.replace(/^\//, '')}`} 
            alt={item.project} 
            className="w-20 h-20 rounded-lg object-cover border border-zinc-200"
          />
        ) : (
          <p className="text-sm font-medium text-zinc-500">{item.role}</p>
        )}
      </div>
      <div className="md:col-span-9">
        <a 
          href={item.link} 
          target="_blank" 
          rel="noreferrer"
          className="block"
        >
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">
              {item.project}
            </h3>
            <ArrowUpRight size={16} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-zinc-400 transition-all duration-300" />
          </div>
          <p className="mt-1 text-sm font-medium text-zinc-500">{item.role}</p>
          <p className="mt-3 text-base leading-relaxed text-zinc-500">{item.description}</p>
        </a>
      </div>
    </article>
  )
}
