import Select from 'react-select'

const SelectMenus = ({ data, name, register, placeholderName, defaultValueArray, onChange }) => {
	return (
		<Select
			{...register(name)}
			defaultValue={defaultValueArray}
			isMulti
			name={name}
			options={data}
			className='basic-multi-select'
			placeholder={placeholderName}
			onChange={onChange}
		/>
	)
}
export default SelectMenus
