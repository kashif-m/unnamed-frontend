
import React, {useState, useEffect} from 'react'

// SVGs
import InfoIcon from '../assets/images/info.svg'
import CloseIcon from '../assets/images/close.svg'

const ClaimForm = props => {

	const {user, updateClaimFormView} = props
	const {insurance} = user

	const canClaim = () => {

	}

  	return (
	
		<div className='claim-form'>
			<div className="heading">Insurance Claim</div>
			<div className="info">
				<InfoIcon />
				<span>Please fill out the necessary fields.</span>
			</div>
			<CloseIcon className='close' onClick={() => updateClaimFormView(false)} />
			<div className="claim--land">
				<div className="heading">Select your land</div>
	  			<select name="claim--land" id="claim--land">
					<option value={insurance.surveyNo}> {insurance.surveyNo} </option>
				</select>
			</div>
			<div className="claim--cause">
				<div className="heading">Reason for Insurance claim?</div>
				<select name="claim--cause" id="claim--cause">
					<option value="">Select Cause</option>
					<option value="rain">Rain Flooding</option>
					<option value="drought">Drought Damage</option>
				</select>
			</div>

			<div className="submit"
				onClick={() => canClaim()} >SUBMIT</div>
		</div>
  	)
}

export default ClaimForm
