const button = document.getElementById('myButton');
const arknightsElement = document.querySelector('.arknights');
const rhodesElement = document.querySelector('.rhodes');
const images = document.querySelectorAll('.image');
const texts = document.querySelectorAll('.text'); // 获取所有需要切换显示的文字元素

// 按钮点击事件
button.addEventListener('click', () => {
    // 切换 .arknights 的显示状态
    arknightsElement.classList.toggle('active');

    // 切换 .rhodes 的显示状态
    rhodesElement.classList.toggle('active');

    // 判断图片是否已经显示
    const isAnyImageActive = Array.from(images).some(image => image.classList.contains('active'));
    const isAnyTextActive = Array.from(texts).some(text => text.classList.contains('active')); // 判断文字是否显示

    if (isAnyImageActive || isAnyTextActive) {
        // 如果图片或文字显示，隐藏所有图片和文字
        images.forEach(image => image.classList.remove('active'));
        texts.forEach(text => text.classList.remove('active')); // 隐藏所有文字
        button.textContent = 'Show All'; // 更新按钮文字
    } else {
        // 如果图片和文字都隐藏，显示所有图片和文字
        images.forEach(image => image.classList.add('active'));
        texts.forEach(text => text.classList.add('active')); // 显示所有文字
        button.textContent = 'Hide All'; // 更新按钮文字
    }

    // 可选：隐藏按钮（根据需求决定是否启用）
     button.style.display = 'none';
});
