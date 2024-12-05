// Birden fazla ürün ekleme
db.products.insertMany([
    { name: "Phone", brand: "Apple", price: 25000, stock: 15, category: "Electronics" },
    { name: "Keyboard", brand: "Logitech", price: 500, stock: 50, category: "Accessories" },
    { name: "Wireless Headphones", brand: "JBL", price:2000, stock: 30, category: "Accessories" },
    { name: "Laptop", brand: "Asus", price: 26000, stock: 10, category: "Electronics" },
    { name: "Monitor", brand: "Samsung", price: 3000, stock: 20, category: "Electronics" }
]);

// Fiyatı 20.000 TL'den düşük olan ürünlere  zam yap
db.products.updateMany(
    { price: { $lt: 20000 } },   // Koşul
    { $mul: { price: 1.1 } }     // Fiyatı %10 artır
);