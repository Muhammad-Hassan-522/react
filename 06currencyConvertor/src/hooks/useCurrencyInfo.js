// hooks generally return js so make their extensions only .js or .ts

import { useEffect, useState } from "react";

// useEffect begins to work as soon as the lifecycle of component triggers 

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    // fetch will be callled automatically, we don't have to make another function inside this useCurrencyInfo function
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((response) => response.json()) // to convert the api returned string to object (most apis return strings)
            .then((response) => setData(response[currency])) // saving the data based on key(currency) into data
    }, [currency]) // our data changes as the value of currency changes, when currency changes call the function again means currency is our dependency so add it in the dependency array

    console.table(data)

    return data;
}

export default useCurrencyInfo;