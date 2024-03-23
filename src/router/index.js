// import { headeronly } from '~/component/Layout';
import Home from '~/Pages/Home';
import Products from '~/Pages/Products';
import Profile from '~/Pages/Profile';
import Login from '~/Pages/Login';




const publicRoutes = [
    {path : '/', components : Home},
    {path : '/Products', components : Products},
    {path : '/profile', components : Profile},
    {path : '/login', components : Login},
   





];
const privateRoutes = []
export {publicRoutes, privateRoutes} 