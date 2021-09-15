import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const {
    query: { id },
  } = useRouter()

  // state
  const [product, setProduct] = useState<TProduct>()

  useEffect(() => {
    if (id) {
      window
        .fetch(`/api/avo/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
    }
  }, [id])

  return (
    <section>
      <h1>Página producto: {id}</h1>
      <h1>Página producto: {product?.name} </h1>
    </section>
  )
}

export default ProductPage
