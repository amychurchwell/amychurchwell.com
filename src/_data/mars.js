// fetch coming to node in v17-ish?
const fetch = require("node-fetch");

module.exports = async function () {
  console.log("Fetching latest Mars Nav Cam photo…");

  return fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=" + process.env.NASA_KEY)
    .then(res => res.json())
    .then(json => {
      img_src = json.latest_photos[0].img_src;
      date = json.latest_photos[0].earth_date;
      rover = json.latest_photos[0].rover.name;
      return {
        img: img_src,
        date: date,
        rover: rover
      };
    });
};