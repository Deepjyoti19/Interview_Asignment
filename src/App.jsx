import { useState } from "react";
import "./App.css";

const products = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "Smartphone", category: "Electronics" },
  { id: 3, name: "T-Shirt", category: "Clothing" },
  { id: 4, name: "Headphones", category: "Electronics" },
  { id: 5, name: "Shoes", category: "Clothing" },
];

export default function ProductFilter() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <h2 >Product Filter</h2>
      <select
        
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
      </select>
      <ul>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id} className="mb-2">
              {product.name} ({product.category})
            </li>
          ))
        ) : (
          <p >No products found</p>
        )}
      </ul>
    </div>
  );
}
