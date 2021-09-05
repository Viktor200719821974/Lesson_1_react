import MoviesPage from "../containers/MoviePage";
import HomePage from "../App/HomePage";
import MovieListCard from "../components/MoviePage/MovieListCard";
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
        component: MovieListCard
    }
];
export default routesConfig;
