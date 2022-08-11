// const EleventyFetch = require("@11ty/eleventy-fetch");

// module.exports = async function () {
//   try {
//     let json = await EleventyFetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=" + process.env.NASA_KEY, {
//       duration: "1d", // 1 day
//       type: "json" // also supports "text" or "buffer"
//     });

//     img_src = json.latest_photos[0].img_src;
//     date = json.latest_photos[0].earth_date;
//     rover = json.latest_photos[0].rover.name;
//     cam = json.latest_photos[0].camera.full_name;

//     return json.latest_photos[0];

//   } catch (e) {
//     console.log("Failed getting Mars JSON");
//     return "Failed to retrieve.";
//   }
// };
