import axios from 'axios';

const instance =axios.create({
    baseURL: 'http://localhost:5001/e-clone-f8b59/us-central1/api'
});

export default instance;