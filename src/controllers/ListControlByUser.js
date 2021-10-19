import { useState, useEffect, useCallback } from "react";
import axios from "axios";
// List products with Api
export default function  ListControlByUser (offset, limit, path, path_type="", path_id="")  {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [list, setList] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const paths_type = (path_type)?'&'+path_type+'='+path_id : '';
    const user = JSON.parse(localStorage.getItem('user'));
    const sendQuery = useCallback(async () => {
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
            setList((prev) => [...prev, ...res.data.data]);
            setLoading(false);
            if (res.data.data.length < limit) {
                setHasMore(false)
            }
            else {
                setHasMore(true)
            }
        } catch (err) {
          setError(err);
          throw error;
        }
      }, [offset, error, limit, path, paths_type]);
    
      useEffect(() => {
        sendQuery();
      }, [offset, sendQuery]);
      return { loading, error, list, hasMore };
};