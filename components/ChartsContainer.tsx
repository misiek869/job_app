// 'use client'

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

	return <div>ChartsContainer</div>
}

export default ChartsContainer
