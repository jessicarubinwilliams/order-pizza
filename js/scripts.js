// User Interface Logic

$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    $("div#output").show();
    $("input:checkbox[name=topping]:checked").each(function() {
      const toppingSelection = $(this).val();
      $("#output").append(toppingSelection + "<br>");
    });
    $("form#orderForm").hide();
  });
});