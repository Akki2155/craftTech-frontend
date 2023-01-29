import './App.css';
import Header from './component/Header/Header.js';
import Home from './Pages/Home/Home.js';
import Footer from './component/Footer/Footer.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from 'react-router-dom';
import Products from './Pages/Shop/Products';
import ProductDetails from './Pages/ProductDetails/ProductDetails'

function AppRoutes() {
  const routes = useRoutes(
    [
      {path:'/', element:<Home/>},
      {path:'/shop',element:<Products/>},
      {path:'/product/:id',element:<ProductDetails/>}
    ]
  )
  return routes;
}

function App() {
  return (
    <div>
       <Router>
          <Header/>
          <AppRoutes />
          <Footer/>
        </Router>
   </div>
  );
}

export default App;
