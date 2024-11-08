// Check if we are on the correct page
if (window.location.href === 'chrome-extension://ejklpmiadilgeabpklkickjghjegcblj/popup/index.html') {
    // Apply night mode styles
    document.body.style.backgroundColor = '#121212'; // Dark background
    document.body.style.color = '#ffffff';           // Light text color

    // Optional: Apply night mode styles to specific elements
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
        element.style.backgroundColor = '#121212';
        element.style.color = '#ffffff';
    });
}
