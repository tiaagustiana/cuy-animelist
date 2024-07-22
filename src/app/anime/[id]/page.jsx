import { getAnimeRespons } from "@/app/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"

const Page = async ({ params: { id } }) => {
    const anime = await getAnimeRespons(`anime/${id}`)

    return (
        <>
        <div className="pt-4 px-4">
        <h3 className=" text-color-primary text-2xl">{anime.data.title} - {anime.data.year}</h3>
        </div>
        <div className="pt-4 px-4 flex gap-2 text-color-primary text-xl overflow-x-auto">
            <div className="w-36 flex flex-col justify-center text-color-accent items-center border-solid border-2 rounded-lg p-2">
                <h3>PERINGKAT</h3>
                <p>{anime.data.rank}</p>
            </div>
            <div className="w-36 flex flex-col justify-center text-color-accent items-center border-solid border-2 rounded-lg p-2">
                <h3>SKOR</h3>
                <p>{anime.data.score}</p>
            </div>
            <div className="w-36 flex flex-col justify-center text-color-accent items-center border-solid border-2 rounded-lg p-2">
                <h3>POPULARITAS</h3>
                <p>{anime.data.popularity}</p>
            </div>
            <div className="w-36 flex flex-col justify-center text-color-accent items-center border-solid border-2 rounded-lg p-2">
                <h3>FAVORIT</h3>
                <p>{anime.data.favorites}</p>
            </div>
            <div className="w-36 flex flex-col justify-center text-color-accent items-center border-solid border-2 rounded-lg p-2">
                <h3>EPISODE</h3>
                <p>{anime.data.episodes}</p>
            </div>
            <div className="w-36 flex flex-col justify-center text-color-accent items-center border-solid border-2 rounded-lg p-2">
                <h3>ANGGOTA</h3>
                <p>{anime.data.members}</p>
            </div>
        </div>
        <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
            <Image src={anime.data.images.webp.image_url} 
                    alt={anime.data.images.jpg.image_url}
                    width={250}
                    height={250}
                    className="w-full rounded object-cover"
            />
            <div className="indent-8">
            <h3 className="text-center sm:text-4xl text-2xl text-color-accent underline underline-offset-8 pb-6 pt-6">SINOPSIS</h3>
            <p className="text-justify text-xl">{anime.data.synopsis}</p>
            </div>
        </div>
        <div>
            <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
        </div>
        </>
    )
}

export default Page