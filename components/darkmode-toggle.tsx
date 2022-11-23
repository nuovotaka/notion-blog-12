import { DarkModeSwitch } from 'react-toggle-dark-mode'

const DarkModeToggle = ({checked, onChange}) => {

	return (
		<DarkModeSwitch
			style={{ color: '#888' }}
			sunColor={ '#888' }
			checked={checked}
			onChange={onChange}
			size={30} />
	)
}

export default DarkModeToggle
