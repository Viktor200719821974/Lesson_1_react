import MoviesPage from "../containers/MoviePage";
import HomePage from "../App/HomePage";
const routesConfig = [
    {
        path:'/',
        exact: true,
        component: HomePage
    },
    {
        path:'/MoviesPage',
        exact: false,
        component: MoviesPage
    },
    {
        // path:'*',
        // exact: true,
        // component: MoviesPage
    }
];
export default routesConfig;
