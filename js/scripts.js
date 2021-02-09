// Business Logic for Order -------

function Order() {
  this.pizzas = {};
  this.currentOrderId = 0
}

Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.orderId] = pizza;
}

Order.prototype.assignId = function() {
  this.currentOrderId += 1;
  return this.currentOrderId;
}

Order.prototype.findPizza = function(id) {
  if (this.pizzas[orderId] != undefined) {
    return this.pizzas[orderId];
  }
  return false;
}

// Business Logic for Pizza -------

function Pizza(size, customerName) {
  this.size = size;
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
//   this.toppings[pizza.orderId] = pizza;
// }

// function orderAPizza([toppings], size, name) {

// }

// User Interface Logic -------
let order = new Order();
function displayOrderDetails(orderToDisplay) {
  let orderConfirmation = $("div#order-confirmation");
  let htmlForOrderConfirmation = "";
  Object.keys(OrderToDisplay.pizzas).forEach(function(key) {
    const pizza = OrderToDisplay.findPizza(key);
    htmlForOrderConfirmation += "<p><span id=" + pizza.customerName + "></span>, your <span class=font-weight-bold' id=" + pizza.size + "></span> pizza with the following toppings will be ready shortly:</p>";
  });
  orderConfirmation.htm(htmlForOrderConfirmation);
};



$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    const sizeSelection = $("#size").val();
    const orderName = $("input#customerName").val();
    let newPizza = new Pizza (sizeSelection, orderName);
    order.addPizza(newPizza);
    displayOrderDetails(order);
    // $("input:checkbox[name=topping]:checked").each(function() { //pizza.toppings
    //   const toppingSelection = $(this).val(); //this refers to the specific selector being iterated over
    //   $("div#confirmation").append(toppingSelection + "<br>");
    // });

    // const totalDue = ("6") //change value once Business Logic is developed
    // $("#price").append(totalDue);


    $("div#order-confirmation").show();
    $("form#orderForm").hide();
  });
});