import { libraryApi } from '../../../shared/api'

export const AuthorService = {
  async getAuthorInfo(authorId: string) {
    return libraryApi.get(`authors/${authorId}.json`)
  },
}
