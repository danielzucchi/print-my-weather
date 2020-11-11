import axios from 'axios';

const getWeather = async ({ lat, lon, units }) => {
  await axios
    .get(
      `${process.env.REACT_APP_API_BASE_URL}?lon=${lon}&lat=${lat}&units=${units}&exclude=minutely&APPID=${process.env.REACT_APP_API_KEY}`,
    )
    .then((res) => console.log(res));
};

export default getWeather;
