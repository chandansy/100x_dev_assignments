/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/




function calculateTotalSpentByCategory(transactions) {
	let categories_list = [];
	let total_spent = {};
	for (let i = 0; i < transactions.length; i++) {
		categories_list.push(transactions[i]['category']);
}
	categories_list = [...new Set(categories_list)];
	
	categories_list.forEach(element => {
		for (let i = 0; i< transactions.length; i++) {
			if (transactions[i]['category'] === element) {
				total_spent[element] = transactions[i]['price'];
			}
	});
}


calculateTotalSpentByCategory([
  {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	},
  {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Travel',
		itemName: 'Pizza',
	},
  {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Entertainment',
		itemName: 'Pizza',
	},
  {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	},
  {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Rent',
		itemName: 'Pizza',
	}
]);




module.exports = calculateTotalSpentByCategory;
