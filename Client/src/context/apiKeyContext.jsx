import React, { createContext, useState, useEffect } from 'react';

export const ApiKeyContext = createContext();

export const ApiKeyProvider = ({ children }) => {
    const [apiKey, setApiKey] = useState('');

    useEffect(() => {
        const fetchApiKey = async() => {
            try {
                const response = await fetch()
            }
        }
    })
}