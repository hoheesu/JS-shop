import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import{ Row, Col, Container, Dropdown} from 'react-bootstrap'

function ProductDetail() {
  let { id } = useParams()
  const [product, setProduct] = useState(null)

  const getProductDetail = async() => {
    let url = `https://my-json-server.typicode.com/hoheesu/JS-shop/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    setProduct(data)
  } 

  useEffect(()=>{
    getProductDetail()
  },[])
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <h3>{product?.title}</h3>
          <p>₩ {product?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
          <small>{product?.choice}</small>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              사이즈 
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {
                product?.size.map((item)=>{
                  return <Dropdown.Item>{item}</Dropdown.Item>
                })
              }
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail