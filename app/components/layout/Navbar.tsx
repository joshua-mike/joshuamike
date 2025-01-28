import Image from 'next/image';
import Link from 'next/link';

export default function Navbar()
{
    return (
        <nav className='w-full py-4 px-8'>
            <div className="max-w-7x1 mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/name_logo.svg"
                        alt="JM Logo"
                        width={100}
                        height={100}
                        priority
                        className="hover:opacity-80 transition-opacity"
                    />
                </Link>
                <div className='space-x-6'>
                    <Link href="/about" className="hover:text-gray-600">About</Link>
                    <Link href="/projects" className="hover:text-gray-600">Projects</Link>
                    <Link href="/blog" className="hover:text-gray-600">Blog</Link>
                </div>
            </div>
        </nav>
    )
}