import * as api from './api.js';

const endpoints = {
    getOne: '/data/cars/',
    getAll: '/data/cars?sortBy=_createdOn%20desc',
    create: '/data/cars',
    delete: '/data/cars/',
    edit: '/data/cars/',
    getOwn: userId => `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    search: query => `/data/cars?where=year%3D${query}`,
};

export function getAll() {
    return api.get(endpoints.getAll);
}

export function getOne(id) {
    return api.get(endpoints.getOne + id);
}

export function create(data) {
    return api.post(endpoints.create, data);
}

export function remove(id) {
    return api.del(endpoints.delete + id);
}

export function edit(id, data) {
    return api.put(endpoints.edit + id, data);
}

export function getOwn(userId) {
    return api.get(endpoints.getOwn(userId));
}

export function search(query) {
    return api.get(endpoints.search(query));
}
