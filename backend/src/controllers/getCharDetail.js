const axios = require("axios");

const URL_BASE = "https://rickandmortyapi.com/api/";


const getCharDetail = async (req, res) => {
  try {
    const response = await axios.get(
      `${URL_BASE}/character/${req.params.id}`
    );
    const data = response.data;
    const { id, image, name, gender, species, origin, status, location } = data;
    console.log(data);
    res.status(200).json({
      id,
      image,
      name,
      gender,
      species,
      origin,
      status,
      location,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCharDetail;
