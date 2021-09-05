import MoviesPage from "../containers/MoviePage";
import HomePage from "../App/HomePage";
import MovieList from "../components/MoviePage/MovieList";
const routesConfig = [
    {
        path:'/',
        exact: true,
        component: HomePage
    },
    {
        path:'/MoviesPage',
        exact: true,
        component: MoviesPage
    },
    {
        path:'/MoviesPage/:id',
        exact: true,
        component: MovieList
    }
];
export default routesConfig;
