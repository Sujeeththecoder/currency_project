import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
                if (!response.ok) {
                    throw new Error('Failed to fetch currency data');
                }
                const jsonData = await response.json();
                setData(jsonData[currency]);
            } catch (error) {
                console.error('Error fetching currency data:', error);
            }
        };

        fetchData();
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
