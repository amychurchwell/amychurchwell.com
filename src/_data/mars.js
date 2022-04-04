// fetch coming to node in v17-ish?
const fetch = require("node-fetch");

module.exports = async function() {
  console.log( "Fetching latest Mars photos…" );

  return fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=DEMO_KEY")
    .then(res => res.json())
    .then(json => {
      let img_src;
      for(let i=0; i < json.latest_photos.length; i++) {
        if(json.latest_photos[i].camera.name == "NAVCAM") {
          img_src += json.latest_photos[i].img_src;
        }
      }
      return {
        img: img_src
      };
    });
};