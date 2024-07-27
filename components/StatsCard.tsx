import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

import { Skeleton } from './ui/skeleton'

type StatsCardsProps = {
	title: string
	value: number
}

const StatsCard = ({ title, value }: { title: string; value: number }) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{value}</CardDescription>
			</CardHeader>
		</Card>
	)
}

export default StatsCard
