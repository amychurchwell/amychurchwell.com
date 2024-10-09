const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  try {
    // Fetch data from the NASA API using the API key stored in the environment variable
    let json = await EleventyFetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=${process.env.NASA_KEY}`, {
      duration: "1d", // Cache the result for 1 day
      type: "json" // Parse the response as JSON
    });

    let img_src = json.latest_photos[0].img_src;
    let date = json.latest_photos[0].earth_date;
    let rover = json.latest_photos[0].rover.name;
    let cam = json.latest_photos[0].camera.full_name;

    // Return the first photo data
    return {
      img_src,
      date,
      rover,
      cam
    };

  } catch (e) {
    console.log("Failed getting Mars JSON:", e);
    return "Failed to retrieve.";
  }
};
