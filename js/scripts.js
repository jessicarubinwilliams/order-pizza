// Business Logic for Order -------

function Order() {
  this.pizzas = {};
}

Order.prototype.addPizza = function(contact) {
  this.pizzas[pizza.customerName] = pizza;
}

// Business Logic for Pizza -------

function Pizza(toppings, size, price) {
  this.toppings = toppings;
  this.size = size;
  this.price = price;
  this.orderId = orderId;
  this.customerName = customerName;
}

Pizza.prototype.price = function() {
  if (this.toppings === "Spinach") {
    this.price += 1.00;
  } if (this.toppings === "Tomato") {
    this.price += 1.00;
  } if (this.toppings === "Green Pepper") {
    this.price += 1.00;
  } if (this.toppings === "Caramelized Onions") {
    this.price += 2.00;
  } if (this.toppings === "Feta") {
    this.price += 2.50;
  } if (this.price === "Smoked Mozzarella") {
    this.price += 3.00;
  } if (this.size === "medium") {
    this.price += 3.00;
  } if (this.size === "large") {
    this.price += 6.00;
  } if (this.size === "extra large") {
    this.price += 9.00;
  } return this.price //Move this functionality to UIL?
};

// Pizza.prototype.addToppings = function(pizza) {
//   this.toppings[pizza.customerName] = pizza;
// }

// User Interface Logic -------

$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=topping]:checked").each(function() { //pizza.toppings
      const toppingSelection = $(this).val(); //this refers to the specific selector being iterated over
      $("div#confirmation").append(toppingSelection + "<br>");
    });
    const sizeSelection = $("#size").val(); //pizza.size
    $("#pizzaSize").text(sizeSelection);
    const orderName = $("input#customerName").val();
    $("span#orderName").text(orderName);
    const totalDue = ("6") //change value once Business Logic is developed
    $("#price").append(totalDue);
    $("div#output").show();
    $("form#orderForm").hide();
  });
});