import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import unsplash from '../utils/unsplash';

// Array of products for BUY-MARKET
const products = [
  { name: 'Cassava flakes', query: 'cassava flakes', description: 'Crispy and nutritious flakes made from cassava.' },
  { name: 'Maize', query: 'maize', description: 'Fresh, organic maize for various uses.' },
  { name: 'Locust bean', query: 'locust bean', description: 'Rich source of protein, perfect for seasoning.' },
  { name: 'Yam flour', query: 'yam flour', description: 'Premium flour for traditional African delicacies.' },
  { name: 'Plantain', query: 'plantain', description: 'Sweet or unripe plantains, a versatile staple.' },
  { name: 'Millet', query: 'millet', description: 'Gluten-free grains for healthy meals.' },
  { name: 'Onions', query: 'onions', description: 'Fresh onions to enhance any dish.' },
  { name: 'Palm oil', query: 'palm oil', description: 'Premium-grade oil, perfect for cooking.' },
];

// Home component & State for product images, search, and navigation
const Home = () => {
  const [productImages, setProductImages] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Effect hook to fetch product images
  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const images = {};
      for (const product of products) {
        try {
          const result = await unsplash.search.getPhotos({
            query: product.query,
            page: 1,
            perPage: 1,
          });
          if (result.response?.results?.length > 0) {
            images[product.name] = result.response.results[0].urls.small;
          }
        } catch (error) {
          console.error(`Error fetching image for ${product.name}:`, error);
        }
      }
      setProductImages(images); // Update state with the fetched images
      setLoading(false);
    };

    fetchImages();
  }, []);

  // Filter products based on search input
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search input change
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.length > 0) {
      navigate('/products', { state: { searchTerm: term } });
    }
  };

  // Render the component
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Welcome to BUY-MARKET!</h1>
      <p className="text-center mb-4">Explore a wide variety of farm produce and products:</p>
      <input 
        type="search" 
        placeholder="Search products..." 
        className="border p-2 w-full rounded mb-4"
        value={searchTerm}
        onChange={handleSearch}
      />
      {loading ? (
        <p className="text-center">Loading products...</p>
      ) : (

        // Grid of product cards
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {filteredProducts.map((product, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
              {productImages[product.name] ? (
                <img src={productImages[product.name]} alt={product.name} className="w-full h-48 object-cover" />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <p>Image not available</p>
                </div>
              )}
              <div className="p-4">
                <h2 className="font-bold text-lg mb-2">{product.name}</h2>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Link to all products */}
      <Link to="/products" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        View All Products
      </Link>
    </div>
  );
};

export default Home;

