"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef ()
    const router = useRouter ()
    
const handleSearch = (event) => {    
    const keyword = searchRef.current.value.trim()

    if(!keyword) return

    if(event.key === 'Enter' || event.type === 'click') {
        event.preventDefault()
        const formattedKeyword = keyword.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        router.push(`/search/${formattedKeyword}`)
        }
    }

    return (
        <div className="relative">
            <input placeholder="cari anime..." 
                    className="w-full p-2 rounded"
                    ref={searchRef} onKeyDown={handleSearch} />
            <button className="absolute top-2 end-2" onClick={handleSearch} id="btn">
            <MagnifyingGlass size={22} />
            </button>
        </div>
    )
}

export default InputSearch