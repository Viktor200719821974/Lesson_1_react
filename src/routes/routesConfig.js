import MoviesPage from "../containers/MoviePage";
import HomePage from "../components/HomePage/HomePage";
import MovieListCard from "../components/MoviePage/MovieListCard";
import UserInfoPage from "../components/UserInfo/UserInfo";
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
    },
    {
        path:'/UserInfo',
        exact: true,
        component: UserInfoPage
    }
];
export default routesConfig;
