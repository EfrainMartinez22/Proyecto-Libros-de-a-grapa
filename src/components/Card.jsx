import React from 'react'

function Card() {
  return (
    <>
      <div className='card'>
        <img src="../logo.png" alt="" />
        <div className="bottom">
            <h3 className='title'>React js</h3>
            <p className="amount">&#8377; 3290</p>
        </div>
      </div>
    </>
  )
}

export default Card