import axios from 'axios';

export const fetchPageData = async (slug) => {
  try {
    const pageRes = await axios.get(
      `http://psel-monks-analista-felipe-santos-lourenco.local/wp-json/wp/v2/pages?slug=${slug}`
    )
    if (pageRes.data.length > 0) {
      const pageId = pageRes.data[0].id
      const res = await axios.get(
        `http://psel-monks-analista-felipe-santos-lourenco.local/wp-json/acf/v3/pages/${pageId}`
      )
      return res.data.acf
    } else {
      console.error('Página não encontrada')
      return null
    }
  } catch (error) {
    console.error('Erro ao buscar dados:', error)
    return null
  }
}
