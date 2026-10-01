
const allProducts = [
    { id: 1, name: "بلاشر", category: "مكياج", price: 28000, image: "img/product1.jpg", desc: "لمسة وردية ناعمة تمنح وجنتيكِ إشراقة طبيعية ومظهراً حيوياً يدوم طويلاً." },
    { id: 2, name: "بودره سائبه من نارس", category: "مكياج", price: 19500, image: "img/product2.jpg", desc: "بودرة شفافة خفيفة لتثبيت المكياج وإعطاء ملمس مخملي بدون تكتل." },
    { id: 3, name: "مثبت حواجب", category: "مكياج", price: 15000, image: "img/product3.jpg", desc: "جل شفاف لترتيب وتثبيت شعيرات الحواجب طوال اليوم بكل ثبات." },
    { id: 4, name: "ماسڪارا إيسنس", category: "مكياج", price: 32000, image: "img/product4.jpg", desc: "ماسكارا لتكثيف وتطويل الرموش وإعطائها مظهراً جذاباً بدون تكتل." },
    { id: 5, name: "سيروم", category: "عناية بالبشرة", price: 13500, image: "img/product5.jpg", desc: "سيروم مغذي بخلاصة الورد لترطيب البشرة ومحيط الوجه بعمق." },
    { id: 6, name: "قلم ڪونتور", category: "مكياج", price: 26000, image: "img/product6.jpg", desc: "قلم تحديد وملء ملامح الوجه بقوام كريمي سهل الدمج." },
    { id: 7, name: "بيوتي بلندر", category: "مكياج", price: 21000, image: "img/product7.jpg", desc: "ظل عيون بألوان متألقة يدوم طوال النهار بلمعة ناعمة جذابة." },
    { id: 8, name: "باليت", category: "عناية بالبشرة", price: 17000, image: "img/product8.jpg", desc: "كريم ترطيب عميق يغذي البشرة ويمنحها نضارة ونعومة فائقة." },
    { id: 9, name: "ايشادو من شارلوت تيلبوري", category: "مكياج", price: 6500, image: "img/product9.jpg", desc: "مجموعة ألوان ساحرة لإطلالة عيون ناعمة ومتألقة.", oldPrice: 7800, discount: 15 },
    { id: 10, name: "بلاشر من شيجلَام", category: "عطور", price: 34000, image: "img/product10.jpg", desc: "نفحات زهرية أنثوية ساحرة تجمع بين الورد الجوري والمسك النقي." },
    { id: 11, name: "كونتور بودرة من تو كول فور سكول", category: "عناية بالبشرة", price: 19000, image: "img/product11.jpg", desc: "كريم متخصص لإشراقة وتوحيد لون البشرة لمظهر مثالي." },
    { id: 12, name: "كريم أساس من ماك", category: "مكياج", price: 16500, image: "img/product12.jpg", desc: "أحمر شفاه بقوام مخملي ناعم وألوان جذابة تدوم طويلاً." },
    { id: 13, name: "هايلايتر من شيجلَام", category: "عناية بالبشرة", price: 11000, image: "img/product13.jpg", desc: "مقشر لطيف يزيل الخلايا الميتة ويمنح البشرة نعومة ونضارة." },
    { id: 14, name: "ايلاينر من ديور", category: "عناية بالبشرة", price: 22500, image: "img/product14.jpg", desc: "مجموعة متكاملة لترطيب وتغذية البشرة واستعادة نضارتها." },
    { id: 15, name: "مكبس رموش", category: "عطور", price: 28000, image: "img/product15.jpg", desc: "عطر ليلي فاخر بروائح خشبية ومسكية تدوم طوال الليل." },
    { id: 16, name: "بي بي كريم لتغطيه وحماية البشره من الشمس من ميشا", category: "مكياج", price: 14000, image: "img/product16.jpg", desc: "كونسيلر خفيف يغطي العيوب ويمنح بشرة مثالية وإشراقة طبيعية." },
    { id: 17, name: "أقراط الزركون الفاخرة", category: "مكياج", price: 23000, image: "img/product17.jpg", desc: "فاونديشن بتغطية متوسطة يمنح مظهراً طبيعياً وأنيقاً طوال اليوم." },
    { id: 18, name: "بخاخ تثبيت المكياج من إيسنس", category: "عناية بالبشرة", price: 9500, image: "img/product18.jpg", desc: "جل تنظيف لطيف يزيل المكياج والشوائب بفاعلية عالية." },
    { id: 19, name: "أحمر شفاه من ريفلون", category: "مكياج", price: 18000, image: "img/product19.jpg", desc: "تشكيلة ألوان مخملية جذابة تناسب جميع الإطلالات والمناسبات." },
    { id: 20, name: "أقلام تحديد شفاه من فلورمار", category: "عطور", price: 31000, image: "img/product20.jpg", desc: "عطر نهاري بنفحات زهرية خفيفة ومنعشة تدوم طويلاً." },
    { id: 21, name: "ايشادو من شيجلَام", category: "عناية بالبشرة", price: 7500, image: "img/product21.jpg", desc: "بلسم شفاه مرطب ومغذي يمنح شفاهاً ناعمة وحيوية على مدار اليوم." },
    { id: 22, name: "كبسولات الكولاجين من ماركة ميديكوب الكورية", category: "عناية بالبشرة", price: 5500, image: "img/product22.jpg", desc: "كبسولات مغذية للبشرة تعيد لها النضارة والحيوية.", oldPrice: 7000, discount: 20 },
    { id: 23, name: "ماسكارا شفافة للرموش والحواجب من ماركة شي جلام", category: "عناية بالبشرة", price: 13000, image: "img/product23.jpg", desc: "كريم ليلي متخصص لعلاج البقع وتوحيد لون البشرة أثناء النوم." },
    { id: 24, name: "سيروم للوجه من ماركة ميديكوب", category: "عناية بالبشرة", price: 24000, image: "img/product24.jpg", desc: "زيت أرغان طبيعي خالص للعناية الفائقة بالبشرة والشعر." },
    { id: 25, name: "تونر من سكين", category: "عطور", price: 45000, image: "img/product25.jpg", desc: "عطر فاخر بمزيج من أجود أنواع الورد الفرنسي لإطلالة أسطورية." },
];

const CART_KEY = 'rozaAngel_cart';

function getCart() {
    try {
        return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(productId, productName, price, image, category) {
    const cart = getCart();
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty = (existing.qty || 1) + 1;
    } else {
        cart.push({ id: productId, name: productName, price, image: image || 'img/product1.jpg', category: category || '', qty: 1 });
    }
    saveCart(cart);
    updateAllCartCounts();
    showToast(`تمت إضافة "${productName}" للسلة`, 'success');
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    updateAllCartCounts();
}

function updateQty(productId, delta) {
    const cart = getCart();
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.qty = (item.qty || 1) + delta;
        if (item.qty <= 0) {
            removeFromCart(productId);
            return;
        }
        saveCart(cart);
        updateAllCartCounts();
        if (typeof renderCart === 'function') renderCart();
    }
}

function clearCart() {
    saveCart([]);
    updateAllCartCounts();
    if (typeof renderCart === 'function') renderCart();
}

function getCartTotal() {
    return getCart().reduce((sum, item) => sum + item.price * (item.qty || 1), 0);
}

function getCartCount() {
    return getCart().reduce((sum, item) => sum + (item.qty || 1), 0);
}

function updateAllCartCounts() {
    document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = getCartCount();
    });
}

let currentPayProduct = null;

function openPayment(productId, productName, price) {
    currentPayProduct = { id: productId, name: productName, price };
    const modal = document.getElementById('paymentModal');
    if (!modal) return;

    document.getElementById('pay-product-name').textContent = productName;
    document.getElementById('pay-product-price').textContent = price.toLocaleString() + ' ر.ي';
    document.getElementById('card-number-display').textContent = '•••• •••• •••• ••••';
    document.getElementById('card-name-display').textContent = 'اسم صاحب البطاقة';
    document.getElementById('card-expiry-display').textContent = 'MM/YY';

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    const form = document.getElementById('paymentForm');
    if (form) {
        form.reset();
        const successDiv = modal.querySelector('.order-success');
        const formDiv = modal.querySelector('.payment-form-content');
        if (successDiv) successDiv.style.display = 'none';
        if (formDiv) formDiv.style.display = 'block';
    }
}

function closePayment() {
    const modal = document.getElementById('paymentModal');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

function openCartPayment() {
    const cart = getCart();
    if (cart.length === 0) {
        showToast('السلة فارغة!', 'error');
        return;
    }
    const total = getCartTotal();
    openPayment(null, `طلب ${cart.length} منتج`, total);
}

function initPaymentForm() {
    const form = document.getElementById('paymentForm');
    if (!form) return;

    const cardNumberInput = form.querySelector('#inp-card-number');
    const cardNameInput = form.querySelector('#inp-card-name');
    const cardExpiryInput = form.querySelector('#inp-card-expiry');

    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function () {
            let val = this.value.replace(/\D/g, '').substring(0, 16);
            let formatted = val.match(/.{1,4}/g)?.join(' ') || val;
            this.value = formatted;
            const display = document.getElementById('card-number-display');
            if (display) {
                display.textContent = formatted || '•••• •••• •••• ••••';
            }
        });
    }

    if (cardNameInput) {
        cardNameInput.addEventListener('input', function () {
            const display = document.getElementById('card-name-display');
            if (display) display.textContent = this.value || 'اسم صاحب البطاقة';
        });
    }

    if (cardExpiryInput) {
        cardExpiryInput.addEventListener('input', function () {
            let val = this.value.replace(/\D/g, '').substring(0, 4);
            if (val.length >= 2) val = val.substring(0, 2) + '/' + val.substring(2);
            this.value = val;
            const display = document.getElementById('card-expiry-display');
            if (display) display.textContent = val || 'MM/YY';
        });
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const btn = form.querySelector('.btn-pay');
        if (btn) {
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جارٍ المعالجة...';
            btn.disabled = true;
        }
        setTimeout(() => {
            const formContent = document.querySelector('.payment-form-content');
            const successDiv = document.querySelector('.order-success');
            if (formContent) formContent.style.display = 'none';
            if (successDiv) successDiv.style.display = 'block';

            if (!currentPayProduct || currentPayProduct.id === null) {
                clearCart();
            }

            if (btn) { btn.innerHTML = '<i class="fa-solid fa-lock"></i> إتمام الدفع الآن'; btn.disabled = false; }
        }, 2000);
    });
}

function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation';
    toast.innerHTML = `<i class="fa-solid ${icon}"></i><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toastOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
}

function setActiveNav() {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === current || (current === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

const slides = [
    { img: 'img/product25.jpg', badge: 'عناية بالبشرة', title: 'تونر من سكين', desc: 'تونر لطيف ومنعش ينقي البشرة ويمنحها نضارة وإشراقة طبيعية.', link: 'products.html' },
    { img: 'img/product22.jpg', badge: 'خصم 20%', title: 'كبسولات الكولاجين من ماركة ميديكوب الكورية', desc: 'استعيدي نضارة بشرتك مع كبسولات الكولاجين المميزة.', link: 'discounts.html' },
    { img: 'img/product24.jpg', badge: 'عناية فاخرة', title: 'سيروم للوجه من ماركة ميديكوب', desc: 'سيروم مغذي ومجدد للخلايا يمنح بشرتك النعومة والترطيب.', link: 'products.html' },
    { img: 'img/product17.jpg', badge: 'مجوهرات', title: 'أقراط الزركون الفاخرة', desc: 'أقراط بتصميم أنيق مرصعة بحبات الزركون اللامعة لإطلالة ساحرة.', link: 'products.html' },
    { img: 'img/product20.jpg', badge: 'مكياج', title: 'أقلام تحديد شفاه من فلورمار', desc: 'أقلام تحديد ناعمة وسهلة الاستخدام لشفاه جذابة ومحددة بدقة.', link: 'products.html' },
];

let currentSlide = 0;
let sliderInterval = null;

function initSlider() {
    const track = document.getElementById('sliderTrack');
    const dotsContainer = document.getElementById('sliderDots');
    if (!track) return;

    track.innerHTML = '';
    slides.forEach((slide, i) => {
        const el = document.createElement('div');
        el.className = 'slide';
        el.innerHTML = `
            <img src="${slide.img}" alt="${slide.title}" class="slide-img">
            <div class="slide-overlay">
                <div class="slide-content">
                    <span class="slide-badge">${slide.badge}</span>
                    <h2 class="slide-title">${slide.title}</h2>
                    <p class="slide-desc">${slide.desc}</p>
                    <a href="${slide.link}" class="slide-btn">
                        <i class="fa-solid fa-bag-shopping"></i> تسوقي الآن
                    </a>
                </div>
            </div>
        `;
        track.appendChild(el);
    });

    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        slides.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        });
    }

    goToSlide(0);
    startAutoPlay();
}

function goToSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    const track = document.getElementById('sliderTrack');
    if (track) track.style.transform = `translateX(${currentSlide * 100}%)`;

    document.querySelectorAll('.slider-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

function startAutoPlay() {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlide, 4500);
}

function pauseAutoPlay() { clearInterval(sliderInterval); }

function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.closest('.faq-item');
            const isOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
            if (!isOpen) item.classList.add('open');
        });
    });
}

function renderCart() {
    const container = document.getElementById('cartItemsContainer');
    const emptyDiv = document.getElementById('cartEmpty');
    const summarySection = document.getElementById('cartSummary');

    const cart = getCart();

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = '';
        if (emptyDiv) emptyDiv.style.display = 'block';
        if (summarySection) summarySection.style.display = 'none';
        return;
    }

    if (emptyDiv) emptyDiv.style.display = 'none';
    if (summarySection) summarySection.style.display = 'block';

    container.innerHTML = cart.map(item => `
        <div class="cart-item" id="cart-item-${item.id}">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='img/product1.jpg'">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-cat">${item.category}</div>
            </div>
            <div class="qty-control">
                <button class="qty-btn" onclick="changeQty(${item.id}, -1)"><i class="fa-solid fa-minus"></i></button>
                <span class="qty-value">${item.qty || 1}</span>
                <button class="qty-btn" onclick="changeQty(${item.id}, 1)"><i class="fa-solid fa-plus"></i></button>
            </div>
            <div class="cart-item-price">${(item.price * (item.qty || 1)).toLocaleString()} <span>ر.ي</span></div>
            <button class="btn-remove-item" onclick="removeItem(${item.id})" title="حذف"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    `).join('');

    const total = getCartTotal();
    const count = getCartCount();
    const subtotalEl = document.getElementById('summary-subtotal');
    const totalEl = document.getElementById('summary-total');
    const countEl = document.getElementById('summary-count');

    if (subtotalEl) subtotalEl.textContent = total.toLocaleString() + ' ر.ي';
    if (totalEl) totalEl.textContent = total.toLocaleString() + ' ر.ي';
    if (countEl) countEl.textContent = count + ' منتج';
}

function changeQty(id, delta) {
    updateQty(id, delta);
    renderCart();
}

function removeItem(id) {
    removeFromCart(id);
    renderCart();
}

let activeFilter = 'الكل';

function renderProducts(filter) {
    activeFilter = filter || 'الكل';
    const container = document.getElementById('productsGrid');
    if (!container) return;

    const filtered = activeFilter === 'الكل'
        ? allProducts
        : allProducts.filter(p => p.category === activeFilter);

    container.innerHTML = filtered.map(p => `
        <article class="product-card">
            ${p.discount ? `<span class="discount-badge">خصم ${p.discount}%</span>` : ''}
            <div class="card-image-wrapper">
                <span class="card-tag"><i class="fa-solid ${getCatIcon(p.category)}"></i> ${p.category}</span>
                <img src="${p.image}" alt="${p.name}" class="product-img" onerror="this.src='img/product1.jpg'">
                <a href="#" class="quick-view" onclick="openPayment(${p.id}, '${p.name}', ${p.price}); return false;">
                    <i class="fa-solid fa-credit-card"></i> اشتري الآن
                </a>
            </div>
            <div class="card-body">
                <h3 class="product-name">${p.name}</h3>
                <p class="product-desc">${p.desc}</p>
                <div class="card-footer-info">
                    <div class="product-price">
                        ${p.oldPrice ? `<del class="old-price">${p.oldPrice.toLocaleString()}</del> ` : ''}
                        ${p.price.toLocaleString()} <span>ر.ي</span>
                    </div>
                </div>
                <div class="card-actions">
                    <button class="btn-buy" onclick="openPayment(${p.id}, '${p.name}', ${p.price})">
                        <i class="fa-solid fa-credit-card"></i> اشتري
                    </button>
                    <button class="btn-add-cart" onclick="addToCart(${p.id}, '${p.name}', ${p.price}, '${p.image}', '${p.category}')">
                        <i class="fa-solid fa-cart-plus"></i> السلة
                    </button>
                </div>
            </div>
        </article>
    `).join('');

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === activeFilter);
    });
}

function getCatIcon(cat) {
    const icons = {
        'مكياج': 'fa-wand-magic-sparkles',
        'عناية بالبشرة': 'fa-droplet',
        'عطور': 'fa-spray-can-sparkles',
        'عطور فاخرة': 'fa-spray-can-sparkles',
    };
    return icons[cat] || 'fa-tag';
}

function renderDiscounts() {
    const container = document.getElementById('discountsGrid');
    if (!container) return;

    const discounted = allProducts.filter(p => p.discount);
    container.innerHTML = discounted.map(p => `
        <article class="product-card discount-card">
            <span class="discount-badge">خصم ${p.discount}%</span>
            <div class="card-image-wrapper">
                <span class="card-tag"><i class="fa-solid ${getCatIcon(p.category)}"></i> ${p.category}</span>
                <img src="${p.image}" alt="${p.name}" class="product-img" onerror="this.src='img/product1.jpg'">
                <a href="#" class="quick-view" onclick="openPayment(${p.id}, '${p.name}', ${p.price}); return false;">
                    <i class="fa-solid fa-credit-card"></i> اشتري الآن
                </a>
            </div>
            <div class="card-body">
                <h3 class="product-name">${p.name}</h3>
                <p class="product-desc">${p.desc}</p>
                <div class="card-footer-info">
                    <div class="product-price">
                        <del class="old-price">${p.oldPrice.toLocaleString()}</del>
                        ${p.price.toLocaleString()} <span>ر.ي</span>
                    </div>
                </div>
                <div class="card-actions">
                    <button class="btn-buy" onclick="openPayment(${p.id}, '${p.name}', ${p.price})">
                        <i class="fa-solid fa-credit-card"></i> اشتري
                    </button>
                    <button class="btn-add-cart" onclick="addToCart(${p.id}, '${p.name}', ${p.price}, '${p.image}', '${p.category}')">
                        <i class="fa-solid fa-cart-plus"></i> السلة
                    </button>
                </div>
            </div>
        </article>
    `).join('');
}

function initCountdown() {
    const el = document.getElementById('countdownTimer');
    if (!el) return;

    let target = localStorage.getItem('rozaAngel_timer');
    if (!target) {
        target = Date.now() + 24 * 60 * 60 * 1000;
        localStorage.setItem('rozaAngel_timer', target);
    }

    function update() {
        const now = Date.now();
        const diff = Math.max(0, target - now);
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);

        const fmt = n => String(n).padStart(2, '0');
        const hEl = document.getElementById('timer-h');
        const mEl = document.getElementById('timer-m');
        const sEl = document.getElementById('timer-s');
        if (hEl) hEl.textContent = fmt(h);
        if (mEl) mEl.textContent = fmt(m);
        if (sEl) sEl.textContent = fmt(s);

        if (diff <= 0) {
            localStorage.removeItem('rozaAngel_timer');
        }
    }

    update();
    setInterval(update, 1000);
}

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        showToast('تم إرسال رسالتك بنجاح! سنتواصل معكِ قريباً 💕', 'success');
        form.reset();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateAllCartCounts();
    setActiveNav();
    initMobileNav();
    initPaymentForm();
    initFAQ();
    initContactForm();

    if (document.getElementById('sliderTrack')) {
        initSlider();
        const sliderEl = document.querySelector('.hero-slider');
        if (sliderEl) {
            sliderEl.addEventListener('mouseenter', pauseAutoPlay);
            sliderEl.addEventListener('mouseleave', startAutoPlay);
        }
    }

    if (document.getElementById('productsGrid')) {
        renderProducts('الكل');
    }

    if (document.getElementById('discountsGrid')) {
        renderDiscounts();
        initCountdown();
    }

    if (document.getElementById('cartItemsContainer')) {
        renderCart();
    }
});