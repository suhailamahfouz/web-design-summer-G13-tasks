// بيانات المنتجات (يمكنك لاحقًا استبدالها بـ JSON أو قاعدة بيانات)
const products = {
  laptop: {
    name: "Laptop Asus Vivobook I5 1355U",
    desc: "8GB RAM, 512GB SSD, Intel Core i5 1355U, Windows 11",
    price: "$999",
    oldPrice: "$1536",
    discount: "-35%",
    image: "images/laptop.jpg"
  },
  watch: {
    name: "Apple Watch Series 9 GPS 45mm",
    desc: "Aluminum Case with Sport Band, Heart Rate Monitor",
    price: "$890",
    oldPrice: "$990",
    discount: "-6%",
    image: "images/smart-watch.jpg"
  },
  tools: {
    name: "TOOLS 34 Low Profile Hydraulic Trolley",
    desc: "Heavy-duty car jack with smooth operation and safety lock",
    price: "$797",
    oldPrice: "$837",
    discount: "-8%",
    image: "images/TOOLS-34.jpg"
  },
  clock: {
    name: "14-inch Fashion Simplicity Wall Clock",
    desc: "Modern home decor, silent movement, battery included",
    price: "$50",
    oldPrice: "$75",
    discount: "-10%",
    image: "images/Home-Decor.jpg"
  },
  powder: {
    name: "Translucent Compact Face Powder – 03 Medium",
    desc: "0.22 oz, oil control, long-lasting finish",
    price: "$9",
    oldPrice: "$14",
    discount: "-36%",
    image: "images/powder.jpg"
  }
};

// استخراج اسم المنتج من الرابط (مثلاً ?product=laptop)
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// عرض تفاصيل المنتج
function loadProduct() {
  const productId = getQueryParam('product');

  if (!productId || !products[productId]) {
    document.getElementById('productName').textContent = "Product Not Found";
    return;
  }

  const product = products[productId];

  document.getElementById('productName').textContent = product.name;
  document.getElementById('productDescription').textContent = product.desc;
  document.getElementById('productPrice').textContent = product.price;
  document.getElementById('productOldPrice').textContent = product.oldPrice;
  document.getElementById('productDiscount').textContent = product.discount;
  document.getElementById('productImage').src = product.image;
}

// تشغيل عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', loadProduct);