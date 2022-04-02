import * as api from './requester.js';

const endpoints = {
    getAll: '/data/memes?sortBy=_createdOn%20desc',
    create: '/data/memes',
    getOne: '/data/memes/',
    delete: '/data/memes/',
    edit: '/data/memes/',
    getOwn: userId => `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
};

export function getAll() {
    return api.get(endpoints.getAll);
}

export function create(data) {
    return api.post(endpoints.create, data);
}

export function getOne(memeId) {
    return api.get(endpoints.getOne + memeId);
}

export function remove(memeId) {
    return api.del(endpoints.delete + memeId);
}

export function edit(memeId, data) {
    return api.put(endpoints.edit + memeId, data);
}

export function getOwn(userId) {
    return api.get(endpoints.getOwn(userId));
}
