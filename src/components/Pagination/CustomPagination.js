import Pagination from "@material-ui/lab/Pagination";


const CustomPagination = ({setPage, numOfPages, loading}) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
        console.log(page);
    }
    if(loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
        }}>
            <Pagination count={numOfPages}
                        onChange={(e) => handlePageChange(e.target.textContent)}
                        showFirstButton showLastButton
                        color= "primary"
            />
        </div>
    )
}

export default CustomPagination;