import { useState, useEffect } from "react";
import localRates from "./rates.json";

const API_URL =
    "https://api.currencyapi.com/v3/latest?base_currency=PLN&apikey=cur_live_fhalEG7A7lsua67LMKGjXMsxcNibZJZXhvjKv7TZ";

export const useRates = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
        data: null,
        error: null,
        date: null,
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
                const json = await response.json();

                const data = {};
                Object.keys(json.data).forEach((key) => {
                    data[key] = json.data[key].value;
                });

                setRatesData({
                    status: "success",
                    data,
                    error: null,
                    date: new Date().toLocaleDateString(),
                });
            } catch (err) {
                setRatesData({
                    status: "error",
                    data: localRates,
                    error: err.message,
                    date: new Date().toLocaleDateString(),
                });
            }
        };

        const timer = setTimeout(fetchRates, 1000);
        return () => clearTimeout(timer);
    }, []);

    return ratesData;
};
