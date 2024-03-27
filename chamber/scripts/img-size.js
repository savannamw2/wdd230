window.addEventListener('DOMContentLoaded', (event) => {
    const imageSizeLabel = document.getElementById('imageSizeLabel');
    const image = document.querySelector('.hero img');

    function updateImageLabel() {
        const imageSize = image.offsetWidth;
        if (imageSize <= 480) {
            imageSizeLabel.textContent = "small";
        } else if (imageSize <= 768) {
            imageSizeLabel.textContent = "medium";
        } else {
            imageSizeLabel.textContent = "large";
        }
    }

    window.addEventListener('resize', updateImageLabel);
    updateImageLabel(); // Initial label update
});