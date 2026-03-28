import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

// هنا هنستخدم الداتا اللي عندك
import { projectsData } from "@/components/projects/ProjectData";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies?: string[];
  liveLink?: string;
  githubLink?: string;
  features?: string[];
  logic?: string;
};

function pickFeaturedProjects() {
  // غيّر الـIDs / أو اختار بالمفتاح حسب الداتا عندك
  const store = projectsData["nextjs"]?.projects?.[0] as Project | undefined;
  const dashboard = projectsData["html-css"]?.projects?.[0] as Project | undefined;
  const game = projectsData["games"]?.projects?.[0] as Project | undefined;

  return { store, dashboard, game };
}

export default function FeaturedProjectsSection() {
  const { store, dashboard, game } = pickFeaturedProjects();

  return (
    <section className="py-20 px-4" id="projects">
      <div className="container mx-auto">
        {/* header */}
        <div className="text-center mb-12">
          <h2 className="h2">
            Featured <span className="text-accent">Work</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-4">
            A focused selection of projects showcasing real-world UI, state management, and interactive logic.
          </p>
        </div>

        {/* Featured big card */}
        {store ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8">
                <div className="inline-flex items-center gap-2 text-xs font-semibold rounded-full bg-accent/20 text-accent px-3 py-1 mb-4">
                  Featured • WIP
                </div>

                <h3 className="text-2xl font-bold">{store.title}</h3>
                <p className="text-gray-300 mt-3 leading-relaxed">
                  {store.description}
                </p>

                {store.technologies?.length ? (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {store.technologies.slice(0, 6).map((t) => (
                      <span
                        key={t}
                        className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-gray-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="flex flex-wrap gap-3 mt-7">
                  <Link
                    href="/work"
                    className="rounded-xl bg-accent/80 hover:bg-accent px-5 py-3 text-sm font-semibold text-white transition"
                  >
                    View details
                  </Link>

                  {store.liveLink ? (
                    <a
                      href={store.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-white/15 hover:bg-white/5 px-5 py-3 text-sm font-semibold text-white transition"
                    >
                      Live demo
                    </a>
                  ) : (
                    <span className="rounded-xl border border-white/15 px-5 py-3 text-sm text-gray-300">
                      Live demo soon
                    </span>
                  )}
                </div>
              </div>

              <div className="relative min-h-[260px] bg-black/20">
                {/* صورة المشروع */}
                {/* لو انت بتستخدم next/image استخدمه، لو لا خليك img */}
                <img
                  src={store.image}
                  alt={store.title}
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        ) : null}

        {/* Secondary cards + teaser */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {/* Dashboard */}
          {dashboard ? (
            <MiniCard project={dashboard} />
          ) : (
            <GhostCard />
          )}

          {/* Game */}
          {game ? (
            <MiniCard project={game} />
          ) : (
            <GhostCard />
          )}

          {/* Teaser */}
          <TeaserCard />
        </div>

        {/* View all */}
        <div className="flex justify-center mt-10">
          <Link
            href="/work"
            className="group flex items-center gap-2 px-8 py-4 bg-accent/60 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:scale-105"
          >
            View All Projects
            <HiArrowRight className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function MiniCard({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition">
      <div className="h-40 bg-black/20">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>

      <div className="p-5">
        <h4 className="font-semibold text-lg">{project.title}</h4>
        <p className="text-gray-300 text-sm mt-2 line-clamp-3">
          {project.description}
        </p>

        <div className="mt-4 flex gap-3">
          <Link
            href="/work"
            className="text-sm font-semibold text-accent hover:underline"
          >
            Details
          </Link>

          {project.liveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-white/90 hover:underline"
            >
              Live
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function GhostCard() {
  return (
    <div className="rounded-2xl border border-dashed border-white/15 bg-white/5 p-6 flex items-center justify-center text-center">
      <div>
        <div className="text-4xl mb-2">?</div>
        <p className="text-gray-300 text-sm">
          More projects are available on the Work page.
        </p>
      </div>
    </div>
  );
}

function TeaserCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-accent/10 p-6">
      <div className="text-sm font-semibold text-accent">Explore more</div>
      <h4 className="text-xl font-bold mt-2">Want to see the full gallery?</h4>
      <p className="text-gray-300 text-sm mt-3 leading-relaxed">
        Browse categorized projects with details, tech stack, and live demos.
      </p>
      <Link
        href="/work"
        className="inline-flex mt-5 rounded-xl bg-accent/80 hover:bg-accent px-5 py-3 text-sm font-semibold text-white transition"
      >
        Go to Work
      </Link>
    </div>
  );
}