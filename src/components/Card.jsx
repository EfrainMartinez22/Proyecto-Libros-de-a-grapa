import React from 'react'

function Card({book}) {
  return (
    <>
    {
        book.map((item)=>{
            let thumbnail=item.valumeInfo.imageLinks && item.valumeInfo.imageLinks.smallThumbnail;
            let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
            if(thumbnail!=undefined && amount!=undefined){
                return(
                    <>
                  <div className='card'>
                              <img src={thumbnail} alt="" />
                        <div className="bottom">
                             <h3 className='title'>{item.valumeInfo.title}</h3>
                              <p className="amount">&#8377; {amount}</p>
                        </div>
                  </div>
                  </>
                ) 
            }
    
        })
    }

    </>
  )
}

export default Card