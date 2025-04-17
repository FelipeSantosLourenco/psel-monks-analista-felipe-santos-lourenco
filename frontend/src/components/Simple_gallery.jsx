import primaryPic from "../assets/simple_gallery/primary.png";
import secundaryPic1 from "../assets/simple_gallery/secundary.png";
import secundaryPic2 from "../assets/simple_gallery/secundary_.png";

export default function SimpleGallery() {
    const images = [
        {
            id: 1,
            src: primaryPic,
            alt: "Imagem 1",
        },
        {
            id: 2,
            src: secundaryPic1,
            alt: "Imagem 2",
        },
        {
            id: 3,
            src: secundaryPic2,
            alt: "Imagem 3",
        },
    ];

    return (
        <section className="bg-[#eae8e4] py-12">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="flex flex-col gap-6">
                        <div className="text-left mb-8">
                            <h2 className="text-3xl font-bold text-gray-800">
                                Lorem ipsum dolor sit amet consectetur
                            </h2>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo.
                            </p>
                        </div>
                        <img
                            src={images[0].src}
                            alt={images[0].alt}
                            className="w-full h-auto rounded-lg shadow-md object-cover"
                        />
                    </div>

                    <div className="grid grid-rows-2 gap-6">
                        {images.slice(1).map((image) => (
                            <img
                                key={image.id}
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-auto rounded-lg shadow-md object-cover"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}   