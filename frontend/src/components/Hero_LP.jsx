import logo from '../assets/logo.png'
import monksVisual from '../assets/monksimg.png'

export default function Hero_LP() {
  return (
    <section className="bg-[#2D2D2D] text-lightText w-screen rounded-bl-[32px] rounded-br-[32px]">
      <nav className="bg-[#2D2D2D] text-lightText fixed top-0 left-0 w-full z-50">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/">
            <img src={logo} alt=".monks logo" className="w-[140px] h-[24px]" />
          </a>

          <ul className="hidden md:flex gap-4 text-sm font-light tracking-wide text-white">
            <li><a href="#" className="hover:underline">Categoria 1</a></li>
            <li><a href="#" className="hover:underline">Categoria 2</a></li>
            <li><a href="#" className="hover:underline">Categoria 3</a></li>
            <li><a href="#" className="hover:underline">Categoria 4</a></li>
          </ul>
        </div>
      </nav>

      <div className="max-w-screen-xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p className="text-sm md:text-base text-[#B3B3B3] mb-6">
            Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra.
          </p>
        </div>

        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src={monksVisual}
              alt="Monks Visual"
              className="w-full max-w-md transform rotate-12"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
