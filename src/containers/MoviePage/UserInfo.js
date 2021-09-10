import {useSelector} from "react-redux";

const UserInfo = ()=>{
    const storeData = useSelector(state => state.userInfo);
    console.log(storeData);
    return (
        <div>
            <h1>Favorite Page</h1>
        </div>
    )
}
export default UserInfo;