import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className='text-center py-20 px-4'>
      <Image
        src='/avatar.png'
        alt='Francesco Fera Avatar'
        width={100}
        height={100}
        className='rounded-full mx-auto my-4'
      />
      <h1 className='text-5xl font-bold'>Francesco Fera</h1>
      <h3 className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
        Sviluppo progetti digitali.
      </h3>
      <Button variant='outline' size='lg' className='rounded-full mt-4 '>
        <Link href='#contattami'>Contattami</Link>
      </Button>
    </section>
  );
}

export default Hero;
