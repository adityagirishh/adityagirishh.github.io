export default function PublicationCard({ pub }) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-t border-zinc-200">
      <div className="md:col-span-3">
        <p className="text-sm font-medium text-zinc-500">Publication</p>
      </div>
      <div className="md:col-span-9">
        <h3 className="text-lg font-medium text-zinc-900 leading-snug">{pub.title}</h3>
        <p className="mt-2 text-base text-zinc-500">{pub.venue}</p>
        <p className="mt-1 text-sm text-zinc-400 italic">{pub.meta}</p>
        <p className="mt-4 text-base leading-relaxed text-zinc-500">{pub.description}</p>
      </div>
    </article>
  )
}
