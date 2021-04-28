import { TypePost } from '../models/post';
import api from './api';

const urls = {
    getPosts: 'getPosts',
    likePost: 'likePost/',
};

const postApi = {
    getPosts: () => api.get<TypePost[]>(urls.getPosts),
    likePost: (userId: string, postId: string) =>
        api.post<TypePost[]>(urls.likePost + userId + '/' + postId),
};

export default postApi;
