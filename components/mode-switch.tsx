'use client'

import React from 'react'
import useDarkMode from 'use-dark-mode'

import DarkModeToggle from './darkmode-toggle'

const ModeSwitch = () => {
	const darkMode = useDarkMode(false)

	return (
		<DarkModeToggle checked={darkMode.value} onChange={darkMode.toggle} />
	)
}

export default ModeSwitch
