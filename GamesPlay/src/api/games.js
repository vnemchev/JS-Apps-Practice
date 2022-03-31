import * as api from './api.js';

const endpoints = {
    getOne: '/data/games/',
    getRecent: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    getAll: '/data/games?sortBy=_createdOn%20desc',
    create: '/data/games',
    edit: '/data/games/',
    delete: '/data/games/',
};

export function getRecent() {
    return api.get(endpoints.getRecent);
}

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
