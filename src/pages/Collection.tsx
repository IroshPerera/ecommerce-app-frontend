import React, { useContext, useEffect, useState } from 'react';
import Search from '../components/Search';
import { ShopContext } from '../components/context/ShopContext';
import Item from '../components/Item';

export const Collection = () => {
  const { products, search } = useContext(ShopContext);
  const [category, setCategory] = useState<string[]>([]);
  const [sortType, setSortType] = useState('relevant');
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const toggleFilter = (value: string) => {
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const applyFilters = () => {
    console.log(products);
    let filtered = [...products];

    if (search) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length) {
      filtered = filtered.filter((product) => category.includes(product.category));
    }

    return filtered;
  };

  const applySorting = (productList: any[]) => {
    switch (sortType) {
      case 'low':
        return [...productList].sort((a, b) => a.price - b.price);
      case 'high':
        return [...productList].sort((a, b) => b.price - a.price);
      default:
        return productList;
    }
  };

  useEffect(() => {
    let filtered = applyFilters();
    console.log(filtered);
    filtered = applySorting(filtered);
    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [category, sortType, products, search]);

  const getPaginatedProducts = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className='max-padd-container !px-0'>
      <div className='flex flex-col sm:flex-row gap-8 mb-16'>
        {/* FILTERS */}
        <div className='min-w-72 bg-primary p-4'>
          <Search />
          <div className='pl-5 py-3 mt-4 bg-white rounded-xl'>
            <h5 className='h5 mb-4'>Categories</h5>
            <div className='flex flex-col gap-2 text-sm font-light'>
              {['Headphones', 'Cameras', 'Mobiles', 'Speakers', 'Mouse', 'Watches'].map((cat) => (
                <label key={cat} className='flex gap-2 medium-14 text-gray-30'>
                  <input
                    onChange={() => toggleFilter(cat)}
                    type='checkbox'
                    checked={category.includes(cat)}
                    value={cat}
                    className='w-3'
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>
          <div className='px-4 py-3 mt-6 bg-white rounded-xl'>
            <h5 className='h5 mb-4'>Sort By</h5>
            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className='border border-slate-900/5  outline-none text-gray-30 medium-14 w-full rounded px-2'
            >
              <option value='relevant'>Relevant</option>
              <option value='low'>Price: Low to High</option>
              <option value='high'>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className='pr-5 rounded-l-xl'>
          <h5 className='text-lg font-semibold mb-4'>Products</h5>
          <div className='pr-5 rounded-l-xl'>
            <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6'>
              {getPaginatedProducts().length > 0 ? (
                getPaginatedProducts().map((product) => <Item product={product} key={product.id} />)
              ) : (
                <p>No products found for selected filters</p>
              )}
            </div>
            {/* PAGINATION */}
          </div>
        </div>
      </div>
    </div>
  );
};

