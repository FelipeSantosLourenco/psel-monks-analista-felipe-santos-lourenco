import './App.css'
import AppSection from './components/App_section'
import Card_section from './components/Card-section'
import Footer from './components/Footer'
import Forms_box from './components/Forms_box'
import Hero_LP from './components/Hero_LP'
import Product_tags from './components/Product_tags'
import Products from './components/Products'
import SimpleGallery from './components/Simple_gallery'

function App() {

  return (
    <>
      <Hero_LP />
      <Products />
      <SimpleGallery />
      <AppSection />
      <Product_tags />
      <Card_section />
      <Forms_box />
      <Footer />
    </>
  )
}

export default App
