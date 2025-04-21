import { useEffect, useState } from 'react'
import { fetchPageData } from '../api/api.js'

export default function Card_section() {
    const [cards, setCards] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchPageData('monks')

            const extractedCards = [1, 2, 3].map((i) => ({
                title: data[`card_section_title${i}`],
                description: data[`card_section_text${i}`],
                buttonText: data[`card_section_button${i}`]
            }))

            setCards(extractedCards)
        }

        fetchData()
    }, [])

    if (!cards.length) return null

    return (
        <section className="card-section">
            <div className="card-container">
                {cards.map((card, index) => (
                    <div key={index} className="card">
                        <h2 className="card-title">{card.title}</h2>
                        <p className="card-description">{card.description}</p>
                        <button className="card-button">{card.buttonText}</button>
                    </div>
                ))}
            </div>
        </section>
    )
}
