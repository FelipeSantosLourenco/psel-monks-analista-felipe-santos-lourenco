import { useEffect, useState } from 'react'
import { fetchPageData } from '../api/api.js'

export default function Footer() {
    const [footerData, setFooterData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchPageData('monks')
            setFooterData(data)
        }

        fetchData()
    }, [])

    if (!footerData) return null

    return (
        <footer className="footer">
            <div className='footer-divider'>
                <hr className="footer-divider-hr" />
            </div>

            <div className="footer-content">
                <div className="footer-social">
                    <a href="https://www.instagram.com/monksinbrazil/">
                        <img
                            src={footerData.footer_instagram}
                            alt=".monks Instagram"
                            className="w-8 h-8 hover:scale-110 transition-transform"
                        />
                    </a>
                    <a href="https://www.whatsapp.com/?lang=pt_BR">
                        <img
                            src={footerData.footer_whatsapp}
                            alt="WhatsApp"
                            className="w-8 h-8 hover:scale-110 transition-transform"
                        />
                    </a>
                    <a href="https://twitter.com/">
                        <img
                            src={footerData.footer_twitter}
                            alt="Twitter"
                            className="w-8 h-8 hover:scale-110 transition-transform"
                        />
                    </a>
                    <a href="https://www.facebook.com/BR.Monks/">
                        <img
                            src={footerData.footer_facebook}
                            alt=".monks Facebook"
                            className="w-8 h-8 hover:scale-110 transition-transform"
                        />
                    </a>
                </div>

                <div className="footer-infos">
                    <h3>
                        {footerData.footer_title}
                    </h3>
                    <div className="footer-infos-categories">
                        <a href={footerData.herolp_categoria1}>
                            {footerData.footer_categoria1}
                        </a>
                        <a href={footerData.herolp_categoria2}>
                            {footerData.footer_categoria2}
                        </a>
                        <a href={footerData.herolp_categoria3}>
                            {footerData.footer_categoria3}
                        </a>
                        <a href={footerData.herolp_categoria4}>
                            {footerData.footer_categoria4}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
