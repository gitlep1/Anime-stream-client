import React from 'react'
import { useHistory } from 'react-router-dom'

import './backButton.scss'

const backButton = () => {
  const history = useHistory()
  const goToPreviousPath = () => {
    history.goBack()
  }
  return (
    <div>
      <button onClick={goToPreviousPath} className="btn btn-dark">
        Back
      </button>
    </div>
  )
}

// const backButton = () => (
//   <div className='container-back'>
//     <div>
//       <a href='//google.com' target='_blank' rel='noopener noreferrer'>test</a>
//       <Link to='/' class='btn btn-dark' id='backButton'>&lt;BACK</Link>
//     </div>
//   </div>
// )

export default backButton
