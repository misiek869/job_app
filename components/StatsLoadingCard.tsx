import React from 'react'
import { Card, CardHeader } from './ui/card'
import { Skeleton } from './ui/skeleton'

const StatsLoadingCard = () => {
	return (
		<Card className='w-[330px] h-[88px]'>
			<CardHeader className='flex flex-row justify-between items-center'>
				<div className='flex items-center space-x-4'>
					<Skeleton className='h-12 w-12 rounded-full' />
					<div className='space-y-2'>
						<Skeleton className='h-4 w-[150px]' />
						<Skeleton className='h-4 w-[100px]' />
					</div>
				</div>
			</CardHeader>
		</Card>
	)
}

export default StatsLoadingCard
