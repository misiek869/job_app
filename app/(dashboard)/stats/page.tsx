import { getStatsAction } from '@/utils/actions'

const StatsPage = async () => {
	const stats = await getStatsAction()

	console.log(stats)
	return <div>stats</div>
}

export default StatsPage
