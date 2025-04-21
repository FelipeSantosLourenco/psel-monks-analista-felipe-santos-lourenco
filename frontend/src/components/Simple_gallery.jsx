import { useEffect, useState } from 'react'
import { fetchPageData } from '../api/api.js'

export default function SimpleGallery() {
  const [galleryData, setGalleryData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPageData('monks')
      setGalleryData(data)
    }

    fetchData()
  }, [])

  if (!galleryData) return null

  const images = [
    {
      id: 1,
      src: galleryData.simple_gallery_primary_image,
      alt: 'Imagem principal'
    },
    {
      id: 2,
      src: galleryData.simple_gallery_secundary_image1,
      alt: 'Imagem secundária 1'
    },
    {
      id: 3,
      src: galleryData.simple_gallery_secundary_image2,
      alt: 'Imagem secundária 2'
    }
  ]

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-grid">
          <div className="gallery-left">
            <div className="gallery-text">
              <h2>{galleryData.simple_gallery_title}</h2>
              <p>{galleryData.simple_gallery_subtitle}</p>
            </div>
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="gallery-image"
            />
          </div>
          <div className="gallery-right">
            {images.slice(1).map((image) => (
              <img
                key={image.id}
                src={image.src}
                alt={image.alt}
                className="gallery-image"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
