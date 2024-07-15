import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { PropsWithChildren } from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='grid'>
			<div className='sm:hidden'>
				<Sidebar />
			</div>
			<div className='lg:grid-cols-4'>
				<Navbar />
				<div className=''>{children}</div>
			</div>
		</main>
	)
}

export default DashboardLayout
