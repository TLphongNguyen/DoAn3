// import { headeronly } from '~/component/Layout';
import Home from '~/Pages/Home';
import Products from '~/Pages/Products';
import Profile from '~/Pages/Profile';





const publicRoutes = [
    {path : '/', components : Home},
    {path : '/Products', components : Products},
    {path : '/profile', components : Profile},
   





];
const privateRoutes = []
export {publicRoutes, privateRoutes} 