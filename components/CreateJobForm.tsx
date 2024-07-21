'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
	JobStatus,
	JobMode,
	createAndEditJobSchema,
	CreateAndEditJobType,
} from '@/utils/types'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'

import { CustomFormField, CustomFormSelect } from './FormComponents'
// react query
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createJobAction } from '@/utils/actions'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'

const CreateJobForm = () => {
	const form = useForm<CreateAndEditJobType>({
		resolver: zodResolver(createAndEditJobSchema),
		defaultValues: {
			position: '',
			company: '',
			location: '',
			status: JobStatus.Pending,
			mode: JobMode.FullTime,
		},
	})

	const queryClient = useQueryClient()
	const { toast } = useToast()
	const router = useRouter()
	const { mutate, isPending } = useMutation({
		mutationFn: (values: CreateAndEditJobType) => createJobAction(values),
		onSuccess: data => {
			if (!data) {
				toast({ description: 'there was an error' })
				return
			}
			toast({ description: 'job created' })
			queryClient.invalidateQueries({ queryKey: ['jobs'] })
			queryClient.invalidateQueries({ queryKey: ['stats'] })
			queryClient.invalidateQueries({ queryKey: ['charts'] })

			router.push('/jobs')
		},
	})

	function onSubmit(values: CreateAndEditJobType) {
		mutate(values)
	}
	return (
		<Form {...form}>
			<form
				className='bg-muted p-8 rounded'
				onSubmit={form.handleSubmit(onSubmit)}>
				<h2 className='capitalize font-semibold text-4xl mb-6'>add job</h2>
				<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start'>
					{/* position */}
					<CustomFormField name='position' control={form.control} />
					{/* company */}
					<CustomFormField name='company' control={form.control} />
					{/* location */}
					<CustomFormField name='location' control={form.control} />
					{/* job status */}
					<CustomFormSelect
						name='status'
						control={form.control}
						labelText='job status'
						items={Object.values(JobStatus)}
					/>
					{/* job mode */}

					<CustomFormSelect
						name='mode'
						control={form.control}
						labelText='job mode'
						items={Object.values(JobMode)}
					/>

					<Button
						className='self-end capitalize'
						type='submit'
						disabled={isPending}>
						{isPending ? 'Loading' : 'Create Job'}
					</Button>
				</div>
			</form>
		</Form>
	)
}

export default CreateJobForm
