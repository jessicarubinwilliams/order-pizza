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
  this.toppings = toppings;
  this.size = size;
  this.customerName = customerName;
  this.price = 13.00;
}

Pizza.prototype.listToppings = function([toppings]) {
  this.toppings=toppings.join(", ");
  return this.toppings;
}

Pizza.prototype.calculatePrice = function() {
  this.toppings.forEach(topping => {
    if (topping === "Spinach" || topping === "Tomato" || topping === "Green Pepper") {
      this.price += 1.00;
    } if (topping === "Caramelized Onions") {
      this.price += 2.00;
    } if (topping === "Feta") {
      this.price += 2.50;
    } if (topping === "Smoked Mozzarella") {
      this.price += 3.00;
    }
  });
  if (this.size === "medium") {
    this.price *= 1.25;
  } if (this.size === "large") {
    this.price *= 1.5;
  } if (this.size === "extra large") {
    this.price *= 1.75
  }
  this.price = this.price.toFixed(2);
}

// User Interface Logic -------
let order = new Order(); // global as simulating a database

function displayOrderForm(numberOfPizzas) {
  let personalizePizzaDiv = $("#personalize-pizza");
  let htmlForPersonalizePizzaDiv = "";
  for (let instance = 1; instance <= numberOfPizzas; instance += 1) {
    htmlForPersonalizePizzaDiv += `<h3 class='text-center mt-5'>Customize Pizza ` + instance + `</h3>
    <div class="form-group">
    <h5>Select pizza ` + instance + ` toppings</h5>
    <input type="checkbox" name="topping" value="Spinach">Spinach<br>
    <input type="checkbox" name="topping" value="Tomato">Tomato<br>
    <input type="checkbox" name="topping" value="Green Pepper">Green Pepper<br>
    <input type="checkbox" name="topping" value="Caramelized Onions">Caramelized Onions<br>
    <input type="checkbox" name="topping" value="Feta">Feta<br>
    <input type="checkbox" name="topping" value="Smoked Mozzarella">Smoked Mozzarella<br>
  </div>
  <div class="form-group">
    <h5>Select pizza ` + instance + ` size</h5>
    <select class="form-control" id="size">
      <option selected>Choose size...</option>
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
      <option value="extra large">Extra Large</option>
    </select>
  </div>`
  };
  personalizePizzaDiv.html(htmlForPersonalizePizzaDiv);
}

function displayOrderDetails(orderToDisplay) {
  let orderConfirmation = $("div#order-confirmation");
  let htmlForOrderConfirmation = "";
  Object.keys(orderToDisplay.pizzas).forEach(function(key) {
    const pizza = orderToDisplay.findPizza(key);
    htmlForOrderConfirmation += "<p id=" + pizza.id + ">" + pizza.customerName + ", the total for your " + pizza.size + " pizza with " + pizza.toppings.join(', ') + " is $" + pizza.price + ".</p>";
  });
  orderConfirmation.html(htmlForOrderConfirmation);
};

$(document).ready(function() {
  $("form#number-pizzas-form").submit(function(event) {
    event.preventDefault();
    const numberOfPizzas = $("#number-pizzas").val();
    displayOrderForm(numberOfPizzas);
    $("#number-of-pizzas").hide()
    $("#orderForm").show();
  });
  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    let toppingSelection = [];
    $("input:checkbox[name=topping]:checked").each(function() { //pizza.toppings
      return toppingSelection.push($(this).val()); //this refers to the specific selector being iterated over
    });
    const sizeSelection = $("#size").val();
    const orderName = $("input#customerName").val();
    let newPizza = new Pizza (toppingSelection, sizeSelection, orderName);
    newPizza.calculatePrice();
    console.log(newPizza);
    order.addPizza(newPizza);
    displayOrderDetails(order);
    $("div#order-confirmation").show();
    $("form#orderForm").hide();
  });
});