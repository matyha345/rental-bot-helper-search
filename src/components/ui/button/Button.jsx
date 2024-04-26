const Button = ({ clickHandler, children }) => {
	return (
		<button onClick={clickHandler} className='px-3 py-2 border-solid border rounded-lg'>
			{children}
		</button>
	)
}

export default Button
