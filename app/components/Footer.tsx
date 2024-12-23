import Link from "next/link";

export default function Footer() {
  return (
    <footer className='py-8 mt-8'>
      <div className='container mx-auto px-4 text-center'>
        <p>&copy; {new Date().getFullYear()} Francesco Fera</p>
        <div className='mt-4 flex justify-center space-x-4'>
          <Link
            href='https://www.linkedin.com/in/francesco-fera-87097b232/'
            target='_blank'
            className='hover:text-gray-300'
          >
            LinkedIn
          </Link>
          <Link
            href='https://github.com/Francesco-Fera'
            target='_blank'
            className='hover:text-gray-300'
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
