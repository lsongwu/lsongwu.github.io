document.addEventListener('DOMContentLoaded', () => {
    const imageGallery = document.getElementById('image-gallery');
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    const popupText = document.getElementById('popup-text');
    const closeButton = document.getElementById('close-button');

    // Fetch image data from JSON file
    fetch('image-data.json')
        .then(response => response.json())
        .then(images => {
            // Create image elements and add to the gallery (same as before)
            images.forEach(image => {
                const wrapper = document.createElement('div');
                wrapper.classList.add('image-wrapper');

                const link = document.createElement('a');
                link.href = "#"; 

                const img = document.createElement('img');
                img.src = image.src;
                img.alt = image.alt;

                link.appendChild(img);
                wrapper.appendChild(link);
                imageGallery.appendChild(wrapper);

                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    popupImage.src = image.src;
                    popupText.innerHTML = image.alt; 
                    popup.style.display = 'flex';
                });
            });
        })
        .catch(error => {
            console.error('Error loading image data:', error);
        });

    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });
    popup.addEventListener('click', (event) => {
        if (event.target === popup) { 
            popup.style.display = 'none';
        }
    });
});