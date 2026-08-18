import { ArrowUpRight } from 'lucide-react'
import Navbar from './components/Navbar'
import SectionHeading from './components/SectionHeading'
import Reveal from './components/Reveal'
import ProjectCard from './components/ProjectCard'
import ExperienceCard from './components/ExperienceCard'
import PublicationCard from './components/PublicationCard'
import OpenSourceCard from './components/OpenSourceCard'
import { academicHighlights, certifications, experience, openSource, profile, projects, publications, writing } from './data'
import profileImg from './profile.png'

function MinimalLink({ href, label }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="group inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 hover:text-zinc-500 transition-colors"
    >
      {label}
      <ArrowUpRight size={14} className="text-zinc-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
    </a>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans antialiased selection:bg-zinc-900 selection:text-white pb-32">
      <Navbar />

      <main className="mx-auto max-w-4xl px-6 md:px-8">
        
        {/* HERO SECTION */}
        <section id="home" className="pt-40 pb-24 md:pt-52 md:pb-32">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <div className="max-w-2xl">
                <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 leading-[1.15]">
                  AI/ML engineer. Agents, retrieval, and the research behind both.
                </h1>
                <p className="mt-8 text-lg leading-relaxed text-zinc-500 max-w-xl">
                  {profile.summary}
                </p>
                
                <div className="mt-10 flex flex-wrap gap-6 border-t border-zinc-200 pt-8">
                  <MinimalLink href={profile.links.github} label="GitHub" />
                  <MinimalLink href={profile.links.linkedin} label="LinkedIn" />
                  <MinimalLink href={profile.links.medium} label="Medium" />
                  <MinimalLink href={profile.links.resume} label="Resume / CV" />
                </div>
              </div>
              
              <div className="hidden md:block shrink-0">
                <img 
                  src={profileImg} 
                  alt="Aditya Girish" 
                  className="w-32 h-40 object-cover grayscale opacity-90 object-top"
                />
              </div>
            </div>
          </Reveal>
        </section>

        {/* ABOUT / EDUCATION */}
        <section id="about" className="py-16 md:py-24 border-t border-zinc-900">
          <Reveal>
            <SectionHeading
              title="Academic Foundation"
              description="A rigorous academic background backing applied engineering efforts."
            />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-t border-zinc-200">
              <div className="md:col-span-3">
                <p className="text-sm font-medium text-zinc-500">2022 — 2026</p>
                <p className="mt-1 text-sm text-zinc-400">Bengaluru, India</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-lg font-medium text-zinc-900">PES University</h3>
                <p className="text-base text-zinc-500 mb-6">B.Tech. in Computer Science (AIML)</p>
                <div className="space-y-4">
                  {academicHighlights.slice(1).map((item, idx) => (
                    <div key={idx} className="flex gap-4 text-base leading-relaxed text-zinc-500">
                      <span className="text-zinc-300 select-none">—</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* RESEARCH */}
        <section id="research" className="py-16 md:py-24 border-t border-zinc-900">
          <Reveal>
            <SectionHeading
              title="Publications"
              description="Academic proof-of-work in peer-reviewed environments."
            />
            <div className="mt-8">
              {publications.map((pub) => (
                <Reveal key={pub.title}>
                  <PublicationCard pub={pub} />
                </Reveal>
              ))}
            </div>
          </Reveal>
        </section>

        
        {/* EXPERIENCE */}
        <section id="experience" className="py-16 md:py-24 border-t border-zinc-900">
          <Reveal>
            <SectionHeading
              title="Industry Experience"
              description="Applied AI, cloud orchestration, and production-minded delivery."
            />
            <div className="mt-8">
              {experience.map((item, idx) => (
                <Reveal key={item.role} delay={idx * 0.05}>
                  <ExperienceCard item={item} />
                </Reveal>
              ))}
            </div>
          </Reveal>
        </section>

        {/* OPEN SOURCE */}
        <section id="opensource" className="py-16 md:py-24 border-t border-zinc-900">
          <Reveal>
            <SectionHeading
              title="Open Source"
              description="Contributions and recognition in leading AI and ML development platforms."
            />
            <div className="mt-8">
              {openSource.map((item, idx) => (
                <Reveal key={item.project} delay={idx * 0.05}>
                  <OpenSourceCard item={item} />
                </Reveal>
              ))}
            </div>
          </Reveal>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-16 md:py-24 border-t border-zinc-900">
          <Reveal>
            <SectionHeading
              title="Selected Builds"
              description="A curated overview of research architectures and production products."
            />
            <div className="mt-8">
              {projects.map((project, idx) => (
                <Reveal key={project.name} delay={idx * 0.05}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </Reveal>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="py-16 md:py-24 border-t border-zinc-900">
          <Reveal>
            <SectionHeading
              title="Certifications & Coursework"
              description="Advanced coursework from leading institutions and industry cloud credentials."
            />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
              {certifications.map((cert, idx) => (
                <Reveal key={cert.name} delay={idx * 0.04}>
                  <div className="py-4 border-t border-zinc-200">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-base font-medium text-zinc-900">{cert.name}</h3>
                        <p className="mt-1 text-sm text-zinc-500">{cert.issuer}</p>
                      </div>
                      {cert.code && (
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${
                          cert.code === 'In Progress'
                            ? 'bg-amber-50 text-amber-600 border border-amber-200'
                            : 'bg-zinc-100 text-zinc-500'
                        }`}>
                          {cert.code}
                        </span>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </section>

        {/* WRITING */}
        <section id="writing" className="py-16 md:py-24 border-t border-zinc-900">
          <Reveal>
            <SectionHeading
              title="Writing & Essays"
              description="Deep-dives into systems architecture and model implementations."
            />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-t border-zinc-200">
              <div className="md:col-span-3">
                <p className="text-sm font-medium text-zinc-500">Medium</p>
                <MinimalLink href={profile.links.medium} label="View Archive" />
              </div>
              <div className="md:col-span-9 flex flex-col gap-6">
                {writing.map((item, idx) => (
                  <Reveal key={item.title} delay={idx * 0.04}>
                    <a href={item.link} target="_blank" rel="noreferrer" className="group block">
                      <p className="text-sm text-zinc-400 mb-1">{item.date}</p>
                      <h3 className="text-lg font-medium text-zinc-900 leading-snug group-hover:text-zinc-500 transition-colors">
                        {item.title}
                      </h3>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-16 md:py-24 border-t border-zinc-900">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8">
               <div className="md:col-span-3">
                 <p className="text-sm font-medium text-zinc-500">Contact</p>
               </div>
               <div className="md:col-span-9">
                  <h2 className="text-2xl font-medium tracking-tight text-zinc-900">
                    Open to high-impact engineering and research conversations.
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-zinc-500 max-w-xl mb-8">
                    Based in Bengaluru. If you're building state-of-the-art applied models or extreme-scale infrastructure, let's talk.
                  </p>
                  <MinimalLink href="mailto:adityadeepa634@gmail.com" label="adityadeepa634@gmail.com" />
               </div>
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  )
}
