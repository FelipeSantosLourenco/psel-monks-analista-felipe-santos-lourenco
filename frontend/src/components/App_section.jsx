import { useEffect, useState } from 'react'
import { fetchPageData } from '../api/api.js'

export default function AppSection() {
  const [appData, setAppData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPageData('monks')
      setAppData(data)
    }

    fetchData()
  }, [])

  if (!appData) return null

  return (
    <section className="app-section">
      <div className="app-section-container">
        <div className="app-section-text">
          <h1 className="app-section-title">
            {appData.app_section_title}
          </h1>
          <p className="app-section-description">
            {appData.app_section_subtitle}
          </p>
        </div>

        <div className="app-section-buttons">
          <button className="app-section-button">
            <img
              src={appData.app_section_app_store}
              alt="App store"
            />
          </button>

          <button className="app-section-button">
            <img
              src={appData.app_section_play_store}
              alt="Google play"
            />
          </button>
        </div>
      </div>
    </section>
  )
}
