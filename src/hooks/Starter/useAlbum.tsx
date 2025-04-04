import axios from "axios"

const useAlbum = () => {
    
    const getUserInfos = () => {
        const request = axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(request)
        return request
    }

    return {
        getUserInfos 
    }
};

export default useAlbum;
