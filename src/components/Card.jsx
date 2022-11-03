import React from 'react'

function Card({book}) {
  return (
    <>
    {
        book.map((item)=>{
            let thumbnail=item.valumeInfo.imageLinks && item.valumeInfo.imageLinks.smallThumbnail;
            return(
                <>
              <div className='card'>
                          <img src={thumbnail} alt="" />
                    <div className="bottom">
                         <h3 className='title'>React js</h3>
                          <p className="amount">&#8377; 3290</p>
                    </div>
              </div>
              </>
            ) 
        })
    }

    </>
  )
}

export default Card