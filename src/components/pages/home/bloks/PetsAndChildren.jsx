import CheckboxGroup from '../../../ui/checkbox/CheckboxGroup'

const dataPatsAndChildren = [
	{
		id: 'children',
		title: 'Без явного запрета на детей'
	},
	{
		id: 'pats',
		title: 'Без явного запрета на животных'
	}
]

const PetsAndChildren = ({ register }) => {
	return (
		<>
			<h2 className='text-base font-semibold leading-7'>
				Дети/животные – я фильтрую только те объявления, где запрет прописан прямо в тексте описания
				– с такими хозяевами малореально договориться. Но если запрет указан только в параметрах
				объявления, а в тексте ничего нет, то стоит пробовать. В хороших квартирах часто запрещают
				животных и детей по умолчанию, не обдумывая это всерьез. Если ты не хочешь общаться сам(а),
				обратись в наш консьерж-сервис, мы делаем это профессионально.
			</h2>

			<CheckboxGroup register={register} name={'hasPetsAndChildren'} notificationMethods={dataPatsAndChildren} />
		</>
	)
}

export default PetsAndChildren
