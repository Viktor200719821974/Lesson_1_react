import Pagination from "@material-ui/lab/Pagination";


const CustomPagination = ({setPage, numberOfPages, loading}) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
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
            <Pagination count={numberOfPages}
                        onChange={(e) => handlePageChange(e.target.textContent)}
                       hideNextButton
                        hidePrevButton
                        color= "primary"
            />
        </div>
    )
}

export default CustomPagination;