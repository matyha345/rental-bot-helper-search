import { useForm } from 'react-hook-form'
import Layout from '../../layout/Layout'
import Line from '../../ui/line/line'
import Prices from './bloks/Prices'
import Location from './bloks/Location'
import HeatingHouse from './bloks/HeatingHouse'
import TypeOfRepair from './bloks/TypeOfRepair'
import NumberOfRooms from './bloks/NumberOfRooms'
import PetsAndChildren from './bloks/PetsAndChildren'
import AgentCommission from './bloks/AgentCommission'
import TypeOfAccommodation from './bloks/TypeOfAccommodation'

const Home = () => {
	const { register, handleSubmit, watch, control } = useForm()

	const onSubmit = data => {
		const filteredData = Object.fromEntries(
			Object.entries(data).filter(([key, value]) => value !== false)
		)

		console.log(data)
		console.log(`executed_${JSON.stringify(filteredData, null, 2)}`)
	}

	return (
		<Layout>
			<form onSubmit={handleSubmit(onSubmit)} className='flex w-full flex-col  pt-10'>
				<h1 className='w-full font-semibold leading-7'>Снять недвижимость в Калининграду</h1>
				<Line />

				<TypeOfAccommodation register={register} />
				<Line />

				<NumberOfRooms register={register} />
				<Line />

				<Prices register={register} />
				<Line />

				<Location register={register} control={control} />
				<Line />

				<AgentCommission register={register} />
				<Line />

				<HeatingHouse register={register} />
				<Line />

				<PetsAndChildren register={register} />
				<Line />

				<TypeOfRepair register={register} />
				<Line />

				<input type='submit' className=' rounded-md bg-black/50  p-4 hover:bg-red-700/60' />
			</form>
		</Layout>
	)
}

export default Home
