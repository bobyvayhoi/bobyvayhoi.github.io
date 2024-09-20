// Lấy các phần tử từ HTML
const numberElement = document.getElementById('number');
const cardTitle = document.getElementById('cardTitle');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const loiMuonNoi = [
    'toi la ai', 
    'toi o dau', 
    'toi thich ai'
]

// Biến để lưu trữ số hiện tại
let currentNumber = 0;
numberElement.textContent = loiMuonNoi[currentNumber]
cardTitle.textContent = '#'+currentNumber

// Gắn sự kiện 'click' cho nút
increaseBtn.addEventListener('click', function() {
    currentNumber += 1; // Tăng số lên 1
    numberElement.textContent = loiMuonNoi[currentNumber]; // Cập nhật hiển thị số trên HTML
    cardTitle.textContent = '#'+currentNumber
});

decreaseBtn.addEventListener('click', function() {
    if(currentNumber > 0) {
        currentNumber -= 1; // Tăng số lên 1
        numberElement.textContent = loiMuonNoi[currentNumber]; // Cập nhật hiển thị số trên HTML
        cardTitle.textContent = '#'+currentNumber
    } else {
        cardTitle.textContent = 'Chị đừng có lùi nữa'
        numberElement.textContent = '';
    }
    if (currentNumber == 0) currentNumber -= 1
});