// Business Logic for Order -------

function Order() {
  this.pizzas = {};
  this.currentOrderId = 0
}

Order.prototype.addPizza = function(pizza) {
  pizza.orderId = this.assignId();
  this.pizzas[pizza.orderId] = pizza;
}

Order.prototype.assignId = function() {
  this.currentOrderId += 1;
  return this.currentOrderId;
}

Order.prototype.findPizza = function(orderId) {
  if (this.pizzas[orderId] != undefined) {
    return this.pizzas[orderId];
  }
  return false;
}

// Business Logic for Pizza -------

function Pizza(toppings, size, customerName) {
  this.toppings = [toppings];
  this.size = size;
  this.customerName = customerName;
}

Pizza.prototype.listToppings = function([toppings]) {
  this.toppings=toppings.join(", ");
  return this.toppings;
}

Pizza.prototype.price = function() {
  this.price = 13.00;
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

// User Interface Logic -------
let order = new Order();
function displayOrderDetails(orderToDisplay) {
  let orderConfirmation = $("div#order-confirmation");
  let htmlForOrderConfirmation = "";
  Object.keys(orderToDisplay.pizzas).forEach(function(key) {
    const pizza = orderToDisplay.findPizza(key);
    htmlForOrderConfirmation += "<p id=" + pizza.id + ">" + pizza.customerName + " " + pizza.size + " " + pizza.toppings + " " + pizza.price + "</p>";
  });
  orderConfirmation.html(htmlForOrderConfirmation);
};



$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    let toppingSelection = [];
    $("input:checkbox[name=topping]:checked").each(function() { //pizza.toppings
      return toppingSelection = $(this).val(); //this refers to the specific selector being iterated over
    });
    const sizeSelection = $("#size").val();
    const orderName = $("input#customerName").val();
    let newPizza = new Pizza (toppingSelection, sizeSelection, orderName);
    newPizza.price();
    order.addPizza(newPizza);
    displayOrderDetails(order);
    $("div#order-confirmation").show();
    $("form#orderForm").hide();
  });
});