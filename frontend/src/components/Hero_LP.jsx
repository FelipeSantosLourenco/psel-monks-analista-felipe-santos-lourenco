import { useEffect, useState } from 'react'
import { fetchPageData } from '../api/api.js'

export default function Hero_LP() {
  const [hero, setHero] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPageData('monks')
      setHero(data)
    }

    fetchData()
  }, [])

  if (!hero) return null

  return (
    <section className="hero-section">
      <nav className="hero-nav">
        <div className="nav-container">
          <a href="/">
            <img src={hero.herolp_logo} alt=".monks logo" className="hero-logo" />
          </a>
          <ul className="hero-nav-links">
            {[ 
              { label: 'Categoria 1', link: hero.herolp_categoria1 },
              { label: 'Categoria 2', link: hero.herolp_categoria2 },
              { label: 'Categoria 3', link: hero.herolp_categoria3 },
              { label: 'Categoria 4', link: hero.herolp_categoria4 },
            ].map((cat, index) => (
              cat.link && (
                <li key={index}>
                  <a href={cat.link} className="hero-link">{cat.label}</a>
                </li>
              )
            ))}
          </ul>
        </div>
      </nav>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">{hero.herolp_title}</h1>
          <p className="hero-subtitle">{hero.herolp_subtitle}</p>
          <div className='hero-scroll'>
        {hero.herolp_scroll && (
            <img
              src={hero.herolp_scroll}
              alt="Monks Visual"
              className="hero-image"
            />
          )}
        </div>
        </div>
        <div className="hero-image-container">
          {hero.herolp_image && (
            <img
              src={hero.herolp_image}
              alt="Monks Visual"
              className="hero-image"
            />
          )}
        </div>
        
      </div>
    </section>
  )
}
