import axios from "axios";
import { useState } from "react";

const api = axios.create();

api.interceptors.request.use(
  (config) =>
    // Cela crée une nouvelle instance de la classe 'Promise'.
    // Une promesse représenter une valeur qui sera disponible dans le futur,
    // ou jamais.
    // La fonction de rappelle fournie sera appelée lorsque la promesse sera résolue
    new Promise((resolve) => setTimeout(() => resolve(config), 3000))
);

export const useAxios = () => {
    const url = 'http://localhost:3001/products'

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const get = () => {
        setLoading(true)
        return api.get(url)
            .then(response => {
                setLoading(false);
                return response.data;
            })
            .catch(err => {
                setLoading(false);
                setError(err);
                throw err;
            })
    }

    const post = (data) => {
        setLoading(true)
        return api.post(url, data)
            .then(response => {
                setLoading(false)
                return response.data
            })
            .catch( err => {
                setLoading(false)
                setError(true)
                throw err;
            })
    }

    const put = (id, data) => {
        const urlPut = `${url}/${id}`
        setLoading(true)

        return api.put(urlPut, data)
            .then(response => {
                setLoading(false)
                return response.data
            })
            .catch( err => {
                setLoading(false)
                setError(true)
                throw err;
            })
    }

    const remove = (id) => {
        const urlRemove = `${url}/${id}`
        setLoading(true)

        return api.delete(urlRemove)
            .then(response => {
                setLoading(false)
                return response.data
            })
            .catch( err => {
                setLoading(false)
                setError(true)
                throw err;
            })
    }

    return {
        loading, 
        error, 
        get,
        post,
        put,
        remove
    }
}