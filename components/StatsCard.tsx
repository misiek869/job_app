import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

import { Skeleton } from './ui/skeleton'

// type StatsCardsProps = {
// 	title: string
// 	value: number
// }

const StatsCard = ({ title, value }: { title: string; value: number }) => {
	return (
		<Card className='bg-muted'>
			<CardHeader className='flex flex-row justify-between items-center'>
				<CardTitle className='capitalize'>{title}</CardTitle>
				<CardDescription className='text-4xl font-extrabold text-primary mt-[0px!important]'>
					{value}
				</CardDescription>
			</CardHeader>
		</Card>
	)
}

export default StatsCard
