import React from 'react'

function Modal() {
  return (
    <>
      <div className='overlay'>
        <div className="overlay-inner">
            <button className='close'>close</button>
            <div className="inner-box">
                {/* <img src="./images/book" alt="" /> */}
                <div className="info">
                    <h1>React js by example- building modern web applications</h1>
                    <h3>Luis carrillo</h3>
                    <h4>pakt publiching ltd<span>2016-02-23</span></h4><br/>
                    <a href="#"><button>more</button></a>
                </div>
            </div>
            <h4 className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repudiandae, cumque hic assumenda accusamus soluta quos itaque, iste voluptate quibusdam culpa cupiditate reprehenderit tempora sapiente odio doloremque laudantium sunt sint nesciunt eaque debitis facilis aspernatur! Vitae voluptates et similique eligendi illum suscipit, ipsum minima, nihil quae placeat quidem, veritatis rem?</h4>
        </div>
      </div>
    </>
  )
}

export default Modal