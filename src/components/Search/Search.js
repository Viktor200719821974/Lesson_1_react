import React, {useEffect, useState} from "react";
import {MAIN_API_SEARCH, REACT_APP_API_KEY} from "../../constans/constans";
import {Tabs, TextField, ThemeProvider, Tab , Button} from "@mui/material";
import { createTheme } from '@material-ui/core/styles';
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import SingleContent from "../SingleContent/SingleContent";
import CustomPagination from "../Pagination/CustomPagination";

const Favorite = () => {

    const [type, setType] = useState(0);
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
            primary: {
                main: "#fff",
            }
        }
    })
  const fetchSearch = async () => {
        try {
            const {data} = await axios(`${MAIN_API_SEARCH}${type ? "tv" : "movie"}?api_key=${REACT_APP_API_KEY}&language=en-US &query=${
                searchText}&page=${page}&include_adult=false`);

            setContent(data.results);
            setNumOfPages(data.total_pages);
        }catch (error) {
            console.error(error);
        }
  };

    useEffect(() => {
        window.scroll(0,0);
        fetchSearch();
        // eslint-disable-next-line
    },[type,page]);
    return (
       <>
            <ThemeProvider theme={darkTheme}>
            <div style={{display: "flex", margin: "15px 0"}}>
            <TextField
                style={{flex: 1}}
                className={'searchBox'}
                label={'Search'}
                variant={'filled'}
                onChange={(e) => setSearchText(e.target.value)}
                />
                <Button
                    variant={'contained'}
                    style={{marginLeft: 10}}
                    onClick={fetchSearch}>
                <SearchIcon />
                </Button>
                </div>
                <Tabs
                    value={type}
                    indicatorColor={'primary'}
                    textColor={'primary'}
                    onChange={(e,newValue)=>{
                    setType(newValue);
                    setPage(1);
                }}
                    style={{paddingBottom: 5}}
                >
                    <Tab style={{width: "50%"}} label={'Search Movies'}/>
                    <Tab style={{width: "50%"}} label={'Search TV Series'}/>
                </Tabs>
        </ThemeProvider>

           <div className="trending">
               {content &&
               content.map((c) => (
                   <SingleContent
                       key={c.id}
                       id={c.id}
                       poster={c.poster_path}
                       title={c.title || c.name}
                       date={c.first_air_date || c.release_date}
                       media_type={type ? "tv" : "movie"}
                       vote_average={c.vote_average}
                   />
               ))}

               { searchText &&  !content && (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}

               {numOfPages > 1 && (<CustomPagination setPage={setPage} numOfPages={numOfPages}/>)}
       </div>

                </>
                )
}

export default Favorite;