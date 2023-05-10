$(".btn").on("click", function (event) {
  var searchTerm = $("#search").val();

  console.log(searchTerm);
  weather(searchTerm);
});
//enter key to log searchTerm
$("#search").keypress(function (event) {
  var keycode = event.keyCode ? event.keyCode : event.which;
  if (keycode === 13) {
    var searchTerm = $("#search").val();
    console.log(searchTerm);
  }
});

function weather(searchTerm) {
  $.ajax({
    type: "GET",
    url:
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      searchTerm +
      "&appid=630ed7d6f29755341fde160c5e07c42e",
  }).then(function (data) {
    console.log(data);
  });
}
