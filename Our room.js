const button = document.getElementById('myButton');
const arknightsElement = document.querySelector('.arknights');
const rhodesElement = document.querySelector('.rhodes');
const images = document.querySelectorAll('.image');

// 按钮点击事件
button.addEventListener('click', () => {
    // 切换 .arknights 的显示状态
    arknightsElement.classList.toggle('active');

    // 切换 .rhodes 的显示状态
    rhodesElement.classList.toggle('active');

    // 判断图片是否已经显示
    const isActive = Array.from(images).some(image => image.classList.contains('active'));
    if (isActive) {
        // 隐藏所有图片
        images.forEach(image => image.classList.remove('active'));
        button.textContent = 'Show All'; // 更新按钮文字
    } else {
        // 显示所有图片
        images.forEach(image => image.classList.add('active'));
        button.textContent = 'Hide All'; // 更新按钮文字
    }

    // 最后隐藏按钮（如果需要）
     button.style.display = 'none';
});
