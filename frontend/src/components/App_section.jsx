import app_store from "../assets/app_section/app_store.png";
import google_play from "../assets/app_section/google_play.png";

export default function AppSection() {
    return (
        <section className="bg-[#eae8e4] py-12">
            <div className= "bg-[#3C0C60] text-white p-8 rounded-lg max-w-screen-xl mx-auto flex items-center justify-between">
                <div className="mb-6 gap-8">
                    <h1 className="text-3xl font-bold mb-4">Lorem, ipsum dolor sit amet consectetur</h1>
                    <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ducimus, quo laudantium hic perspiciatis ipsa eum omnis quis animi debitis recusandae ad, architecto possimus dolorum! Dolore, hic facilis? Sunt, necessitatibus!</p>
                </div>

                <div className="bg-[#3C0C60] flex flex-col gap-4">
                    <button className="p-0">
                        <img src={app_store} alt="App store" className="h-12"/>
                    </button>

                    <button>
                        <img src={google_play} alt="Google play" className="h-12"/>
                    </button>
                </div>
            </div>
        </section>
    )
}