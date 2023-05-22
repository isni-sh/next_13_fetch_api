import Image from "next/image";
import Link from "next/link";

async function getProducts() {
  const response = await fetch("https://dummyjson.com/products", {
    next: {
      // how often check for new data in second
      revalidate: 60,
    },
  });

  const products = response.json();
  return products;
}

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Customers also purchased
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.products.map((product, index) => {
          return (
            <Link href={`/products/${product.id}`} key={index}>
              <div className="group relative">
                <div className="h-96 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 relative">
                  <Image
                    src={product.thumbnail}
                    alt="Picture of the author"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        {product.brand}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.title}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
