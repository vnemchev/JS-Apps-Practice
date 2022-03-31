import * as api from './api.js';

const endpoints = {
    getOne: '/data/books/',
    getAll: '/data/books?sortBy=_createdOn%20desc',
    create: '/data/books',
    edit: '/data/books/',
    delete: '/data/books/',
    getOwn: userId => `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
};

export function getOne(id) {
    return api.get(endpoints.getOne + id);
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

export function getOwn(userId) {
    return api.get(endpoints.getOwn(userId));
}
