import axios from 'axios'

const apiData = axios.create({
    baseURL: import.meta.env.VITE_APP_GITHUB_API_URL || 'https://api.github.com'
})

// Function to fetch user data from GitHub API (single user)
export const fetchUserData = (username) => {
    return apiData.get(`/users/${username}`).then(response => response.data);
}

// Advanced search function using GitHub's Search API
export const searchUsers = (searchCriteria) => {
    // Build the search query string
    let query = '';
    
    // Add username/name search
    if (searchCriteria.username && searchCriteria.username.trim()) {
        query += searchCriteria.username.trim();
    }
    
    // Add location filter
    if (searchCriteria.location && searchCriteria.location.trim()) {
        query += ` location:${searchCriteria.location.trim()}`;
    }
    
    // Add minimum repositories filter
    if (searchCriteria.minRepos && searchCriteria.minRepos.trim() && !isNaN(searchCriteria.minRepos)) {
        query += ` repos:>=${searchCriteria.minRepos}`;
    }
    
    // Make sure we have at least a basic query
    if (!query.trim()) {
        return Promise.reject(new Error('Search query cannot be empty'));
    }
    
    // Use GitHub's Search API
    return apiData.get('/search/users', {
        params: {
            q: query.trim(),
            per_page: 30, // Limit results
            sort: 'repositories', // Sort by repository count
            order: 'desc' // Descending order
        }
    }).then(response => response.data);
}

// Function to get detailed user information
export const getUserDetails = (username) => {
    return apiData.get(`/users/${username}`).then(response => response.data);
}

export default fetchUserData;