// layout
import LayoutAdmin from '../layout/LayoutAdmin';
import LayoutBasic from '../layout/LayoutBasic';

//pages admin
import AdminHome from '../pages/Admin';
import AdminSignIn from '../pages/Admin/SignIn';

//Pagina error
import Error404NotFound from '../pages/Error404/error404';

//pages client
import Home from '../pages/Home';
import Contact from '../pages/contacto';

const routesAdmin = [
    {
        path: "/admin",
        layout: LayoutAdmin,
        component: AdminHome,
    },
    {
        path: "admin/login",
        layout: LayoutAdmin,
        component: AdminSignIn,
    },
    {
        path:"*",
        layout:LayoutAdmin,
        component: Error404NotFound,
    },
];

const routesClient = [
    { 
        path: "/",
        layout:LayoutBasic,
        component:Home,
    },
    { 
        path: "/contact",
        layout:LayoutBasic ,
        component:Contact,
    }
]

const routes = [...routesAdmin, ...routesClient];
export default routes;
