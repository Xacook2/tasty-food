document.addEventListener('DOMContentLoaded', () => {
    // Default to Metric units
    toggleUnits('metric');

    // Toggle between Metric and Imperial units when buttons are clicked
    document.querySelector('.btn-metric').onclick = () => toggleUnits('metric');
    document.querySelector('.btn-imperial').onclick = () => toggleUnits('imperial');

    // Cross out ingredients when checkboxes are clicked
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => 
        cb.onchange = () => cb.nextElementSibling.classList.toggle('crossed-out', cb.checked)
    );
});

function toggleUnits(unit) {
    document.querySelectorAll('.metric').forEach(item => item.style.display = unit === 'metric' ? 'list-item' : 'none');
    document.querySelectorAll('.imperial').forEach(item => item.style.display = unit === 'imperial' ? 'list-item' : 'none');
}
