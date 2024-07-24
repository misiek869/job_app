import EditJobForm from '@/components/EditJobForm'
import { getSingleJobAction } from '@/utils/actions'
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from '@tanstack/react-query'

const JobDetailPage = async ({ params }: { params: { id: string } }) => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery({
		queryKey: ['job', `params.id`],
		queryFn: () => {
			getSingleJobAction(params.id)
		},
	})

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<EditJobForm jobId={params.id} />
		</HydrationBoundary>
	)
}

export default JobDetailPage

// import {
// 	dehydrate,
// 	HydrationBoundary,
// 	QueryClient,
// } from '@tanstack/react-query'

// import JobsList from '@/components/JobsList'
// import SearchForm from '@/components/SearchForm'

// import { getAllJobsAction } from '@/utils/actions'

// const JobsPage = async () => {
// 	const queryClient = new QueryClient()

// 	await queryClient.prefetchQuery({
// 		queryKey: ['jobs', '', 'all', 1],
// 		queryFn: () => getAllJobsAction({}),
// 	})

// 	return (
// 		<HydrationBoundary state={dehydrate(queryClient)}>
// 			<SearchForm />
// 			<JobsList />
// 		</HydrationBoundary>
// 	)
// }

// export default JobsPage
