// // Example 1 — Car Rental

// class CarRental {

//     static companyName = "Zoom Car";
//     static location = "Hyderabad";

//     main_data(customerName, bookingId, carModel, days, rent) {
//         this.customerName = customerName;
//         this.bookingId = bookingId;
//         this.carModel = carModel;
//         this.days = days;
//         this.rent = rent;
//     }

//     display() {
//         console.log("Company:", CarRental.companyName);
//         console.log("Location:", CarRental.location);
//         console.log("Customer Name:", this.customerName);
//         console.log("Booking ID:", this.bookingId);
//         console.log("Car Model:", this.carModel);
//         console.log("Number of Days:", this.days);
//         console.log("Rent:", this.rent);
//         console.log("-------------------------");
//     }
// }

// let car1 = new CarRental();
// car1.main_data("Rahul", "C101", "Swift", 2, 3000);

// let car2 = new CarRental();
// car2.main_data("Kiran", "C102", "Creta", 3, 6000);

// let car3 = new CarRental();
// car3.main_data("Arjun", "C103", "Baleno", 1, 1800);

// let car4 = new CarRental();
// car4.main_data("Vijay", "C104", "Nexon", 4, 8000);

// car1.display();
// car2.display();
// car3.display();
// car4.display();




// Example 2 — Restaurant Order

// class RestaurantOrder {

//     static restaurantName = "Paradise";
//     static location = "Hyderabad";

//     main_data(customerName, orderId, foodItem, quantity, amount) {
//         this.customerName = customerName;
//         this.orderId = orderId;
//         this.foodItem = foodItem;
//         this.quantity = quantity;
//         this.amount = amount;
//     }

//     display() {
//         console.log("Restaurant:", RestaurantOrder.restaurantName);
//         console.log("Location:", RestaurantOrder.location);
//         console.log("Customer Name:", this.customerName);
//         console.log("Order ID:", this.orderId);
//         console.log("Food Item:", this.foodItem);
//         console.log("Quantity:", this.quantity);
//         console.log("Amount:", this.amount);
//         console.log("-------------------------");
//     }
// }

// let order1 = new RestaurantOrder();
// order1.main_data("Rahul", "R101", "Chicken Biryani", 2, 600);

// let order2 = new RestaurantOrder();
// order2.main_data("Kiran", "R102", "Veg Biryani", 1, 250);

// let order3 = new RestaurantOrder();
// order3.main_data("Arjun", "R103", "Paneer Biryani", 2, 500);

// let order4 = new RestaurantOrder();
// order4.main_data("Vijay", "R104", "Chicken 65", 1, 300);

// order1.display();
// order2.display();
// order3.display();
// order4.display();




// Example 3 — Gym Membership

// class GymMember {

//     static gymName = "Fitness Arena";
//     static location = "Hyderabad";

//     main_data(memberName, memberId, plan, duration, fee) {
//         this.memberName = memberName;
//         this.memberId = memberId;
//         this.plan = plan;
//         this.duration = duration;
//         this.fee = fee;
//     }

//     display() {
//         console.log("Gym:", GymMember.gymName);
//         console.log("Location:", GymMember.location);
//         console.log("Member Name:", this.memberName);
//         console.log("Member ID:", this.memberId);
//         console.log("Plan:", this.plan);
//         console.log("Duration:", this.duration);
//         console.log("Fee:", this.fee);
//         console.log("-------------------------");
//     }
// }

// let member1 = new GymMember();
// member1.main_data("Rahul", "G101", "Basic", "3 Months", 3000);

// let member2 = new GymMember();
// member2.main_data("Kiran", "G102", "Premium", "6 Months", 6000);

// let member3 = new GymMember();
// member3.main_data("Arjun", "G103", "Basic", "1 Year", 10000);

// let member4 = new GymMember();
// member4.main_data("Vijay", "G104", "Premium", "1 Month", 1500);

// member1.display();
// member2.display();
// member3.display();
// member4.display();




// Example 4 — Courier Delivery

// class Courier {

//     static companyName = "DTDC";
//     static branch = "Hyderabad";

//     main_data(senderName, receiverName, trackingId, packageType, deliveryStatus) {
//         this.senderName = senderName;
//         this.receiverName = receiverName;
//         this.trackingId = trackingId;
//         this.packageType = packageType;
//         this.deliveryStatus = deliveryStatus;
//     }

//     display() {
//         console.log("Courier Company:", Courier.companyName);
//         console.log("Branch:", Courier.branch);
//         console.log("Sender Name:", this.senderName);
//         console.log("Receiver Name:", this.receiverName);
//         console.log("Tracking ID:", this.trackingId);
//         console.log("Package Type:", this.packageType);
//         console.log("Delivery Status:", this.deliveryStatus);
//         console.log("-------------------------");
//     }
// }

// let courier1 = new Courier();
// courier1.main_data("Rahul", "Kiran", "D101", "Documents", "Delivered");

// let courier2 = new Courier();
// courier2.main_data("Arjun", "Vijay", "D102", "Electronics", "In Transit");

// let courier3 = new Courier();
// courier3.main_data("Suresh", "Rahul", "D103", "Clothing", "Out for Delivery");

// let courier4 = new Courier();
// courier4.main_data("Kiran", "Arjun", "D104", "Books", "Delivered");

// courier1.display();
// courier2.display();
// courier3.display();
// courier4.display();



// Example 5— Anime Character

// Example — One Piece Straw Hat Crew

class StrawHat {

    static crewName = "Straw Hat Pirates";
    static shipName = "Thousand Sunny";

    main_data(characterName, role, bounty, devilFruit, fightingStyle) {
        this.characterName = characterName;
        this.role = role;
        this.bounty = bounty;
        this.devilFruit = devilFruit;
        this.fightingStyle = fightingStyle;
    }

    display() {
        console.log("Crew:", StrawHat.crewName);
        console.log("Ship:", StrawHat.shipName);
        console.log("Character Name:", this.characterName);
        console.log("Role:", this.role);
        console.log("Bounty:", this.bounty);
        console.log("Devil Fruit:", this.devilFruit);
        console.log("Fighting Style:", this.fightingStyle);
        console.log("-------------------------");
    }
}

let member1 = new StrawHat();
member1.main_data("Luffy", "Captain", "3,000,000,000", "Gomu Gomu no Mi", "Haki");

let member2 = new StrawHat();
member2.main_data("Zoro", "Swordsman", "1,111,000,000", "None", "Three Sword Style");

let member3 = new StrawHat();
member3.main_data("Sanji", "Cook", "1,032,000,000", "None", "Black Leg Style");

let member4 = new StrawHat();
member4.main_data("Nami", "Navigator", "366,000,000", "None", "Clima-Tact");

member1.display();
member2.display();
member3.display();
member4.display();