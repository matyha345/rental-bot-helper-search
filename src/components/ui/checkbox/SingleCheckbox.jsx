const SingleCheckbox = ({ register,title, id, name }) => {
	return (
		<>
			<fieldset className="mt-4 ml-3">
				<legend className='sr-only'>Notifications</legend>
				<div className='space-y-5 transition ease-in-out hover:opacity-80'>
					<div className='relative flex items-start '>
						<div className='flex h-6 items-center'>
							<input
								{...register(name)}
								id='comments'
								aria-describedby='comments-description'
								name={name}
								type='checkbox'
								className='h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
							/>
						</div>
						<div className='ml-3 text-sm leading-6 '>
							<label htmlFor='comments' className='cursor-pointer font-medium' >
								{title}
							</label>
						</div>
					</div>
				</div>
			</fieldset>
		</>
	)
}

export default SingleCheckbox
