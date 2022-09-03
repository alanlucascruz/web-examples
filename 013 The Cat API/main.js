const baseUrl = "https://api.thecatapi.com";

$(async () => {
  await populateSelect();
});

const populateSelect = async () => {
  const data = await $.get(`${baseUrl}/v1/breeds?limit=20`);

  data.forEach(({ id, name }) => {
    $("#filter").append(`<option value="${id}">${name}</option>`);
  });
}

const onChangeFilter = async () => {
  const filter = $("#filter").val();

  const data = await $.get(
    `${baseUrl}/v1/images/search?breed_id=${filter}&limit=12`
  );

  clearGallery();

  data.forEach(({ url }) => {
    addCard(url);
  })
}

const clearGallery = () => {
  $("#gallery").empty();
}

const addCard = (imageUrl) => {
  $("#gallery").append(`
    <div class="col-lg-4 col-md-6 mb-4">
      <img src="${imageUrl}">
    </div>
  `);
}