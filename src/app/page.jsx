import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeRespons } from "./libs/api-libs"

const Page = async() => {

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  // const topAnime = await response.json()

  const topAnime = await getAnimeRespons("top/anime", "limit=8")

  return (
    <>
    {/* Anime Terpopuler*/}
    <section>
    <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
    <AnimeList api={topAnime}/>
    </section>

    {/* jika mua nambah page */}
    {/* Anime Terbaru*/}
    {/* <section>
    <Header title="Anime Terbaru" linkTitle="Ikuti Sekarang" linkHref="/new" />
    <AnimeList api={topAnime}/>
    </section> */}
    </>
  )
}

export default Page
