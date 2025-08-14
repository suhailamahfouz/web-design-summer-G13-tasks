document.addEventListener("DOMContentLoaded", function() {
  const products = document.querySelectorAll(".product");
  const colorFilters = document.querySelectorAll(".color-circle");
  const prevBtn = document.getElementById("prevPage");
  const nextBtn = document.getElementById("nextPage");
  const pageInfo = document.getElementById("pageInfo");

  let currentPage = 1;
  const itemsPerPage = 3;
  let currentFilter = null;

  // فلترة المنتجات
  colorFilters.forEach(filter => {
    filter.addEventListener("click", function() {
      currentFilter = this.dataset.color;
      currentPage = 1;
      renderProducts();
    });
  });

  // عرض المنتجات بناءً على الفلتر والصفحة
  function renderProducts() {
    let filtered = Array.from(products);
    if (currentFilter) {
      filtered = filtered.filter(p => p.dataset.color === currentFilter);
    }

    products.forEach(p => p.style.display = "none");

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    filtered.slice(start, end).forEach(p => p.style.display = "block");

    pageInfo.textContent = `صفحة ${currentPage} من ${Math.ceil(filtered.length / itemsPerPage)}`;

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = end >= filtered.length;
  }

  // أزرار الصفحات
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderProducts();
    }
  });

  nextBtn.addEventListener("click", () => {
    currentPage++;
    renderProducts();
  });

  // أول تحميل
  renderProducts();
});


// Pagination Script
let currentPage = 1;

function changePage(page) {
  // إخفاء كل الصفحات
  const page1 = document.getElementById('products-container');
  const page2 = document.getElementById('page-2-products');
  
  if (page1) page1.style.display = 'none';
  if (page2) page2.style.display = 'none';

  // تحديث الترقيم
  const paginationItems = document.querySelectorAll('#pagination .page-item');
  paginationItems.forEach(item => {
    item.classList.remove('active');
  });

  // تحديد الصفحة الجديدة
  if (page === 'next') {
    currentPage = 2;
  } else if (page === 'prev') {
    currentPage = 1;
  } else {
    currentPage = page;
  }

  // إظهار الصفحة المناسبة
  if (currentPage === 1 && page1) {
    page1.style.display = 'flex';
    if (paginationItems[1]) {
      paginationItems[1].classList.add('active');
    }
  } else if (currentPage === 2 && page2) {
    page2.style.display = 'flex';
    if (paginationItems[2]) {
      paginationItems[2].classList.add('active');
    }
  }
}

// تفعيل الصفحة الأولى تلقائيًا عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
  const page1 = document.getElementById('products-container');
  if (page1) {
    page1.style.display = 'flex';
  }
});