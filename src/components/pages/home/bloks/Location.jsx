import { Controller } from 'react-hook-form'
import SelectMenus from '../../../ui/select-menus/SelectMenus'
import { dataDistrict } from '../data/district'
import dataStreets from '../data/dataNumberOfStreets.json'


const Location = ({ register, control }) => {
	return (
		<>
			<h2 className='text-base font-semibold leading-7'>Расположения</h2>

			<div className='mt-4 flex w-full flex-col md:flex-row md:items-center'>
				<div className=' md:min-w-60 md:max-w-screen-sm'>
					<Controller
						name='district'
						control={control}
						render={({ field: { value, onChange } }) => (
							<SelectMenus
								register={register}
								defaultValueArray={[]}
								placeholderName={'Выберите район'}
								data={dataDistrict}
								value={value}
								onChange={onChange}
								name={'districtName'}
							/>
						)}
					/>
				</div>
				<div className='mt-5 md:ml-5 md:mt-0 md:min-w-80 md:max-w-screen-sm'>
					<Controller
						name='street'
						control={control}
						render={({ field: { value, onChange } }) => (
							<SelectMenus
								register={register}
								defaultValueArray={[]}
								placeholderName={'Выберите улицу'}
								data={dataStreets}
								name={'streetName'}
								value={value}
								onChange={onChange}
							/>
						)}
					/>
				</div>
			</div>
		</>
	)
}

export default Location
