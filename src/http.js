import fetch from 'node-fetch'
import { resolve } from 'url';

const host = 'http://295uq99495.wicp.vip' //后端地址

export function loadData(path) {
    const url = `${host}${path}`
    return fetch(url, {
            method: 'POST',
            mode: 'cors',
        })
        .then(response => response.json())
        .then((data) => {
            return data.data
        })
}

export async function saveData(path, body) {
    const url = `${host}${path}`
    const result = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        })
        .then(response => response.json())
    return result
}

export function deleteData(path, entity) {
    return fetch(`${host}${path}`, {
            method: 'POST',
            body: JSON.stringify(entity),
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        })
        .then(response => response.json())
}

export function joinQuery(query) {
    if (!query) return '';
    return Object.keys(query)
        .filter(key => query[key] !== '')
        .map(key => `${key} = ${encodeURIComponent(query[key])}`)
        .join('&')
}