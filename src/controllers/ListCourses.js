import { useState, useEffect, useCallback } from "react";
import axios from "axios";
// Courses with Api
export default function  ListCourses (offset, limit)  {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [list, setList] = useState([]);
    const [hasMore, setHasMore] = useState(false)
    
    const sendQuery = useCallback(async () => {
        let jwt = localStorage.getItem('userToken');
        try {
            const res = await axios.get(
                process.env.REACT_APP_ADMIN_API_URL + "/courses?offset="+offset+"&limit="+limit,
                {
                    "headers": {
                        "Authorization": "Bearer " + jwt
                    }
                }
            );
            setList((prev) => [...prev, ...res.data.data]);
            setLoading(false);
            if (res.data.data.length < 3) {
                setHasMore(false)
            }
            else {
                setHasMore(true)
            }
        } catch (err) {
          setError(err);
          throw error;
        }
      }, [offset, error, limit]);
    
      useEffect(() => {
        sendQuery();
      }, [offset, sendQuery]);
      return { loading, error, list, hasMore };
};