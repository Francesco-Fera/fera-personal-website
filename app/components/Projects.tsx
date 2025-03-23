import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Binary, CodeXml, Hotel, Rocket, ScanSearch } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Next Starter",
    description:
      "A production-ready Next.js SaaS boilerplate with authentication, database, and API integrations.",
    website: "https://github.com/Francesco-Fera/next-starter",
    icon: <CodeXml />,
  },
  {
    title: "Foodylytics",
    description:
      "Competitor analysis reports to find the perfect restaurant location.",
    website: "https://www.foodylytics.com/",
    icon: <ScanSearch />,
  },
  {
    title: "Helpy Travel [Paused]",
    description:
      "A SaaS platform for property managers. Maximize your rental property's potential.",
    website: "https://helpytravel.com",
    icon: <Hotel />,
  },
  {
    title: "MCF Digital [Paused]",
    description:
      "Your IT department, without hiring a full-time team. Software development & digital solutions.",
    website: "https://mcf-digital.com",
    icon: <Binary />,
  },
  {
    title: "The Italian List",
    description:
      "The most comprehensive directory of Italian startups with valuable resources and tools.",
    website: "https://github.com/Francesco-Fera/the-italian-dir",
    icon: <Rocket />,
  },
];

function Projects() {
  return (
    <section className='px-4' id='projects'>
      <h2 className='text-3xl mb-6 font-bold capitalize'>
        Some of my projects
      </h2>
      <p className='mb-4 text-gray-600'>
        Discover my latest digital projects, from SaaS platforms to IT solutions
        for businesses and startups.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {projects.map((project) => (
          <Card key={project.title} className='flex flex-col justify-between'>
            <CardHeader>
              <div className='flex items-center space-x-2'>
                {project.icon}
                <CardTitle>{project.title}</CardTitle>
              </div>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter className='flex justify-center'>
              <Button className='w-full'>
                <Link
                  href={project.website}
                  target='_blank'
                  rel='noopener'
                  aria-label={`Learn more about ${project.title}`}
                >
                  Learn More
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projects;
