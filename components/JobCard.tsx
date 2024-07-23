import { JobType } from '@/utils/types'
import { MapPin, Briefcase, CalendarDays, RadioTower } from 'lucide-react'
import Link from 'next/link'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import DeleteJobBtn from './DeleteJobBtn'

const JobCard = ({ job }: { job: JobType }) => {
	const date = new Date(job.createdAt).toLocaleDateString()

	return (
		<Card className='bg-muted'>
			<CardHeader>
				<CardTitle>{job.position}</CardTitle>
				<CardDescription>{job.company}</CardDescription>
			</CardHeader>
			<Separator className='w-2/3 mx-auto' />
			<CardContent>{/* card info */}</CardContent>
			<CardFooter className='flex gap-4'>
				<Button asChild size='sm'>
					<Link href={`/jobs/${job.id}`}>edit</Link>
				</Button>
				<DeleteJobBtn />
			</CardFooter>
		</Card>
	)
}

export default JobCard
