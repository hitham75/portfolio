document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const boxTextInput = document.getElementById('boxText');
    const boxRadiusInput = document.getElementById('boxRadius');
    const themeColorSelect = document.getElementById('themeColor');
    
    const previewCard = document.getElementById('previewCard');
    const targetText = document.getElementById('targetText');

    // 1. Text Customization Logic
    boxTextInput.addEventListener('input', (e) => {
        targetText.textContent = e.target.value || "Empty Canvas";
    });

    // 2. Numeric Field Constraints & Real-time Update
    boxRadiusInput.addEventListener('input', (e) => {
        let val = parseInt(e.target.value);
        if (isNaN(val) || val < 0) val = 0;
        if (val > 50) val = 50; // Set explicit cap
        
        previewCard.style.borderRadius = val + 'px';
    });

    // 3. Dynamic Theme Parameters Select Change
    themeColorSelect.addEventListener('change', (e) => {
        const selectedColor = e.target.value;
        previewCard.style.borderColor = selectedColor;
        
        // Dynamic micro-glowing interaction change
        previewCard.style.boxShadow = `0 10px 30px ${selectedColor}22`;
    });
});