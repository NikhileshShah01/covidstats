$.ajax({
  type: "get",
  url: "https://api.covid19api.com/summary",

  success: function (response) {
    console.log(response.Countries);

    for (var i = 0; i < response.Countries.length; i++) {
      var trow = `<tr> <td>${response.Countries[i].Country}</td>  <td>${response.Countries[i].TotalConfirmed}</td>  <td>${response.Countries[i].NewConfirmed}</td>  <td>${response.Countries[i].TotalDeaths}</td>  <td>${response.Countries[i].NewDeaths}</td> </tr>`;
      $("#coviddata").append(trow);
    }
    $('#covidtable').DataTable();
  },
  error: function (error) {
    console.log(error);
  }
});
