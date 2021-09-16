import React, { useState, useEffect, FunctionComponent } from 'react'
import Navbar from '@components/Navbar/Navbar'

const HomePage = () => {
  const [products, setProducts] = useState<TProduct[]>([])

  useEffect(() => {
    try {
      window
        .fetch('/api/avo')
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
    <div>
      {/* <Navbar /> */}
      <div>Platzi and Next.js!</div>
      <br />
      <div>Listado de productos</div>
      <div>
        {products?.map((product, key) => (
          <p key={key}>
            {product.id}-<span>{product.name}</span>
          </p>
        ))}
      </div>
      <br />
    </div>
  )
}

export default HomePage
