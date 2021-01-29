// Business Logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

// User Interface Logic

$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=topping]:checked").each(function() { //pizza.toppings
      const toppingSelection = $(this).val(); //this refers to the specific selector being iterated over
      $("div#confirmation").append(toppingSelection + "<br>");
    });
    const sizeSelection = $("#size").val(); //pizza.size
    $("#pizzaSize").text(sizeSelection);
    const totalDue = ("6") //change value one Business Logic is developed
    $("#price").append(totalDue);
    $("div#output").show();
    $("form#orderForm").hide();
  });
});