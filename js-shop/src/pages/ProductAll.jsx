import React ,{ useEffect, useState }from 'react'
import ProductCard from '../components/ProductCard'

function ProductAll() {
  const [productList,setProductList] = useState([])
  const getProducts = async() => {
    let url = `http://localhost:5000/products`
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)
    setProductList(data)
  }
  console.log(productList)
  useEffect(() =>{
    getProducts()
  },[])

  return (
    <div>
      <h1>전체상품페이지</h1>
      <ProductCard productList={productList} />
    </div>
  )
}

export default ProductAll