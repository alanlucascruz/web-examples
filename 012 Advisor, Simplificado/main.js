const baseUrl = "http://apiadvisor.climatempo.com.br";
const token = "56ff3871a0bb4a089c1829dfb750c133";
const cityId = "4898";

$(async () => {
  await getData();
});

const getData = async () => {
  const url = `${baseUrl}/api/v2/forecast/locale/${cityId}/days/15?token=${token}`;

  const data = await $.get(url);

  for (let i = 0; i < 7; i++) {
    const { date, temperature } = data.data[i];

    const weekday = getWeekday(date);
    const averageTemperature = Math.round((temperature.max + temperature.min) / 2);

    htmlCard(weekday, averageTemperature, temperature.max, temperature.min);
  }
}

const htmlCard = (weekday, temperature, max, min) => {
  $(".container").append(`
    <div class="card">
      <h4>${weekday}</h4>
      <h2>${temperature}º</h2>
      <p><i class="bi bi-arrow-up"></i>${max}º</p>
      <p><i class="bi bi-arrow-down"></i>${min}º</p>
    </div>
  `);
}

const getWeekday = (date) => {
  const weekdayArr = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
  const dateObj = new Date(date);
  const day = dateObj.getDay();
  return weekdayArr[day];
}