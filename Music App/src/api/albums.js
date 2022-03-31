import * as api from './api.js';

const endpoints = {
    getOne: '/data/albums/',
    getAll: '/data/albums?sortBy=_createdOn%20desc&distinct=name',
    create: '/data/albums',
    delete: '/data/albums/',
    edit: '/data/albums/',
    search: query => `/data/albums?where=name%20LIKE%20%22${query}%22`,
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

export function search(query) {
    return api.get(endpoints.search(query));
}
