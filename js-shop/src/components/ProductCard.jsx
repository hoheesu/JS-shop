import React ,{ useState }from 'react'
import { useNavigate } from 'react-router-dom'

function ProductCard({item}) {
  const navigate = useNavigate()
  const goToDetail = () => {
    navigate(`/detail/${item?.id}`)
  }
  return (
    <div className='product-card' onClick={goToDetail}>
      <img src={item?.img} />
      <p className='choice'>{ item?.choice ? "Conscious choice" : "" }</p>
      <h3>{item?.title}</h3>
      <p>{item?.price}</p>
      <p className='new'>{ item?.new ? '신제품' : ''}</p>
    </div>
  )
}

export default ProductCard