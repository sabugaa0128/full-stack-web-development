const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Add 'Meat' to the beginning of the shopping cart if not already present
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

// Add 'Sugar' to the end of the shopping cart if not already present
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

// Remove 'Honey' if allergic
const allergicToHoney = true; // Set to true if allergic, false otherwise
if (allergicToHoney) {
    const honeyIndex = shoppingCart.indexOf('Honey');
    if (honeyIndex !== -1) {
        shoppingCart.splice(honeyIndex, 1);
    }
}

// Modify 'Tea' to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart); // Output the updated shopping cart
