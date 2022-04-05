// fetch coming to node in v17-ish?
const fetch = require("node-fetch");

module.exports = async function () {
  console.log("Fetching latest Mars Nav Cam photo…");

  return fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=" + process.env.NASA_KEY)
    .then(res => res.json())
    .then(json => {
      for (let i = 0; i < json.latest_photos.length; i++) {
        if (json.latest_photos[i].camera.name == "NAVCAM") {
          img_src = json.latest_photos[i].img_src;
          date = json.latest_photos[i].earth_date;
          rover = json.latest_photos[i].rover.name;
        }
      }
      return {
        img: img_src,
        date: date,
        rover: rover
      };
    });
};