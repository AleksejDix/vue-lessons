import category from '@/api/repos/categories'
import genre from '@/api/repos/genre'
import movie from '@/api/repos/movie'
import movieCategory from '@/api/repos/movieCategory'
import movieVideos from '@/api/repos/movieVideos'
import movieCredits from '@/api/repos/movieCredits'
import movieDiscover from '@/api/repos/movieDiscover'
import person from '@/api/repos/person'
import personMovies from '@/api/repos/personMovies'
import personImages from '@/api/repos/personImages'

const api = {
  category,
  movie,
  genre,
  movieCategory,
  movieDiscover,
  movieCredits,
  movieVideos,
  person,
  personMovies,
  personImages
}

export default api
