import React from 'react'
import ProductEntryPage from './ProductEntryPage'

const page = ({ params }: { params: { ProductDetailsID: string } }) => {
  return <ProductEntryPage ProductDetailsID={params.ProductDetailsID} />
  
}

export default page