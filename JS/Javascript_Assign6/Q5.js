function calculateDeliveryTime(packageType) {
    let deliveryTime;

    switch (packageType.toLowerCase()) {
        case "standard":
            deliveryTime = "3-5 days";
            break;
        case "express":
            deliveryTime = "1-2 days";
            break;
        case "overnight":
            deliveryTime = "next day";
            break;
        default:
            deliveryTime = "not specified";
            break;
    }

    return deliveryTime;
}

// Example usage
const packageType1 = "standard";
const packageType2 = "express";
const packageType3 = "overnight";
const packageType4 = "unknown";

console.log(`Delivery time for ${packageType1}: ${calculateDeliveryTime(packageType1)}`);
console.log(`Delivery time for ${packageType2}: ${calculateDeliveryTime(packageType2)}`);
console.log(`Delivery time for ${packageType3}: ${calculateDeliveryTime(packageType3)}`);
console.log(`Delivery time for ${packageType4}: ${calculateDeliveryTime(packageType4)}`);
