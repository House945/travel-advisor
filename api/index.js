import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
    try {
        //request
        const {data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': '6f1801d40amshb322267b816a2b5p1920a4jsn95e31d2e9755'
          }
        });
        return data;
    } catch (error) {
        console.log(error)
    }
};
