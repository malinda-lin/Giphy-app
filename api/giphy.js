const getGiphy = async input => {
  let gifUrl = {url: '', id: ''};
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&limit=1&q=${input}`;
  await fetch(url)
    .then(res => res.json())
    .then(data => {
      gifUrl.url = data.data[0].embed_url;
      gifUrl.id = data.data[0].id;
    })
    .catch(error => {
      console.error(error);
    });
  return gifUrl;
};

export default getGiphy;
