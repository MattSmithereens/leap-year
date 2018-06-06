function leapYear (yearInput) {
  if ((yearInput % 4 === 0) && (yearInput % 100 !==0) || (yearInput % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#leapYear").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#yearInput").val());
    var result = leapYear(yearInput);

        $(".yearDisplay").text(yearInput);

        if(!result) {
          $(".not").text("not");
        } else {
          $(".not").text("");
        }
        $("#result").show();
  });
});
