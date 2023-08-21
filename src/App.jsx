import { useState, useEffect } from "react";

function Products({ products }) {
  return (
    <>
      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {products.map((product) => (
            <div key={product.id} className="rounded shadow overflow-hidden">
              {product.image ? (
                <img src={`http://localhost:8000/storage/products/${product.image}`} alt="image" className="object-cover w-full h-52" />
                ) : (
                <img src={`img/img_placeholder.jpg`} alt="image" className="object-cover w-full h-52" />
              )}
              <div className="px-2 py-1">
                {product.name}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </>
  );
}

function ProductList({ brand_id }) {
  const [products, setProducts] = useState([]);

  const fetchProductData = () => {
    fetch("http://localhost:8000/api/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data.data.data);
      });
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  let productsOfBrand = products.filter(product => product.brand_id == brand_id);

  return (
    <>
      <Products products={productsOfBrand} />
    </>
  );
}

function BrandList() {
  const [brands, setBrands] = useState([]);

  const fetchBrandData = () => {
    fetch("http://localhost:8000/api/brands")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBrands(data.data);
      });
  };

  useEffect(() => {
    fetchBrandData();
  }, []);

  // console.log(brands);

  return (
    <>
      {brands.length > 0 ? (
        <div className="">
          {brands.map((brand) => (
            <div key={brand.id}>
              <h3 className="font-semibold capitalize mt-5 mb-3">{brand.name}</h3>
              <ProductList brand_id={brand.id} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </>
  );
}

function App() {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-center text-2xl font-bold mb-5">Katalog Karpet</h1>
      <BrandList />
    </div>
  );
}

export default App;
