



import ProductCard from "./ProductCard";

function Products({ products = [], selectedRating, search }) {
  

  const searchedProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );


  if (products.length === 0) {
    return (
      <div className="text-center text-gray-500 text-lg py-10">
        No matching products
      </div>
    );
  }


  if (searchedProducts.length === 0 && search.trim() !== "") {
    return (
      <p
        style={{
          color: "#04d7f3ff",
          marginTop: "15px",
          fontSize: "18px",
          textAlign: "center",
        }}
      >
        No products found for "<strong>{search}</strong>"
      </p>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {searchedProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          selectedRating={selectedRating}
        />
      ))}
    </div>
  );
}

export default Products;

