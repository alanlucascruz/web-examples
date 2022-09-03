const baseUrl = "http://apiadvisor.climatempo.com.br";
const token = "56ff3871a0bb4a089c1829dfb750c133";
const cityId = "4898";

$(async () => {
  await getData();
});

const getData = async () => {
  const url = `${baseUrl}/api/v2/forecast/locale/${cityId}/days/15?token=${token}`;

  const data = await $.get(url);
  // const data = advisorData;

  for (let i = 0; i < 7; i++) {
    const { date, temperature, wind, humidity } = data.data[i];

    const weekday = getWeekday(date);
    const averageTemperature = Math.round((temperature.max + temperature.min) / 2);

    htmlCard(weekday, averageTemperature, temperature.max, temperature.min, wind.velocity, humidity.max);
  }
}

const htmlCard = (weekday, temperature, max, min, wind, humidity) => {
  const html = `
    <div class="card">
      <div class="col-left">
        <h4>${weekday}</h4>
        <h2>${temperature}º</h2>
      </div>
      <div class="col-right">
        <ul>
          <li><i class="bi bi-arrow-up"></i> ${max}º</li>
          <li><i class="bi bi-arrow-down"></i> ${min}º</li>
          <li><i class="bi bi-wind"></i> ${wind} Km/h</li>
          <li><i class="bi bi-droplet"></i> ${humidity}%</li>
        </ul>
      </div>
    </div>
  `;

  $(".content").append(html);
}

const getWeekday = (date) => {
  const weekdayArr = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
  const dateObj = new Date(date);
  const day = dateObj.getDay();
  return weekdayArr[day];
}