import product1 from "../assets/products/product1.png"
import product2 from "../assets/products/product2.png"
import product3 from "../assets/products/product3.png"
import product4 from "../assets/products/product4.png"

export default function Products() {
    const products = [
      {
        id: 1,
        image: product1, // Substitua pelo caminho correto da imagem
        title: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur.",
      },
      {
        id: 2,
        image: product2,
        title: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur.",
      },
      {
        id: 3,
        image: product3,
        title: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur.",
      },
      {
        id: 4,
        image: product4,
        title: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur.",
      },
    ];
  
    return (
      <section className="bg-[#eae8e4] w-screen py-12">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-left mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo.
            </p>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }