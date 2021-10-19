import axios from "axios";
// List products with Api
export let singleControl = async (offset, limit, path, path_type="", path_id="") => {
   
    const paths_type = (path_type)?'&'+path_type+'='+path_id : '';
    const user = JSON.parse(localStorage.getItem('user'));
    let jwt = localStorage.getItem('userToken');
    try {
        const res = await axios.get(
            process.env.REACT_APP_ADMIN_API_URL + "/"+ path + "?offset="+offset+"&limit="+limit+paths_type+"&user_id="+user.id,
            {
                "headers": {
                    "Authorization": "Bearer " + jwt
                }
            }
        );
        return res.data.data;
    } catch (err) {
        throw err;
    }
};