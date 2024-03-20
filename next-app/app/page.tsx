import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main className='text-black' >
      <h1 className='text-black'>This is home</h1>
      <Link href="/users">users</Link>
      <ProductCard/>
    </main>
  )
}
