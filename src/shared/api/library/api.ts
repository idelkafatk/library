import axios from 'axios'

export const libraryApi = axios.create({
  baseURL: 'https://openlibrary.org/',
})
