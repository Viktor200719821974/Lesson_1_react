export function Comment({item, chooseComment}){
    const  onClickComment = () => {
        chooseComment(item.id);
    }
    return (

        <div >
            {/*<h3>{item.postId}. {item.id}. {item.name}</h3>*/}
            {/*<p>{item.email}</p>*/}


            <div>

                <button onClick={onClickComment}>details</button>
            </div>
        </div>
    )
}