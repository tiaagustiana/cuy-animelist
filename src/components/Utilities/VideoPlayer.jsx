"use client"

import { XSquare } from "@phosphor-icons/react"
import { useState } from "react"
import YouTube from "react-youtube"


const VideoPlayer = ({ youtubeId }) => {
    const option = {
        width: "300",
        height: "250"
    }
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const Player = () => {
        return (
        <div className="fixed bottom-3 right-3">
            <button onClick={handleVideoPlayer} className="text-color-primary bg-color-dark float-right mb-1 hover:text-color-accent transition-all">
            <XSquare size={32}/>
            </button>
            <YouTube 
                videoId={youtubeId} 
                onReady={(event) => event.target.pauseVideo } 
                opts={option} 
                onError={() => alert("Trailer ini error!")}
                />
        </div>
        )
    }

    const ButtonOpenPlayer = () => {
        return (
            <div className="">
                <button onClick={handleVideoPlayer} 
                    className="rounded fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl">
                    Tonton Trailer 
                </button>
            </div>
            )
    }
    return isOpen ? <Player /> : <ButtonOpenPlayer/>
}

export default VideoPlayer