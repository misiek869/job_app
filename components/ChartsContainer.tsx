'use client'

import { getChartsDataAction } from '@/utils/actions'
import { useQuery } from '@tanstack/react-query'
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts'

const ChartsContainer = () => {
	const { data, isPending } = useQuery({
		queryKey: ['charts'],
		queryFn: () => getChartsDataAction(),
	})

	if (isPending) {
		return <h2>Loading...</h2>
	}

	if (data === null || data?.length < 1) {
		return null
	}

	return (
		<section>
			<h1 className=''>Monthly Applications</h1>
			<ResponsiveContainer></ResponsiveContainer>
		</section>
	)
}

export default ChartsContainer
