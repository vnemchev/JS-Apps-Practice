import * as api from './api.js';

const endpoints = {
    addLike: '/data/likes',
    getTotal: bookId => `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`,
    hasLiked: (bookId, userId) => `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export async function add(bookId) {
    return api.post(endpoints.addLike, { bookId });
}

export async function getTotal(bookId) {
    return api.get(endpoints.getTotal(bookId));
}

export async function hasLiked(bookId, user) {
    if (user) {
        const userId = user._id;
        const likes = await api.get(endpoints.hasLiked(bookId, userId));

        return likes;
    } else {
        return 0;
    }
}
