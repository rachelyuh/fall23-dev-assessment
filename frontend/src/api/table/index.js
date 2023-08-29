import axios from 'axios'


export default function handler(req, res) {
    let url = "http://localhost:5000/api/bog/users"
    axios.get(url)
        .then(function (response) {
            info = response.data
            res.status(200).send(info);
    
        })
        .catch(function (error) {
            res.status(400).send("Error in request");
        })
    
    
}