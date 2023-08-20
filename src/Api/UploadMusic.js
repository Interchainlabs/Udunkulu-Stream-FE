import axios from "axios";
var token = localStorage.getItem('token');
const config = {
    headers: { 
        token: token,
        headers: {
      'Content-Type': 'multipart/form-data'
    }
    }
};
const API_URL ="https://udunkulu-api.herokuapp.com/api/v1/";

const createAlbum =(form)=>{
    
     axios.post(API_URL + "artists/artistId/albums",{
      form
    },
    config
    );
}


const createSong =()=>{
    
    return axios.post(API_URL + "artists/artistId/albums/albumId/songs",{
        
        
    },

    );
}
export {createAlbum, createSong};
