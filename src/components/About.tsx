import { motion } from "framer-motion";
import { profile } from "../data/profile";
import "./About.css";

const ICONS: Record<string, string> = {
  github: "M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z",
  linkedin:
    "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45C23.2 24 24 23.22 24 22.25V1.75C24 .78 23.2 0 22.22 0Z",
  mail: "M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm1.4 2 8.6 6.4L20.6 6H3.4Zm17.6 2.1-8.14 6.06a1 1 0 0 1-1.2 0L3.5 8.1V18h17.5V8.1Z",
  twitter:
    "M23.64 4.56a9.3 9.3 0 0 1-2.66.73 4.66 4.66 0 0 0 2.04-2.57 9.3 9.3 0 0 1-2.95 1.13 4.64 4.64 0 0 0-7.9 4.23A13.16 13.16 0 0 1 1.64 3.16a4.63 4.63 0 0 0 1.44 6.19 4.6 4.6 0 0 1-2.1-.58v.06a4.64 4.64 0 0 0 3.72 4.55 4.65 4.65 0 0 1-2.09.08 4.64 4.64 0 0 0 4.33 3.22A9.31 9.31 0 0 1 0 18.58a13.14 13.14 0 0 0 7.1 2.08c8.52 0 13.18-7.06 13.18-13.18 0-.2 0-.4-.02-.6a9.4 9.4 0 0 0 2.38-2.32Z",
  web: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm7.94 9h-3.1a15.6 15.6 0 0 0-1.3-5.6A8.03 8.03 0 0 1 19.94 11ZM12 4.06c.9 1.2 1.98 3.2 2.16 6.94H9.84c.18-3.74 1.26-5.74 2.16-6.94ZM9.84 13h4.32c-.18 3.74-1.26 5.74-2.16 6.94-.9-1.2-1.98-3.2-2.16-6.94ZM8.46 5.4A15.6 15.6 0 0 0 7.16 11h-3.1a8.03 8.03 0 0 1 4.4-5.6ZM4.06 13h3.1a15.6 15.6 0 0 0 1.3 5.6A8.03 8.03 0 0 1 4.06 13Zm11.48 5.6a15.6 15.6 0 0 0 1.3-5.6h3.1a8.03 8.03 0 0 1-4.4 5.6Z",
};

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">about-me.md</p>
          <h1 className="about__name">{profile.name}</h1>
          <p className="about__role mono">{profile.role}</p>

          <p className="about__bio">{profile.bio}</p>

          <div className="about__meta">
            <span className="about__status">
              <span className="about__status-dot" /> {/** Aquí cambio el color del dot (dot--red, dot--yellow, dot--green) */}
              {profile.status}
            </span>
            <span className="about__location mono">{profile.location}</span>
          </div>

          <div className="about__socials">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="about__social"
                aria-label={s.label}
                title={s.label}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d={ICONS[s.icon] ?? ICONS.web} />
                </svg>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="about__terminal"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="terminal__bar">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
            <span className="terminal__title mono">profile.sh</span>
          </div>
          <div className="terminal__body mono">
            <img className="terminal__avatar" src={profile.avatarUrl} alt={profile.name} />
            <p>
              <span className="terminal__prompt">$</span> whoami
            </p>
            <p className="terminal__out">{profile.name}</p>
            <p>
              <span className="terminal__prompt">$</span> cat role.txt
            </p>
            <p className="terminal__out">{profile.role}</p>
            <p>
              <span className="terminal__prompt">$</span> git status
            </p>
            <p className="terminal__out terminal__out--accent">
              On branch main — {profile.status.toLowerCase()}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
