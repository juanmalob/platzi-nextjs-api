import React, { useState, useEffect, FunctionComponent } from 'react'
//import Navbar from '@components/Navbar/Navbar'
import fetch from 'isomorphic-unfetch'
const HomePage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    try {
      fetch('/api/avo')
        .then((response) => response.json())
        .then(({ data, length }) => {
          console.log('hay datos')
          setProducts(data)
        })
    } catch (error) {
      console.log(error)
    }
  }, [])

  console.log(products)
  return (
    <div className="container">
      {/* <Navbar /> */}
      <div>Platzi and Next.js!</div>
      <br />
      <div>Listado de productos</div>
      <div>
        {products?.map((product, key) => (
          <div>
            <p>{key}</p>
            <p key={key}>
              {product.id}-<span>{product.name}</span>
            </p>
            <a href={`/product/${product.id}`}>{product.name}</a>
          </div>
        ))}
      </div>
      <br />
    </div>
  )
}

export default HomePage
