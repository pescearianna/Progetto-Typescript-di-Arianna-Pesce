"use strict";
class Client {
    constructor(name, lastname, email, paymethod) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.paymethod = paymethod;
    }
    orderProduct(product) {
        if (product.available === true) {
            return `It's available! ${this.name} now you can order the product`;
        }
        else {
            return `Sorry ${this.name}! Product not available at the moment`;
        }
        ;
    }
}
class Product {
    constructor(productType, id, size, colour, available) {
        this.productType = productType;
        this.id = id;
        this.size = size;
        this.colour = colour;
        this.available = available;
    }
    assignToClient(client) {
        return `${client.name} has already ordered ${this.productType}, size: ${this.size}, colour: ${this.colour}`;
    }
}
class ProductionProcess {
    constructor(name, description, currently_prod) {
        this.name = name;
        this.description = description;
        this.currently_prod = currently_prod;
    }
    addProduct(product) {
        this.currently_prod.push(product);
        return this.currently_prod;
    }
}
let client1 = new Client('Mario', 'Rossi', 'mariorossi@gmail.com', 'Mastercard');
let client2 = new Client('Lucia', 'Verdi', 'luciaverdi@gmail.com', 'Visa');
let client3 = new Client('Lucia', 'Bianchi', 'lucabianchi@gmail.com', 'Bitcoin');
let p1545 = new Product('beachwear', 1545, 'M', 'red', true);
let p2727 = new Product('sarong', 2727, 'M', 'blue', true);
let p3837 = new Product('hat', 3837, 'L', 'orange', false);
let prod1 = new ProductionProcess('Free Plastic', 'We use water to......so free plastic', [p1545, p2727]);
console.log(p1545.assignToClient(client1));
console.log(p2727.assignToClient(client2));
console.log(p3837.assignToClient(client3));
console.log(client1.orderProduct(p1545));
console.log(client1.orderProduct(p2727));
console.log(client1.orderProduct(p3837));
console.log(prod1.addProduct(p3837));