
export function Post({item, choosePost,post}){
    const onClickPost = () => {
        choosePost(item.id);
    }

    return (
        <div >
               <h3>{item.userId}. {item.id}. {item.title}</h3>
            <div>

                <button onClick={onClickPost}>details</button>
            </div>
            <div>
                {post.body}
            </div>

        </div>
    )
}