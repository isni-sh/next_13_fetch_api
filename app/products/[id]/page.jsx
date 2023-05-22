import Product from "@/app/partials/Product";

const ProductDetails = ({ params: { id } }) => {
  return (
    <div>
      Product Details
      <Product id={id} />
    </div>
  );
};

export default ProductDetails;
