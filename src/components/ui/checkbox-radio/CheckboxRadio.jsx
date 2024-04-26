const CheckboxRadio = ({
	handleRadioChange,
	selectedOption,
	register,
	name,
	notificationMethods
}) => {
	return (
		<div>
			<fieldset className='ml-3 mt-4'>
				<legend className='sr-only'>Тип жилья</legend>
				<div className='space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0'>
					{notificationMethods.map(notificationMethod => (
						<div
							key={notificationMethod.id}
							className='flex items-center transition ease-in-out hover:opacity-80'
						>
							<input
								{...register(name)}
								name={name}
								value={notificationMethod.id}
								checked={selectedOption === notificationMethod.id}
								onChange={handleRadioChange}
								id={notificationMethod.id}
								type='radio'
								className='h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600'
							/>
							<label
								htmlFor={notificationMethod.id}
								className='ml-3 block cursor-pointer text-sm font-medium leading-6 text-gray-300 '
							>
								{notificationMethod.title}
							</label>
						</div>
					))}
				</div>
			</fieldset>
		</div>
	)
}

export default CheckboxRadio
