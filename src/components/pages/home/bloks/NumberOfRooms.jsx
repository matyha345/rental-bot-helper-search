import CheckboxGroup from '../../../ui/checkbox/CheckboxGroup'

const dataNumberOfRooms = [
	{
		id: 'studio',
		title: 'Студия'
	},
	{
		id: 1,
		title: '1'
	},
	{
		id: 2,
		title: '2'
	},
	{
		id: 3,
		title: '3'
	},
	{
		id: 4,
		title: '4'
	},
	{
		id: 5,
		title: '+5'
	}
]

const defaultCheckedInput = ['studio', 1, 2]

const NumberOfRooms = ({ register }) => {
	return (
		<>
			<h2 className='text-base font-semibold leading-7'>Количество комнат</h2>

			<CheckboxGroup
				register={register}
				notificationMethods={dataNumberOfRooms}
				defaultCheckedInput={defaultCheckedInput}
				name={'roomOptions:'}
			/>
		</>
	)
}

export default NumberOfRooms
