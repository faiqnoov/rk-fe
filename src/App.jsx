import { useState, useEffect } from "react";

function Products({ products }) {
  return (
    <>
      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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

function ProductList() {
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

  let brand1 = products.filter(product => product.brand_id == 1);
  let brand2 = products.filter(product => product.brand_id == 2);

  return (
    <>
      <h2 className="font-semibold mb-3">Moderno</h2>
      <Products products={brand1} />
      <h2 className="font-semibold mb-3 mt-6">Paris</h2>
      <Products products={brand2} />
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

  console.log(brands);

  return (
    <>
      <h2 className="font-semibold mb-3">Merek</h2>
      {brands.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
          {brands.map((brand) => (
            <div key={brand.id} className="rounded shadow overflow-hidden">
              <div className="flex justify-center items-center p-1 capitalize">
                {brand.name}
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

function App() {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-center text-2xl font-bold mb-5">Katalog Karpet</h1>
      <BrandList />
      <ProductList />      
    </div>
  );
}

export default App;
