import { useEffect, useState } from 'react'
import { fetchPageData } from '../api/api.js'

export default function Products() {
  const [productsData, setProductsData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPageData('monks')
      setProductsData(data)
    }

    fetchData()
  }, [])

  if (!productsData) return null

  const products = [
    {
      id: 1,
      image: productsData.products_card1_image,
      title: productsData.products_card1_title,
      description: productsData.products_card1_subtitle,
    },
    {
      id: 2,
      image: productsData.products_card2_image,
      title: productsData.products_card2_title,
      description: productsData.products_card2_subtitle,
    },
    {
      id: 3,
      image: productsData.products_card3_image,
      title: productsData.products_card3_title,
      description: productsData.products_card3_subtitle,
    },
    {
      id: 4,
      image: productsData.products_card4_image,
      title: productsData.products_card4_title,
      description: productsData.products_card4_subtitle,
    },
  ]

  return (
    <section className="products-section">
      <div className="products-container">
        <div className="products-header">
          <h2>{productsData.products_title}</h2>
          <p>{productsData.products_subtitle}</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
