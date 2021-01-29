// User Interface Logic

$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=topping]:checked").each(function() {
      const toppingSelection = $(this).val(); //this refers to the specific selector being iterated over
      $("div#confirmation").append(toppingSelection + "<br>");
    });
    const sizeSelection = $("#size").val();
    $("#pizzaSize").text(sizeSelection);
    const totalDue = ("6") //change value one Business Logic is developed
    $("#price").append(totalDue);
    $("div#output").show();
    $("form#orderForm").hide();
  });
});