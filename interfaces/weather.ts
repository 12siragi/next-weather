export default interface WeatherData {
    main: {
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    weather: {
        icon: string;
        description: string;
    }[];
}

