import * as api from './api.js';

const endpoints = {
    getOne: '/data/theaters/',
    getAll: '/data/theaters?sortBy=_createdOn%20desc&distinct=title',
    getOwn: id => `/data/theaters?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`,
    create: '/data/theaters',
    edit: '/data/theaters/',
    delete: '/data/theaters/',
    like: '/data/likes',
    getLikes: theaterId => `/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`,
    hasLiked: (theaterId, userId) =>
        `/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export function getOne(id) {
    return api.get(endpoints.getOne + id);
}

export function getOwn(id) {
    return api.get(endpoints.getOwn(id));
}

export function getAll() {
    return api.get(endpoints.getAll);
}

export function create(data) {
    return api.post(endpoints.create, data);
}

export function edit(id, data) {
    return api.put(endpoints.edit + id, data);
}

export function remove(id) {
    return api.del(endpoints.delete + id);
}

export function like(data) {
    return api.post(endpoints.like, { data });
}

export function getLikes(id) {
    return api.get(endpoints.getLikes(id));
}

export function hasLiked(theaterId, userId) {
    return api.get(endpoints.hasLiked(theaterId, userId));
}
