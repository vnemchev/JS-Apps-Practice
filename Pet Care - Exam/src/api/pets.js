import * as api from './api.js';

const endpoints = {
    getOne: '/data/pets/',
    getAll: '/data/pets?sortBy=_createdOn%20desc&distinct=name',
    create: '/data/pets',
    edit: '/data/pets/',
    delete: '/data/pets/',
    donate: '/data/donation',
    getDonations: petId => `/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`,
    hasDonated: (petId, userId) =>
        `/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
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

export function donate(petId) {
    return api.post(endpoints.donate, { petId });
}

export function getDonations(petId) {
    return api.get(endpoints.getDonations(petId));
}

export function hasDonated(petId, userId) {
    return api.get(endpoints.hasDonated(petId, userId));
}
