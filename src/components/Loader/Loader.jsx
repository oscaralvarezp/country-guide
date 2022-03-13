import React from 'react'

const Loader = ({ classname }) => {
  return (
    <div style={{ textAlign: 'center', paddingTop: '20px' }}>
      <div style={{ marginBottom: '20px' }} className={classname} />
      <span>Loading...</span>
    </div>
  )
}

export default Loader
