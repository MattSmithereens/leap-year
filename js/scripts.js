var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !==0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#leapYear").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

        $(".yearDisplay").text(year);

        if(!result) {
          $(".not").text("not");
        } else {
          $(".not").text("");
        }
        $("#result").show();
  });
});
