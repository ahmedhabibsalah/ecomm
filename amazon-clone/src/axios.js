import axios from 'axios';

const instance =axios.create({
    baseURL: 'https://us-central1-challenge-4b2b2.cloudfunctions.net/api'
    //'http://localhost:5001/e-clone-f8b59/us-central1/api'
});

export default instance;