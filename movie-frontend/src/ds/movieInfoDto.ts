/*
    Integer id,
        String title,
        String actors,
        String genre,
        String description,
        LocalDate releaseDate,
        String director,
        String imageUrl
*/
export type MovieInfoDto = {
    id: number,
    title: string,
    actors: string,
    genre: string,
    description: string,
    releaseDate: Date,
    director: string,
    imageUrl: string
}

