fetch("https://api.thecatapi.com/v1/images/search")
  .then((response) => response.json())
  .then((data) => {
    const imageUrl = data[0].url;
    console.log(`${imageUrl}`);
  });
