const Input = ({ register, price = null, type, name, placeholder }) => {
	return (
		<>
			<div className='relative rounded-md shadow-sm'>
				{price && (
					<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
						<span className='text-gray-500 sm:text-sm'>₽</span>
					</div>
				)}
				<input
					{...register(name)}
					type={type}
					name={name}
					id={name}
					className='block w-full rounded-md border-0 py-1.5 pl-7 pr-2 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
					placeholder={placeholder}
				/>
			</div>
		</>
	)
}

export default Input
