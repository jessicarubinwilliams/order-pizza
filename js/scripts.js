// User Interface Logic

$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    const sizeSelection = $("#size").val();
    $("#pizzaSize").text(sizeSelection);
    $("input:checkbox[name=topping]:checked").each(function() {
      const toppingSelection = $(this).val(); //this refers to the specific selector being iterated over
      $("div#output").append(toppingSelection + "<br>");
    });
    $("div#output").show();
    $("form#orderForm").hide();
  });
});