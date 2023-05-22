async function fetchUser(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: {
      // how often check for new data in second
      revalidate: 60,
    },
  });
  const product = res.json();
  return product;
}

const Product = async ({ id }) => {
  const product = await fetchUser(id);

  return (
    <div>
      <h3>{product.title}</h3>
    </div>
  );
};

export default Product;
