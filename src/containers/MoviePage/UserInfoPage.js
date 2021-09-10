import {useSelector} from "react-redux";

const UserInfoPage = ()=>{
    const storeData = useSelector(state => state.userInfo);
    return (
        <div>
            <h1>Favorite Page</h1>
        </div>
    )
}
export default UserInfoPage;