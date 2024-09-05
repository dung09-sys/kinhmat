// JavaScript để xử lý giỏ hàng
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price').textContent;
        
        // Thêm sản phẩm vào giỏ hàng
        const cartItems = document.getElementById('cart-items');
        const newItem = document.createElement('li');
        newItem.textContent = `${productName} - ${productPrice}`;
        cartItems.appendChild(newItem);
        
        // Cập nhật tổng giá
        updateTotalPrice();
    });
});

function updateTotalPrice() {
    const prices = Array.from(document.querySelectorAll('#cart-items li'))
        .map(item => parseFloat(item.textContent.split(' - ')[1].replace(' VNĐ', '').replace(/,/g, '')))
        .reduce((acc, price) => acc + price, 0);
    
    document.getElementById('total-price').textContent = `Tổng giá: ${prices.toLocaleString()} VNĐ`;
}
