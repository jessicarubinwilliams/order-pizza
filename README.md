# _Order Pizza_

#### _A web-based application for a user to order a pizza._

#### By _**Jessica R. Williams**_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap Library_
* _JavaScript_
* _jQuery Library_

## Description

_This is a an independent project for Week 1 of [Epicodus](https://www.epicodus.com/)'s [Intermediate JavaScript Course](https://www.learnhowtoprogram.com/intermediate-javascript)._

_The Project Prompt:_
_Pizza Parlor_
_Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost._

* _Allow the user to choose toppings and size for the pizza they'd like to order._
* _Create a pizza object constructor with properties for toppings and size._
* _Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this._
_Keep it simple to start! You do not need to have a complex formula for determining cost (although you can if you like). The most important part of this code review is using and demonstrating your understanding of constructors and prototypes._

_The Project Objectives:_

* _Code meets standards from previous weeks._
* _Constructors and prototypes are used successfully._
* _Application works as expected._
* _Plain English specs are included in your README._
* _Required functionality is in place by the deadline._
* _Project is in a polished, portfolio-quality state._
* _Project demonstrates an understanding of this week's concepts. If prompted, you can discuss your code with an instructor using correct terminology._
_Further Exploration Option:_

* _Style your site with CSS and images._
* _Allow users to order more than one pizza with different toppings._
* _Display the list of pizzas ordered as links that can be clicked for details._
* _Offer a delivery option that then requires address information._

## Setup/Installation Requirements

* _Open the terminal on your local machine_
* _Navigate to the directory inside of which you wish to house this project_
* _Clone this project with the following git command `$ git clone <https://github.com/jessicarubinwilliams/order-pizza>`_
* _Navigate to the top level of the repository with the command `$ cd order-pizza`_
* _Open index.html in the browser of your choice with the command `$ open index.html`_.

_Alternatively,_

* _Direct your browser to a [live version on GitHub Pages.](https://jessicarubinwilliams.github.io/order-pizza/index.html)_

## Tests
`
Describe: Order()
Test: "It will create Order instances with properties pizzas and currentOrderId"
Expect(let order = new Order()).toEqual(Order { pizzas: {}, currentOrderId: 0 })

Describe: Order.prototype.addNumberOfPizzas(numberString)
Test: "It will take a string as an argument, parse the string into a number, and add a property with the key "numberOfPizzas" and the value of the parsed argument"
Expect(order.addNumberOfPizzas("1")).toEqual(Order { pizzas: {}, currentOrderId: 0, numberOfPizzas: 1 })

Describe: Order.prototype.assignId()
Test: "It will increment the currentId property and return the newly incremented value"
Expect(order.assignId).toEqual(Order { pizzas: {}, currentOrderId: 1 })

Describe: Order.prototype.addPizza(pizza)
Test: "It will take a Pizza instance as an argument, call the assignID method, assign an id value to the Pizza instance, and add the Pizza instance to the Order's pizzas property"
Expect(order.addPizza(pizza1)).toEqual(Order { pizzas: { 1: { toppings: ["Green Peppers", "Caramelized Onions", "Feta"], size: "medium", customerName: "Jamie", price: 23.13 }}, currentOrderId: 1 })

Describe: Order.prototype.addTotalDue(pizzaPrice)
Test: "It will take the price of a single pizza as an argument, add a property with the key "totalDue" and the value of the argument. If the property already exists it will add the argument to the existing value"
Expect(order.addTotalDue(this.pizzas(pizza1.price))).toEqual(Order { pizzas: { 1: { toppings: ["Green Peppers", "Caramelized Onions", "Feta"], size: "medium", customerName: "Jamie", price: 23.13 }}, currentOrderId: 1, totalDue: 23.13 })


Describe: Order.prototype.findPizza(id)
Test-5: "It will take a pizza's id as an argument and return the Pizza instance with that id. If no pizza has that id it will return false"
Expect(order.findPizza(1)).toEqual(Pizza { toppings: ["Green Peppers", "Caramelized Onions", "Feta"], size: "medium", customerName: "Jamie", price: 23.13 })

Describe: Pizza(toppings, size, customerName)
Test: "It will take three arguments and create Pizza instances with toppings, size, customerName, and price properties. It will assign the arguments as values to the keys toppings, size, and customerName respectively. The value of the key price will be 13.00"
Expect(let pizza1 = new Pizza(["Green Peppers", "Caramelized Onions", "Feta"], "medium", "Jamie")).toEqual(Pizza { toppings: ["Green Peppers", "Caramelized Onions", "Feta"], size: "medium", customerName: "Jamie", price: 13.00 })

Describe: Pizza.prototype.calculatePrice
Test: It will use branching logic to assess the values of the size and toppings properties, calculate the price of the pizza and update the price property with the result of the calculation"
Expect(pizza.price).toEqual(Pizza { toppings: ["Green Peppers", "Caramelized Onions", "Feta"], size: "medium", customerName: "Jamie", price: 23.13 })

Describe: Pizza.prototype.listToppings()
Test: "It will return the toppings property's array value as a formatted string"
Expect(pizza1.listToppings()).toEqual("Green Peppers, Caramelized Onions, Feta")
`

## Known Bugs

* _This project is still in development and not yet functional_

## License
*[MIT](https://choosealicense.com/licenses/mit/)*
Copyright (c) **_2021 Jessica R. Williams_**
## Contact Information
**_Jessica R. Williams [mailto](mailto:jessicarubinwilliams@gmail.com)_**
