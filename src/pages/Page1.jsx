import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Page1 = () => {
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(' http://localhost:9000/api/page1/page', { withCredentials: true });
                // const response = await axios.get(' http://172.16.209.1:9000/api/page1/page', { withCredentials: true, 
                //     headers: {
                     
                //       'Content-Type': 'application/json', // Example header to specify the response format
                //     } });
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
            <h1>Page 1</h1>
            {data && <p>{data.message}</p>}
        </div>
    );
};

export default Page1;
