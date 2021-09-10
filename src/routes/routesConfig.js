import MoviesPage from "../containers/MoviePage";
import HomePage from "../App/HomePage";
import MovieListCard from "../components/MoviePage/MovieListCard";
import {GenreBadge} from "../components/GenreBadge/GenreBadge";
import GenresMovie from "../components/GenreBadge/GenresMovie";
import UserInfoPage from "../containers/MoviePage/UserInfo";
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
        path:'/GenreBadge',
        exact: true,
        component: GenreBadge
    },
    {
        path:'/GenresMovie',
        exact: true,
        component: GenresMovie
    },
    {
        path:'/UserInfo',
        exact: true,
        component: UserInfoPage
    }
];
export default routesConfig;