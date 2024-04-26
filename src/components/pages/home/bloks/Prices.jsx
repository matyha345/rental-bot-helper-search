import Input from '../../../ui/input/Input'

const Prices = ({ register }) => {
	return (
		<>
			<h2 className='text-base font-semibold leading-7'>Стоимость ₽</h2>

			<div className='ml-2 mt-4 flex items-center'>
				<span className='mr-2 block'>от</span>
				<Input register={register} price={true} type={'number'} name={'priceTo'} placeholder={'0.00'} />
				<span className='ml-2 mr-2 block'>до</span>
				<Input register={register} price={true} type={'number'} name={'priceDo'} placeholder={'0.00'} />
			</div>
		</>
	)
}

export default Prices
