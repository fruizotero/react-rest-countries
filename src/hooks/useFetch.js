/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';


export function useFetch(url) {
    let [data, setData] = useState(null);
    let [isLoading, setIsLoading] = useState(true);
    let [error, setError] = useState(null);

    useEffect(() => {
        const getData = async (url) => {

            try {

                let resp = await fetch(url);

                let { status, statusText } = resp;
                if (!resp.ok)
                    throw { status: status, statusText: statusText || "Ocurrió un error", err: true }

                let json = await resp.json();

                setData(json);
                setIsLoading(false);
                setError({ err: false });
            } catch (error) {
                setIsLoading(false);
                setError(error);
                console.log(error);
            }



        }

        getData(url);

    }, [url]);


    return { data, isLoading, error };
}