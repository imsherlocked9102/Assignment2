(function () {

  'use strict';
  angular.module('appModule2', [])
    .controller('ShoppingListCheckOffController1', Controller1)
    .controller('ShoppingListCheckOffController2', Controller2)
    .service('ShoppingListCheckOffService', ShoppingListService)

  // To Buy
  Controller1.$inject = ['ShoppingListCheckOffService'];
  function Controller1(ShoppingListCheckOffService) {

    var buy = this;

    buy.items = ShoppingListCheckOffService.getItems();
    buy.BuyItem = function (itemIndex) {
      ShoppingListCheckOffService.removeItem(itemIndex);
    };

  }

  // Already Bought
  Controller2.$inject = ['ShoppingListCheckOffService'];
  function Controller2(ShoppingListCheckOffService) {
    var bought = this;
    bought.items = ShoppingListCheckOffService.getBoughtItems();
  }


  function ShoppingListService() {

    var service = this;

    // List of shopping items to buy
    var items = [{
        "name": "Apples",
        "quantity": 4
      },
      {
        "name": "Asparagus",
        "quantity": 2
      },
      {
        "name": "Meat",
        "quantity": 100
      },
      {
        "name": "Paneer",
        "quantity": 50
      },
      {
        "name": "Cereals",
        "quantity": 3
      },
      {
        "name": "Butter",
        "quantity": 7
      },
      {
        "name": "Juice",
        "quantity": 6
      }
    ];

    // List of shopping items that bought
    var boughtItems = [];

    service.addItem = function (itemIndex) {
      if ((items !== undefined) || (items.length !== 0)) {
        boughtItems.push(items[itemIndex])
      }
    };

    service.removeItem = function (itemIndex) {
      if (itemIndex > -1 && itemIndex !== items.length) {
        boughtItems.push(items[itemIndex]);
        items.splice(itemIndex, 1);
      }
    };

    service.getItems = function () {
      return items;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };
  }


})();
