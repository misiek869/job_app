'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Button } from './ui/button'

type ButtonContainerProps = {
	currentPage: number
	totalPages: number
}
const BtnContainer = ({ currentPage, totalPages }: ButtonContainerProps) => {
	const searchParams = useSearchParams()
	const router = useRouter()
	const pathName = usePathname()

	const pageBtns = Array.from({ length: totalPages }, (_, i) => i + 1)

	const handlePageChange = (page: number) => {
		const defaultParams = {
			search: searchParams.get('search') || '',
			jobStatus: searchParams.get('jobStatus') || '',
			page: String(page),
		}

		let params = new URLSearchParams(defaultParams)
		router.push(`${pathName}?${params.toString()}`)
	}

	return (
		<div className='flex gap-x-2'>
			{pageBtns.map((btn, index) => {
				return (
					<Button
						key={index}
						size={'icon'}
						variant={currentPage === btn ? 'default' : 'outline'}
						onClick={() => handlePageChange(btn)}>
						{btn}
					</Button>
				)
			})}
		</div>
	)
}

export default BtnContainer
