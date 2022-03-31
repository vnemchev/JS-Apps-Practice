import * as api from './api.js';

const endpoints = {
    getAll: gameId => `/data/comments?where=gameId%3D%22${gameId}%22`,
    create: '/data/comments',
};

export function getAll(gameId) {
    return api.get(endpoints.getAll(gameId));
}

export function create(data) {
    return api.post(endpoints.create, data);
}
