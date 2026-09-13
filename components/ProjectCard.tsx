import type { Project } from "@/data/projects";
import { btnOutline, btnPrimary, btnSm, cn, tag } from "@/lib/styles";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="mt-5.5 rounded-md border border-[var(--line)] bg-[var(--bg-raised)] p-8 first:mt-0">
      <div className="flex flex-wrap items-start justify-between gap-5">
        <div>
          <h3 className="text-2xl font-semibold">{project.name}</h3>
          <p className="mt-1 text-[var(--ink-soft)]">{project.tagline}</p>
        </div>
        <div className="flex flex-none gap-2.5">
          <a
            href={project.github || "#"}
            aria-label={`${project.name} on GitHub`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(btnOutline, btnSm)}
          >
            GitHub
          </a>
          <a
            href={project.demo || "#"}
            aria-label={`${project.name} live demo`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(btnPrimary, btnSm)}
          >
            Live demo
          </a>
        </div>
      </div>

      {project.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className={tag}>{t}</span>
          ))}
        </div>
      )}

      {project.points.length > 0 && (
        <ul className="mt-4.5 grid gap-2.5">
          {project.points.map((point) => (
            <li key={point} className="relative pl-4.5 text-[14.5px] text-[var(--ink-soft)] before:absolute before:left-0 before:content-['—'] before:text-[var(--accent)]">
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
