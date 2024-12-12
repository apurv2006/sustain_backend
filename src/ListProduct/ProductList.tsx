import React, { useState, useEffect, ChangeEvent } from "react";

interface Product {
  product_id: number;
  business_id: number;
  name: string;
  description: string;
  price: number;
  eco_credit_cost: number;
  stock_quantity: number;
  image_url: string;
  created_at: string;
  updated_at: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); // Original data
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Data to display
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>(""); // State for search bar input

  // Fetch all products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Product[] = await response.json();
        setProducts(data);
        setFilteredProducts(data); // Initialize the displayed products
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products.");
      }
    };

    fetchProducts();
  }, []);

  // Handle real-time search input changes
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        (product.description && product.description.toLowerCase().includes(query))
    );

    setFilteredProducts(filtered);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {/* Search Bar Section */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by name or description..."
          value={searchQuery}
          onChange={handleSearch}
          style={{
            padding: "10px",
            width: "100%",
            maxWidth: "600px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      {/* Product List Section */}
      <h1>Product List</h1>
      {filteredProducts.length > 0 ? (
        <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Business ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Eco Credit Cost</th>
              <th>Stock Quantity</th>
              <th>Image URL</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.product_id}>
                <td>{product.product_id}</td>
                <td>{product.business_id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.eco_credit_cost}</td>
                <td>{product.stock_quantity}</td>
                <td>
                  <a href={product.image_url} target="_blank" rel="noopener noreferrer">
                    View Image
                  </a>
                </td>
                <td>{new Date(product.created_at).toLocaleString()}</td>
                <td>{new Date(product.updated_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No products match your search query or are available.</p>
      )}
    </div>
  );
};

export default ProductList;
