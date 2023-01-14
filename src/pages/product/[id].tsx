import { useRouter } from 'next/router'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'

export default function Product() {
  // const { query } = useRouter

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat
          rerum cumque, excepturi fugiat corrupti unde est dolor beatae dolorem
          aperiam enim! Fugit, impedit sed? Consequatur assumenda officiis sequi
          cumque.
        </p>
        <button>Comprar Agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
