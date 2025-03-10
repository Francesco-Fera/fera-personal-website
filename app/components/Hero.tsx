import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className='text-center py-20 px-4' id='hero'>
      <Image
        src='/avatar.png'
        alt='Francesco Fera Avatar'
        width={100}
        height={100}
        className='rounded-full mx-auto my-4'
        priority
      />
      <h1 className='text-5xl font-bold'>Francesco Fera</h1>
      <h2 className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
        Digital Project Developer | SaaS, Startups & Web Apps
      </h2>
      <p className='mt-2 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto'>
        Transforming ideas into scalable digital products with cutting-edge
        technologies.
      </p>
      <Button variant='outline' size='lg' className='rounded-full mt-6'>
        <Link href='/#contact' aria-label='Contact Francesco Fera'>
          Get in Touch
        </Link>
      </Button>
    </section>
  );
}

export default Hero;
