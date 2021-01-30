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

* _Direct your browser to a [live version on GitHub Pages.] (jessicarubinwilliams.github.io/island-resort-webpage/index.html)_

## Tests

Describe: Order
Test-1: "It will create an object to serve as a blueprint for creating order instance"
Expect(let order = new Order();).toEqual(Order {pizzas: []})

Test-2: "It will create a prototype to be called on Order objects to add pizza objects to order objects"
Expect(order.addPizza).toEqual(Order {pizzas: pizza[], pizza[], pizza[]})

Test-3: "It will create a prototype to be called on Order objects to keep track of the last assigned order id by incrementing the this.currentOrderId property by 1 and returning the updated value"
Expect(order.assignId).toEqual(Order {currentOrderId: 25})

Test-4: "It will update a prototype to be called on Order objects to assign order ids to each pizza before the pizza object is added to the order object"
Expect(order.addPizza).toEqual(Order {pizzas: pizza [id: 1], pizza [id: 2], pizza [id: 3]})

Describe: Pizza
Test-1: "It will create an object to serve as a blueprint for creating pizza instances"
Expect(Pizza("toppings","size")).toEqual(Pizza {toppings: "toppings", size: "size");

Test-2: It will create a prototype to be called on Pizza objects to determine the price"
Expect(pizza.price).toEqual(Pizza {price: 13.00};)

## Known Bugs

* _This project is still in development and not yet functional_

## License
*[MIT](https://choosealicense.com/licenses/mit/)*
Copyright (c) **_2021 Jessica R. Williams_**
## Contact Information
**_Jessica R. Williams [mailto](mailto:jessicarubinwilliams@gmail.com)_**
