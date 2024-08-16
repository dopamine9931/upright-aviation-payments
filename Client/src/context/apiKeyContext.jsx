import React, { createContext, useState, useEffect } from 'react';
import { API_API_KEY } from '../constants/endpoints';

export const ApiKeyContext = createContext();

export const ApiKeyProvider = ({ children }) => {
    const [apiKey, setApiKey] = useState('');

    useEffect(() => {
        const fetchApiKey = async() => {
            try {
                const response = await fetch(API_API_KEY)
                if (!response.ok){
                    throw new error(`HTTP error - status: ${response.status}`);
                }
                const data = await response.json();
                setApiKey(data.APIKEY)
                console.log(apiKey);
            } catch (err){
                console.error('Error fetching API key:', err);
            }
        };
        fetchApiKey();
    },[]);

    return (
        <ApiKeyContext.Provider value= {apiKey}>
            {children}
        </ApiKeyContext.Provider>
    );
};