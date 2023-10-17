import { useState } from 'react'
import twitterAvi from '../assets/twitter-avi.png'
import { TweetList } from './tweetList'
import axios from 'axios'
import { useSelector } from 'react-redux'

export const Timeline = () => {
    
    const [ inputValue, setInputValue ] = useState("");

    const user = useSelector((state) => state.user.value)

    const onTweet = async () => {
        try {
            const input = { name: user.name, email: user.email, tweet: inputValue }
            await axios.post('http://localhost:2000/tweets', input)
            console.log(input);
        } catch (err) {
            console.log(err);
        }
    }

    const handleChange = (e) => {
        const {value} = e.target

        if (value.length <= 50) {
            setInputValue(value)
        }
    }


    return (
        <div className="col-span-2 divide-y">
            <div className="py-4 px-6">
                <h3 className="text-xl font-bold">Home</h3>
            </div>
            {/* FOR TWEETING */}
            <div className="flex pt-4 pb-2 px-6">
                <div>
                   <img src={twitterAvi} alt="" className="flex justify-center items-center h-10 rounded-full"/>
                </div>
                <div className="flex flex-grow flex-wrap justify-between pl-5">
                    <textarea 
                        onChange={handleChange}
                        value={inputValue}
                        type="text" 
                        id="large-input" 
                        placeholder="Write your thoughts here..."
                        className="block w-full p-3 mb-2 text-gray-600 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:outline-sky-500"
                    />
                    <div className="radial-progress text-primary" style={{"--value":70, "--size": "26px"}}>70%</div>
                    <button
                        onClick={onTweet}
                        type="button"
                        className="flex justify-center items-center text-white bg-sky-500 hover:bg-sky-600 focus:ring-1 font-medium rounded-full text-sm px-5 py-2 mt-2 mb-2"             
                    >
                        Post
                    </button>
                </div>
            </div>
            {/* for tweet list */}
            <TweetList/>
        </div>
    )
}