
import CheckboxGroup from "../../../ui/checkbox/CheckboxGroup"

const dataHeatingHouse = [
    {
        id: 'centralHeating', title: 'Центральное отопление'
    },
    {
        id: 'gasHeating', title: 'Газовое отопление'
    }
]

const HeatingHouse = ({register}) => {
	return (
		<>
			<h2 className='text-base font-semibold leading-7'>Отопления</h2>

            <CheckboxGroup register={register} name={'heatingMethod'} notificationMethods={dataHeatingHouse} />
		</>
	)
}

export default HeatingHouse
