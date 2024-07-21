import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from '@tanstack/react-query'

import { getAllJobsAction } from '@/utils/actions'

const JobsPage = () => {
	const queryClient = new QueryClient()
	return <HydrationBoundary state={dehydrate(queryClient)}></HydrationBoundary>
}

export default JobsPage
