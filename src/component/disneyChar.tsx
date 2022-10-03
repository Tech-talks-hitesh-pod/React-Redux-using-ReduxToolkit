import { useGetDisneyByIdQuery } from "../services/disneyApi"
import React, { useState } from 'react'
import { Space } from "antd"
import Search from "antd/lib/input/Search"

export function Disney() {
    const [id,setid] = React.useState("")
    

    const onSearch = ( s: string)=> {
        setid(s)
        console.log(s)
    }
    const { data, error, isLoading } = useGetDisneyByIdQuery(id)

    return (
        <div>
            {/* <div><input type={"text"}><button onClick={searchChar}>Search</button></input></div> */}
            <Space direction="vertical">
                    <Search placeholder="input search text" onSearch={onSearch} enterButton />
            </Space>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <h3>{data.name}</h3>
                    <img src={data.imageUrl} alt={data.name} />
                    <h4>{data.films}</h4>
                    <h4>{data.tvShows}</h4>
                </>
            ) : null}

        </div>
    )
}


