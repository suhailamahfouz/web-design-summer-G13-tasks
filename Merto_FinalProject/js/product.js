const products = {
    "Nike Air Max Unisex SYSTM Men Sneaker Shoes": {
    image: "shoes.jpg",
    price: "$148",
    brand: "Nike",
    rating: "4.50 (4 Reviews)",
    sku: "SH001",
    categories: "Shoes, Sports"
},
    "100% UV Protected Sunglasses For Men": {
        image: "imgi_77_fashion-22-300x300.jpg",
        price: "$123",
        brand: "Ray-Ban",
        rating: "4.20 (8 Reviews)",
        sku: "GL001",
        categories: "Sunglasses, Fashion"
    },
    "LV Women Leather Accent Denim Mini Skirt": {
        image: "imgi_23_fashion-6-300x300.jpg",
        price: "$1390",
        brand: "Louis Vuitton",
        rating: "4.80 (12 Reviews)",
        sku: "SK001",
        categories: "Skirts, Fashion"
    },
    "A Different Christmas Knit Holiday Sweater": {
        image: "imgi_24_fashion-16-300x300.jpg",
        price: "$50–$65",
        brand: "H&M",
        rating: "4.00 (5 Reviews)",
        sku: "SW001",
        categories: "Sweaters, Holiday"
    },
    "Winter New Jacket Loose Retro American Campus": {
        image: "imgi_25_fashion-1-300x300.jpg",
        price: "$160",
        brand: "Campus",
        rating: "4.30 (7 Reviews)",
        sku: "JCK001",
        categories: "Jackets, Winter"
    },
    "Winter Hats with Top Ball Custom Design": {
        image: "imgi_26_fashion-3-300x300.jpg",
        price: "$17",
        brand: "Custom",
        rating: "4.10 (3 Reviews)",
        sku: "HT001",
        categories: "Hats, Winter"
    },
    "LV Red Taurillon Leather Capucines": {
        image: "imgi_27_fashion-2-300x300.jpg",
        price: "$184",
        brand: "Louis Vuitton",
        rating: "4.90 (15 Reviews)",
        sku: "BAG001",
        categories: "Bags, Fashion"
    },
    "New York Yankees MLB League Essential T-shirt": {
        image: "imgi_28_electronic-19-300x300.jpg",
        price: "$59–$63",
        brand: "MLB",
        rating: "4.40 (9 Reviews)",
        sku: "TS001",
        categories: "T-shirts, Sports"
    },
    "Barbie Baseball Hat Cap Berkshire Fashions New": {
        image: "imgi_29_fashion-8-300x300.jpg",
        price: "$12",
        brand: "Barbie",
        rating: "3.80 (2 Reviews)",
        sku: "HT002",
        categories: "Hats, Fashion"
    },
    "Mens Winter Jacket Collar Warm Cotton, Coat Male Jackets": {
        image: "imgi_30_fashion-4-300x300-1-300x300.jpg",
        price: "$115",
        brand: "Uniqlo",
        rating: "4.60 (11 Reviews)",
        sku: "JCK002",
        categories: "Jackets, Winter"
    },
    "Black Velvet Bow Trim Long Sleeve Womens Dresses": {
        image: "imgi_31_fashion-14-300x300.jpg",
        price: "$1250",
        brand: "Gucci",
        rating: "4.95 (20 Reviews)",
        sku: "DR001",
        categories: "Dresses, Formal"
    },
    "Translucent Compact Face Powder": {
        image: "imgi_32_fashion-7-300x300.jpg",
        price: "$9 <small class='text-muted text-decoration-line-through'>$14</small>",
        brand: "Maybelline",
        rating: "4.25 (6 Reviews)",
        sku: "CP001",
        categories: "Cosmetics, Face"
    },
    "Travel Over Dry Backpack Allen Large Travel": {
        image: "imgi_21_160-300x300.jpg",
        price: "$64",
        brand: "Allen",
        rating: "4.20 (6 Reviews)",
        sku: "BK001",
        categories: "Backpacks, Travel"
    },
    "Cotopaxi Veza Adventure Shorts for Men - Black": {
        image: "imgi_22_fashion-23-300x300.jpg",
        price: "$99",
        brand: "Cotopaxi",
        rating: "4.50 (12 Reviews)",
        sku: "SH002",
        categories: "Shorts, Men"
    },
    "Smart Audio Glasses with Alexa in Classic Black": {
        image: "imgi_23_fashion-26-300x300.jpg",
        price: "$36",
        brand: "Smart Glasses",
        rating: "4.00 (8 Reviews)",
        sku: "GL002",
        categories: "Glasses, Tech"
    },
    "Nike Men's Benassi Solarsoft Slide Athletic Sandal": {
        image: "imgi_24_fashion-20-2-300x300.jpg",
        price: "$125",
        brand: "Nike",
        rating: "4.70 (15 Reviews)",
        sku: "SD001",
        categories: "Sandals, Men"
    }
};

const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('name') || 'Product Name';
const decodedName = decodeURIComponent(productName);

document.addEventListener('DOMContentLoaded', function() {
    if (products[decodedName]) {
        const product = products[decodedName];
        
        document.getElementById('breadcrumb-title').textContent = decodedName;
        document.getElementById('product-title').textContent = decodedName;
        document.getElementById('main-image').src = `images/${product.image}`;
        document.getElementById('product-price').innerHTML = product.price;
        document.getElementById('brand').textContent = product.brand;
        document.getElementById('rating-text').textContent = product.rating;
        document.getElementById('sku').textContent = product.sku;
        document.getElementById('categories').textContent = product.categories;
        
        const thumbnailsContainer = document.getElementById('thumbnails');
        for (let i = 0; i < 4; i++) {
            const thumb = document.createElement('div');
            thumb.className = 'me-2';
            thumb.innerHTML = `<img src="images/${product.image}" alt="Thumbnail ${i+1}" class="img-fluid product-thumb" onclick="changeMainImage(this.src)">`;
            thumbnailsContainer.appendChild(thumb);
        }
    } else {
        document.getElementById('product-title').textContent = "Product Not Found";
    }
});

function changeMainImage(src) {
    document.getElementById('main-image').src = src;
}

function increaseQuantity() {
    const input = document.getElementById('quantity');
    input.value = parseInt(input.value) + 1;
}

function decreaseQuantity() {
    const input = document.getElementById('quantity');
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}