import Link from 'next/link'

export default function FourOhFour() {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
       <h1 className='text-white text-2xl mx-2'>404 - Page Not Found</h1>
       <Link href="/" className='text-red-500 text-2xl'>
        Go back home
       </Link>
    </div>
  )
}