import CityData from "@/interfaces/city"; // Assuming CityData is defined in your interfaces
import { NextApiRequest, NextApiResponse } from "next";
import cities from '@/lib/city.list.json'; // Ensure this path is correct
const Cities = cities as CityData[];
const NUM_SUGGESTIONS = 5;

// Function to search cities
function searchCities(value: string): CityData[] {
    return Cities.filter(city =>
        city.name.toLowerCase().startsWith(value.toLowerCase())
    ).slice(0, NUM_SUGGESTIONS);
}

// API handler function
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { name } = req.query; // Extract the dynamic name from query

    // Ensure name is a string
    const cityName = Array.isArray(name) ? name.join('') : name;

    // Search for cities matching the name
    const filteredCities = cityName ? searchCities(cityName) : [];

    // Return the filtered list of cities as JSON
    return res.json({
        cities: filteredCities
    });
}

