import { useEffect, useState } from 'react'
import twitterAvi from '../assets/twitter-avi.png'
import axios from 'axios'

export const TweetList = () => {
    
    const [ tweet, setTweet ] = useState([])

    const getData = async () => {
        try {
            const response = await axios.get('http://localhost:2000/tweets?_sort=id&_order=desc')
            // console.log(response.data);
            setTweet(response.data)
            console.log(tweet);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <div className="divide-y">

            {tweet.map((item) => {
                return (
                    <div className="flex py-5 pl-6 pr-28">
                                        <div>
                    <img src={twitterAvi} alt="" className="h-10 mt-0.5 rounded-full"/>
                </div>
                <div className="flex-grow">
                    <div className="flex flex-wrap flex-grow pl-5">
                        <span className="text-sm font-bold">{item.name}</span>
                        <span className="ml-2 text-sm text-gray-600">{item.email}</span>
                        <p className="w-full mt-1 text-sm">{item.tweet}</p>
                    </div>
                    <div className="flex justify-between pl-5 mt-3.5">
                        <i className="text-gray-500 ri-chat-3-line"></i>
                        <i className="text-gray-500 ri-repeat-line"></i>
                        <i className="text-gray-500 ri-heart-line"></i>
                        <i className="text-gray-500 ri-bar-chart-line"></i>
                        <i className="text-gray-500 ri-upload-line"></i>
                    </div>
                </div>
                    

                    </div>
                )
            })}
        </div>
    )
}