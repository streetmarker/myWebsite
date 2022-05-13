import axios from 'axios'
/* eslint-disable */
const url = 'api/posts/';

class PostService {
    static getPosts() {
        return new Promise(async(resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post =>({
                        ...post,
                        createAt: new Date(post.createdAt)
                    }))
                )
            } catch (error) {
                reject(error);
            }
        })
    };
// create a new
    static insertPost(text) {
        return axios.post(url, {
            text
        });
    };
    //delete a post
    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default PostService;