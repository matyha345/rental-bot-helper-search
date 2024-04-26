import CheckboxRadio from '../../../ui/checkbox-radio/CheckboxRadio'
import CheckboxGroup from '../../../ui/checkbox/CheckboxGroup'

const dataTypeOfRepair = [
	{
		id: 'grandmaRepairs',
		title: 'Бабушкин ремонт'
	},
	{
		id: 'euroRepairs',
		title: 'Евро ремонт'
	}
]

const TypeOfRepair = ({ register }) => {
	return (
		<>
			<h2 className='text-base font-semibold leading-7'>Вид ремонта</h2>

			<CheckboxGroup register={register} name={'typeOfRepair'} notificationMethods={dataTypeOfRepair} />
		</>
	)
}

export default TypeOfRepair
