import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

function Thumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="text-center p-2 group cursor-pointer mt-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-30">
        <Image
            layout="responsive"
            src={
              `${BASE_URL}${result.backdrop_path || 
                result.poster_path}`
              || 
              `${BASE_URL}${result.poster_path}` 
            }
            height={1080}
            width={1920}
            alt="poster"
        />

        <div className="p-2">
          <div className="flex justify-center">
          <p className="truncate max-w-md font-medium">{result.overview}</p>
          </div>
          <h2 className="font-bold text-2xl mt-1 transition-all-duration-100 ease-in-out group-hover:font-extrabold">
            {result.title || result.original_name}
          </h2> 
          <p className="justify-center flex items-center opacity-0 group-hover:opacity-100">
            {result.media_type && `${result.media_type} 🔥`}{" "}
            {result.release_date || result.first_air_date} 🔥{" "}
            <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
          </p>
        </div>
    </div>
  );
}

export default Thumbnail;