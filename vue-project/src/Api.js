import posts from './mocks/posts.json'

export default class Api {
    async getPosts() {
        return new Promise((resolve) => resolve(posts))
    }
}
