import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './components/context/ShopContext'




createRoot(document.getElementById('root')!).render(

 <BrowserRouter>
    <ShopContextProvider>
    <App />
    </ShopContextProvider>
  </BrowserRouter>

)
