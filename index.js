//Task 1
// const shoppingList = [
//   { productName: "bread", quantity: 2, purchased: true },
//   { productName: "milk", quantity: 1, purchased: false },
//   { productName: "cheese", quantity: 3, purchased: true },
//   { productName: "coffee", quantity: 1, purchased: true },
//   { productName: "juice", quantity: 2, purchased: false },
// ];

// const print = (list) => {
//   const sortedList = list.sort((a, b) => a.purchased - b.purchased);
//   sortedList.forEach((item) => {
//     console.log(
//       `${item.productName} - Quantity: ${item.quantity} - Purchased: ${item.purchased}`
//     );
//   });
// };
// print(shoppingList);

// const addToShoppingList = (list, productName, quantity) => {
//   const index = list.findIndex((item) => item.productName === productName);
//   if (index !== -1) {
//     list[index].quantity += quantity;
//   } else {
//     list.push({
//       productName: productName,
//       quantity: quantity,
//       purchased: false,
//     });
//   }
// };
// addToShoppingList(shoppingList, 'milk', 1);
// addToShoppingList(shoppingList, 'squid', 5);
// print(shoppingList);

// const productPurchase = (list, productName, quantity) => {
//   const index = list.findIndex((item) => item.productName === productName);
//   if (index !== -1 && list[index].quantity === quantity) {
//     list[index].purchased = true;
//   } else if (index !== -1 && list[index].quantity !== quantity) {
//     list[index].quantity -= quantity;
//     if (list[index].quantity <= 0) {
//       list.purchased = true;
//     }
//   } else {
//     addToShoppingList(list, productName, quantity);
//     const newIndex = list.findIndex((item) => item.productName === productName);
//     list[newIndex].purchased = true;
//   }
// };

// productPurchase(shoppingList, "milk", 1);
// productPurchase(shoppingList, "juice", 1);
// productPurchase(shoppingList, "juice", 1);
// print(shoppingList);

//Task 2
// const receipt = [
//   { nameOfProduct: "bread", quantity: 2, price: 0.5 },
//   { nameOfProduct: "milk", quantity: 1, price: 3.77 },
//   { nameOfProduct: "detergent", quantity: 5, price: 6.7 },
//   { nameOfProduct: "egg", quantity: 30, price: 0.2 },
//   { nameOfProduct: "apple", quantity: 10, price: 0.35 },
// ];

// const print = (list) => {
//   list.forEach((element) => {
//     console.log(
//       `${element.nameOfProduct} - Quantity: ${element.quantity} - Price for one: ${element.price}`
//     );
//   });
// };
// print(receipt);

// const totalPurchase = (items) => {
//   return items.reduce((total, item) => {
//     return total + item.quantity * item.price;
//   }, 0);
// };
// const totalAmount = totalPurchase(receipt);
// console.log(totalAmount);

// const getMostExpensivePurchase = (items) => {
//   return items.reduce((mostExpensive, item) => {
//     const itemTotal = item.quantity * item.price;
//     const mostExpensiveTotal = mostExpensive.quantity * mostExpensive.price;

//     if (itemTotal > mostExpensiveTotal) {
//       return item;
//     } else {
//       return mostExpensive;
//     }
//   });
// };

// const mostExpensivePurchase = getMostExpensivePurchase(receipt);
// console.log(`Самая дорогая покупка: ${mostExpensivePurchase.nameOfProduct},
//     \nКоличество: ${mostExpensivePurchase.quantity},
//     \nЦена за единицу: ${mostExpensivePurchase.price},
//     \nОбщая стоимость: ${
//       mostExpensivePurchase.quantity * mostExpensivePurchase.price
//     }`);

// const calculateAveragePrice = (items) => {
//   const totalCost = items.reduce((total, item) => {
//     return total + item.quantity * item.price;
//   }, 0);
//   const totalQuantity = items.reduce((total, item) => {
//     return total + item.quantity;
//   }, 0);
//   return totalCost / totalQuantity;
// };
// const averagePrice = calculateAveragePrice(receipt);
// console.log(`Average price of one product:${averagePrice}`);

//Task 3

const cssStyles = [
  { styleName: "color", styleValue: "red" },
  { styleName: "font-size", styleValue: "20px" },
  { styleName: "text-align", styleValue: "center" },
  { styleName: "text-decoration", styleValue: "underline" },
];

const applyStylesAndWriteText = (styles, text) => {
  let styleString = styles
    .map((style) => `${style.styleName}: ${style.styleValue}`)
    .join("; ");
  document.write(`<p style="${styleString}">${text}</p>`);
};

applyStylesAndWriteText(cssStyles, "Пример текста с применением стилей");

//Task 4
const auditoriums = [
  { name: "A101", seats: 15, faculty: "Engineering" },
  { name: "B202", seats: 20, faculty: "Mathematics" },
  { name: "C303", seats: 10, faculty: "Physics" },
  { name: "D404", seats: 18, faculty: "Engineering" },
  { name: "E505", seats: 12, faculty: "Chemistry" },
];

const displayAllAuditoriums = (auditoriums) => {
  auditoriums.forEach((auditorium) => {
    console.log(
      `Название: ${auditorium.name}, Количество мест: ${auditorium.seats}, Факультет: ${auditorium.faculty}`
    );
  });
};

const displayAuditoriumsByFaculty = (auditoriums, faculty) => {
  auditoriums
    .filter((auditorium) => auditorium.faculty === faculty)
    .forEach((auditorium) => {
      console.log(
        `Название: ${auditorium.name}, Количество мест: ${auditorium.seats}, Факультет: ${auditorium.faculty}`
      );
    });
};

const displayAuditoriumsForGroup = (auditoriums, group) => {
  auditoriums
    .filter(
      (auditorium) =>
        auditorium.faculty === group.faculty &&
        auditorium.seats >= group.students
    )
    .forEach((auditorium) => {
      console.log(
        `Название: ${auditorium.name}, Количество мест: ${auditorium.seats}, Факультет: ${auditorium.faculty}`
      );
    });
};

const sortAuditoriumsBySeats = (auditoriums) => {
  return auditoriums.slice().sort((a, b) => a.seats - b.seats);
};

const sortAuditoriumsByName = (auditoriums) => {
  return auditoriums.slice().sort((a, b) => a.name.localeCompare(b.name));
};

console.log("Все аудитории:");
displayAllAuditoriums(auditoriums);

console.log("\nАудитории факультета Engineering:");
displayAuditoriumsByFaculty(auditoriums, "Engineering");

const group = { name: "Group1", students: 15, faculty: "Engineering" };
console.log("\nАудитории для группы Group1:");
displayAuditoriumsForGroup(auditoriums, group);

console.log("\nАудитории, отсортированные по количеству мест:");
sortAuditoriumsBySeats(auditoriums).forEach((auditorium) => {
  console.log(
    `Название: ${auditorium.name}, Количество мест: ${auditorium.seats}, Факультет: ${auditorium.faculty}`
  );
});

console.log("\nАудитории, отсортированные по названию:");
sortAuditoriumsByName(auditoriums).forEach((auditorium) => {
  console.log(
    `Название: ${auditorium.name}, Количество мест: ${auditorium.seats}, Факультет: ${auditorium.faculty}`
  );
});
