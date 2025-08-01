import axios from 'axios'

const apiData = axios.create({
    baseURL: import.meta.env.VITE_APP_GITHUB_API_URL || 'https://api.github.com'
})

export default apiData;