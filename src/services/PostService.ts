import axios from "axios";
const PRODUCTS_ENDPOINT = 'http://localhost:3000/posts';

export interface Post {
    id: number,
    title: string,
    author: string,
    content: string,
    published: boolean,
    createdAt: string
}

export interface PostRequest {
    title: string,
    author: string,
    content: string
}

const productApiInstance = axios.create({
    baseURL: PRODUCTS_ENDPOINT
})

export const getPosts = async (): Promise<Post[]> => {
    const response = await productApiInstance.get('/');

    if (response.status !== 200) {
        throw new Error('Error to fetching data');
    }

    const products = response.data;
    return products;
}

export const createPost = async (request: PostRequest): Promise<string> => {
    const response = await productApiInstance.post('/',
        {
            ...request,
            published: true,
            createdAt: new Date().toISOString()
        }
    )

    if (response.status !== 201) {
        throw new Error('Error to create a post');
    }

    const { id } = response.data;

    return id;
}

export const findPostById = async (postId: string) => {
    const response = await productApiInstance.get(`/${postId}`);

    if (response.status !== 200) {
        throw new Error(`Error to find post with id: ${postId}`);
    }

    return response.data;
}
