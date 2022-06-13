import useSwr from "swr";
import { fetcher } from "./shared.service";

export function useKanji(kanji : string){
    const {data , error} = useSwr(`https://kanjiapi.dev/v1/kanji/${kanji}`,fetcher);
    if(error){
        console.log(error);
        return null;
    }
    return data;
}
