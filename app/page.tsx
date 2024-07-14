import Image from 'next/image'
import Logo from '../assets/logo.svg'
import LandingImg from '../assets/main.svg'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
	return (
		<main>
			<header className='max-w-6xl mx-auto px-4 sm:px-8 py-6'>
				<Image src={Logo} alt='logo image' />
			</header>
			<section className='max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center'>
				<div>
					<h1 className='capitalize text-4xl md:text-7xl font-bold '>
						job <span className='text-primary'>tracking</span> app
					</h1>
					<p className='leading-loose max-w-md mt-4'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
						facilis odit animi praesentium similique perspiciatis odio ipsam,
						in, culpa eveniet nesciunt molestias quasi alias magni corrupti
						voluptas quos omnis sequi?
					</p>
					<Button className='mt-4' asChild>
						<Link href={'/add-job'}>get htarted</Link>
					</Button>
				</div>
				<Image
					className='hidden lg:block'
					src={LandingImg}
					alt='landing image'
				/>
			</section>
		</main>
	)
}
