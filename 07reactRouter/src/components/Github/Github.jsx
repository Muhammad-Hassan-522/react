import React, { useEffect, useState } from 'react'
// Or:
import { useLoaderData } from 'react-router-dom'

function Github() {
    // Either: 
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Muhammad-Hassan-522')
    //         .then(response => response.json())
    //         .then(response => {
    //             console.table(response)
    //             setData(response)
    //         })
    // }, [])

    // Or:
    const data = useLoaderData()

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

export default Github

// Or:
// can be written in a separate file
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Muhammad-Hassan-522')

    return response.json()
}