export default function SectionHeading({ title, description }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-medium tracking-tight text-zinc-900">{title}</h2>
      {description && <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-500">{description}</p>}
    </div>
  )
}
