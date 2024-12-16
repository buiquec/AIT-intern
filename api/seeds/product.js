// seed.js
const mongoose = require("mongoose");
const Product = require("../model/product"); // Adjust the path accordingly

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/AIT-intern", {})
  .then(() => {
    console.log("MongoDB connected");
    return Product.deleteMany({});
  })
  .then(async () => {
    // Sample product data
    const products =[
        {
            productId: 1,
            productName: "Blue hoodie",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPjM_pf7DM5g_gsp9_0dcSUeX4Ib6ize8ZKA&s",
            description: "Stay cozy and stylish with our soft and comfortable blue hoodie. Perfect for everyday wear or lounging at home.",
            price: 7.99
        },
        {
            productId: 2,
            productName: "Puffer jacket sand",
            image: "https://perplex.store/cdn/shop/files/PufferJacketSand_01.jpg?v=1731244458&width=1080",
            description: "Bundle up in warmth with our lightweight and stylish sand-colored puffer jacket. Ideal for cold weather adventures.",
            price: 12.99
        },
        {
            productId: 3,
            productName: "Black hoodie",
            image: "https://perplex.store/cdn/shop/files/1000084-ArmorHoodieBlack_01_bf22178f-324e-437f-af68-be4edd1f4a29.jpg?v=1728915678",
            description: "A classic wardrobe essential. Our black hoodie offers a minimalist look and maximum comfort.",
            price: 8.99
        },
        {
            productId: 4,
            productName: "Black Puffer vest",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeIdWzgbZKJkLZpHwwENqgaKam1nFObj_4YNC9NV5sMR_0SdTiUoe9odqB7XtUD9TCXlA&usqp=CAU",
            description: "Layer up in style with our versatile black puffer vest. Perfect for adding warmth without bulk.",
            price: 7.99
        },
        {
            productId: 5,
            productName: "Mocca Transpants",
            image: "https://perplex.store/cdn/shop/files/TrackpantsMocca_01.jpg?v=1731201542&width=720",
            description: "Elevate your everyday style with these versatile Mocca Transpants. Crafted from premium materials, they offer a perfect blend of comfort and sophistication.",
            price: 6.99
        },
        {
            productId: 6,
            productName: "Olive Armor hoodie",
            image: "https://perplex.store/cdn/shop/files/ArmorHoodieOlive_01_f12de9c0-f510-47fe-8ef7-38adc9d1be58.jpg?v=1731201632&width=720",
            description: "Stay warm and stylish with the Olive Armor Hoodie. Its rugged design and cozy fleece lining make it ideal for chilly days.",
            price: 11.99
        },
        {
            productId: 7,
            productName: "Olive trackpants",
            image: "https://perplex.store/cdn/shop/files/TrackpantsOlive_01.jpg?v=1731201920&width=720",
            description: "Experience ultimate comfort in the Olive Trackpants. Perfect for workouts or casual wear, these pants offer a relaxed fit and superior breathability.",
            price: 5.99
        },
        {
            productId: 8,
            productName: "Sand Puffer vest",
            image: "https://perplex.store/cdn/shop/files/PufferVestSand_01.jpg?v=1731086559&width=720",
            description: "Layer up in style with the Sand Puffer Vest. Its lightweight design and water-resistant finish provide warmth without bulk.",
            price: 8.99
        }
    ];

    await Product.insertMany(products);
  })
  .then(() => {
    console.log("Seed data inserted");
  })
  .catch((err) => {
    console.error("Error seeding data:", err);
  })
  .finally(() => {
    mongoose.connection.close(); // Close the connection
  });
