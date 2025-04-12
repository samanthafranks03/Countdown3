import React from 'react'
import Input from './Input';

function Layout(){
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const [weatherData, setWeatherData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const baseURL = new URL("https://api.openweathermap.org/data/3.0/onecall");

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                baseURL.searchParams.append();
                baseURL.searchParams.append();
                baseURL.searchParams.append();

                const response = await fetch(baseURL);
                const data = await response.json();

                setWeatherData(data);
                setIsLoading(false);
            }
            catch (err){
                console.error("Error occured while getting weather data:", err);
                setError(err.message);
                setIsLoading(false);
            }
        };
        fetchWeatherData();
    }, []);

    if (isLoading) {
        return (
            <>
            <p>Loading ...</p>
            </>
        );
    }

    if (error) {
        return (
            <>
            <p>{error}</p>
            </>
        );
    }

    return (
        <>
            <Input />
        </>
    );

}

export default Layout;