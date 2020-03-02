import fetch from 'node-fetch'
import { resolve } from 'url';

const host = '127.0.0.1' //后端地址

module.export = {
    loadData(path) {
        const url = `${host}${path}`
        return fetch(url, {
                method: 'GET',
            })
            .then(response => response.json())
            .then((data) => {
                if (!data.result) throw new Error(data.error)
                return data
            })
    },

    savaData(path, body) {
        const url = `${host}${path}`
        return fetch(url, {
                credentials: 'include',
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then((data) => {
                if (result.error) {
                    return reject(data.error)
                }
                resolve(data)
            })

    },

    deleteData(path, id) {
        return fetch(`${host}${path}?id=${id}`, {
                method: 'DELETE',
                credentials: 'include'
            })
            .then(response => response.json())
    },

    joinQuery(query) {
        if (!query) return '';
        return Object.keys(query)
            .filter(key => query[key] !== '')
            .map(key => `${key} = ${encodeURIComponent(query[key])}`)
            .join('&')
    }
}