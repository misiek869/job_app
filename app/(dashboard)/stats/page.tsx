import { getStatsAction, getChartsDataAction } from '@/utils/actions'

const StatsPage = async () => {
	getChartsDataAction()

	return <div>stats</div>
}

export default StatsPage
