import { createContext, ReactNode } from 'react';
import { products } from '../../assets/data';


export const ShopContext = createContext({ products });

interface ShopContextProviderProps {
  children: ReactNode;
}

const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  return (
    <ShopContext.Provider value={{ products }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;