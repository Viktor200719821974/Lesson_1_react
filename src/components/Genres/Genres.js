import axios from "axios";
import {REACT_APP_API_KEY,MAIN_API_GENRES} from "../../constans/constans";
import {useEffect} from "react";
import {Chip} from "@mui/material";

const Genres = ({
                    type,
                    selectedGenres,
                    setSelectedGenres,
                    genres,
                    setGenres,
                    setPage
}) => {
    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
    }
    const handleRemove = (genre) => {
        setSelectedGenres(
        selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
    }
    const fetchGenres = async () => {
        const {data} = await axios(`${MAIN_API_GENRES}${type}/list?api_key=${REACT_APP_API_KEY}&language=en-US`);

        setGenres(data.genres);
    };

    useEffect(()=>{
        fetchGenres();

        return () =>{
            setGenres({});
        };
        // eslint-disable-next-line
    },[]);

    return (

            <div style={{margin: '6px 0'}}>
                {selectedGenres && selectedGenres.map((genre) => (
                    <Chip
                        label={genre.name}
                        style={{margin: 2, color: "white"}}
                        clickable
                        size={'small'}
                        key={genre.id}
                        color={'primary'}
                        onDelete={()=> handleRemove(genre)}
                    />
                ))}
                {genres && genres.map((genre) => (
                    <Chip
                        label={genre.name}
                        style={{margin: 2, color: "white"}}
                        clickable
                        size={'small'}
                        key={genre.id}
                        onClick={()=> handleAdd(genre)}
                    />
                ))}
            </div>
    )
}
export default Genres;