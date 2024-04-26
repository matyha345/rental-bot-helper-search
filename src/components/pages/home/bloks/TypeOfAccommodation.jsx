import { useState } from 'react'
import CheckboxRadio from '../../../ui/checkbox-radio/CheckboxRadio'

const dataAccommodation = [
	{ id: 'apartment', title: 'Квартира' },
	{ id: 'room', title: 'Комната' },
	{ id: 'apartAndRoom', title: 'Квартира или комната' }
]

const TypeOfAccommodation = ({ register }) => {
	const [selectedOption, setSelectedOption] = useState('apartment')

	const handleRadioChange = e => {
		setSelectedOption(e.target.value)
	}
	return (
		<>
			<h2 className='text-base font-semibold leading-7'>Тип жилья</h2>

			<CheckboxRadio
				selectedOption={selectedOption}
				register={register}
				name={'accommodationOptions'}
				handleRadioChange={handleRadioChange}
				notificationMethods={dataAccommodation}
			/>
		</>
	)
}
export default TypeOfAccommodation
