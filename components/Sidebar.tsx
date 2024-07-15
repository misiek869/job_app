'use client'

import logo from '../assets/logo.svg'
import { links } from '@/utils/links'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
	const pathname = usePathname()

	return (
		<aside className='py-4 px-8 bg-muted h-full'>
			<Image className='mx-auto' src={logo} alt='logo' />
			<div className='flex flex-col mt-20 gap-y-4'>
				{links.map(link => {
					const isActivePage = pathname === link.href
					const variant = isActivePage ? 'default' : 'link'
					return (
						<Button asChild key={link.href} variant={variant}>
							<Link className='flex items-center gap-x-2 ' href={link.href}>
								{link.icon} <span className='capitalize'>{link.label}</span>
							</Link>
						</Button>
					)
				})}
			</div>
		</aside>
	)
}

export default Sidebar
