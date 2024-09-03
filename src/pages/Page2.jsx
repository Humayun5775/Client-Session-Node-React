import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Page2 = () => {
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(' http://localhost:9000/api/page2/page2', { withCredentials: true });
                setData(response.data);
            } catch (error) {
                console.error('Fetch failed', error);
                if (error.response.status === 403) {
                    navigate('/');
                }
            }
        };
        fetchData();
    }, [navigate]);

    return (
        <div>
            <h1>Page 2</h1>
            {data && <p>{data.message}</p>}
        </div>
    );
};

export default Page2;
