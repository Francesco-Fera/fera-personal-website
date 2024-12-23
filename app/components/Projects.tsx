import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Binary, Hotel, Rocket } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Helpy Travel",
    description:
      "SaaS per property managers. Ottieni il massimo dalla tua struttura.",
    website: "https://helpytravel.com",

    icon: <Hotel />,
  },
  {
    title: "MCF Digital",
    description: "Il tuo reparto IT, senza doverlo assumere.",
    website: "https://mcf-digital.com",
    icon: <Binary />,
  },
  {
    title: "The Italian List",
    description: "La directory di tutte le startup italiane.",
    website: "https://",
    icon: <Rocket />,
  },
];

function Projects() {
  return (
    <section className='px-4'>
      <h3 className='text-3xl mb-6 font-bold'>Progetti</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4'>
        {projects.map((project) => (
          <Card key={project.title} className='flex flex-col justify-between'>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter className='flex justify-center'>
              <Button className='w-full'>
                <Link href={project.website}>Vai al Sito</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projects;
