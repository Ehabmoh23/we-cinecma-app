import { OriginalMovie } from "./originalMovie";

export interface searchMovies {
    page: number,
    results: OriginalMovie[],
    total_pages: Number,
    total_results: number
}
