import React ,{ useState }from 'react'
import { Navigate } from 'react-router-dom'

function ProductCard({productList}) {

    // const navigate = useNavigate()
    // const goToDetail = (id)=>{
    //   // let id = className
    //   navigate(`/detail/${id}`)
    // }

  return (
    <div>
      <ul className='product-list'>
        {productList.map((item)=>{
          let sizeL = item.size.length
          let itemPrice = item.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
          return (
            <li className={item.id}>
              <img src={item.img} />
              <div className='price-title-box'>
                <h3>{item.title}</h3>
                <p>₩ {itemPrice}</p>
              </div>
              <span>{item.size.map((itemSize,itemIndex)=>{
                return itemIndex < sizeL - 1? `${itemSize} / ` :  `${itemSize}`
                })}</span>
            </li>
          )})}
      </ul>
    </div>
  )
}

export default ProductCard