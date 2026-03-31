export default function ExperienceCard({ item }) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-t border-zinc-200">
      <div className="md:col-span-3">
        <p className="text-sm font-medium text-zinc-500">{item.period}</p>
        <p className="mt-1 text-sm text-zinc-400">{item.location}</p>
      </div>
      <div className="md:col-span-9">
        <h3 className="text-lg font-medium text-zinc-900">{item.role}</h3>
        <p className="mt-1 text-base text-zinc-500">{item.company}</p>
        <ul className="mt-4 space-y-3">
          {item.bullets.map((bullet, idx) => (
            <li key={idx} className="flex gap-3 text-base leading-relaxed text-zinc-500">
              <span className="text-zinc-300 select-none">—</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
