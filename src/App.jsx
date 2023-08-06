import { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  const fetchUserData = () => {
    fetch("http://localhost:8000/api/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data.data.data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  console.log(products);

  let cat1 = products.filter(product => product.category_id == 1);

  return (
    <>
      {products.length > 0 ? (
        <div className="grid grid-cols-3 gap-3">
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

function App() {
  return (
    <div className="container mx-auto px-10 py-20">
      <h1 className="text-center text-2xl font-bold mb-5">Katalog Karpet</h1>

      <Products />
    </div>
  );
}

export default App;
