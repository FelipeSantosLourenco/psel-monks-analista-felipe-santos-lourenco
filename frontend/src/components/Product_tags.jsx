import { useEffect, useState } from 'react'
import { fetchPageData } from '../api/api.js'

export default function Product_tags() {
  const [tags, setTags] = useState([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPageData('monks')

      const extractedTags = Object.entries(data)
        .filter(([key]) => key.startsWith('product_tags_'))
        .sort(([a], [b]) => {
          const aNum = parseInt(a.split('_').pop())
          const bNum = parseInt(b.split('_').pop())
          return aNum - bNum
        })
        .map(([, value]) => value)

      setTags(extractedTags)
      setTitle(data.products_title)
    }

    fetchData()
  }, [])

  if (!tags.length) return null

  return (
    <section className="product-tags-section">
      <div className="product-tags-container">
        <h1 className="product-tags-title">{title}</h1>
      </div>

      <div className="tags-container">
        {tags.map((tag, index) => (
          <button key={index} className="tag">
            {tag}
          </button>
        ))}
      </div>
    </section>
  )
}
