'use server'

import prisma from './db'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { Prisma } from '@prisma/client'
import dayjs from 'dayjs'
import { CreateAndEditJobType, JobType, createAndEditJobSchema } from './types'

export function authenticateAndRedirect() {
	const { userId }: { userId: string | null } = auth()
	if (!userId) redirect('/')
	return userId
}

export const createJobAction = async (
	values: CreateAndEditJobType
): Promise<JobType | null> => {
	const userId = authenticateAndRedirect()

	try {
		createAndEditJobSchema.parse(values)

		const job: JobType = await prisma.job.create({
			data: {
				...values,
				clerkId: userId,
			},
		})
		return job
	} catch (error) {
		console.log(error)
		return null
	}
}
