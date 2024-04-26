import React, { useState } from 'react'
import cn from 'clsx'

const CheckboxGroup = ({ name, register, notificationMethods, defaultCheckedInput = [] }) => {
	const [checkedInputs, setCheckedInputs] = useState(defaultCheckedInput)

	const handleCheckboxChange = notificationMethodId => {
		if (checkedInputs.includes(notificationMethodId)) {
			setCheckedInputs(checkedInputs.filter(id => id !== notificationMethodId))
		} else {
			setCheckedInputs([...checkedInputs, notificationMethodId])
		}
	}

	return (
		<div className='mt-4 flex'>
			{notificationMethods.map(notificationMethod => (
				<div key={`_key-${notificationMethod.id}`} className='relative flex'>
					<label
						htmlFor={'label' + notificationMethod.id}
						className='relative ml-3 flex-shrink-0 cursor-pointer'
					>
						<input
							{...register(name + notificationMethod.id.toString(), {
								value: checkedInputs.includes(notificationMethod.id) // Указываем значение true для регистрации
							})}
							type='checkbox'
							className='sr-only'
							id={'label' + notificationMethod.id}
							name={name + notificationMethod.id} // Используем id как имя чекбокса
							checked={checkedInputs.includes(notificationMethod.id)}
							onChange={() => handleCheckboxChange(notificationMethod.id)}
						/>
						<span
							className={cn(
								'relative flex items-center justify-center rounded bg-transparent px-3 py-1 text-sm font-medium leading-6 text-gray-300 transition ease-in-out hover:bg-indigo-600/50',
								{
									'emitted-checkbox': checkedInputs.includes(notificationMethod.id)
								}
							)}
						>
							{notificationMethod.title}
						</span>
					</label>
				</div>
			))}
		</div>
	)
}

export default CheckboxGroup
