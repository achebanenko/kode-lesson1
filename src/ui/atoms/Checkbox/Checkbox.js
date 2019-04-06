import React from 'react'
import { theme } from '@ui/theme'

export const Checkbox = ({ checked, disabled }) => {
	if(checked) {
		return (
		  <svg width={24} height={24} fill="none">
		    <path
		      fillRule="evenodd"
		      clipRule="evenodd"
		      d="M4 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm2 10l3.5 3.5 8.833-8.833L19.5 7.833l-10 10-4.667-4.666L6 12z"
		      fill={disabled ? theme.pallete.whiteSmoke : theme.pallete.radicalRed}
		    />
		  </svg>
		)
	}
	return (
	  <svg width={24} height={24} fill="none">
	    <rect 
	    	x={2.5} y={2.5} width={19} height={19} rx={1.5} 
	    	stroke={disabled ? theme.pallete.gainsboro : theme.pallete.gainsboro}
	    />
	  </svg>
	)
}