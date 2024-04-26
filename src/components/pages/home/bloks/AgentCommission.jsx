import CheckboxRadio from '../../../ui/checkbox-radio/CheckboxRadio'
import SingleCheckbox from '../../../ui/checkbox/SingleCheckbox'

const dataAgentCommission = [
	{
		id: 'noCommission',
		title: 'Без комиссии',
		type: 'checkbox'
	}
]

const AgentCommission = ({ register }) => {
	return (
		<>
			<h2 className='text-base font-semibold leading-7'>Комиссия агента</h2>

			<SingleCheckbox title={'Без комиссии'} register={register} name={'hasCommission'} />
		</>
	)
}

export default AgentCommission
