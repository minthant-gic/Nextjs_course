'use client'
import React from "react";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const Home = () => {
    const getAllTodos = async () => {
        const res = await axios.get('https://api.api-onepiece.com/characters')
        return res.data;
    }

    const {data:todos,isLoading,isError,isSuccess} = useQuery({
        queryKey : ['get','todos'],
        queryFn : getAllTodos,
    })
    return (
        <div>
            {isSuccess && todos.map(todo =>{
                    return <li>{todo.french_name} - {todo.job}</li>
                })
            }
        </div>
    )
}

export default Home;