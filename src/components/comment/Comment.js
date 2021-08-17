export function Comment({item, chooseComment, comment}){
    const onClickComment = () => {
        chooseComment(item.id);
    }
    return (
        <div >
            <h3>{item.postId}. {item.id}. {item.name}</h3>
            <p>{item.email}</p>

            <div>
                {comment.body}
            </div>
            <div>

                <button onClick={onClickComment}>details</button>
            </div>
        </div>
    )
}