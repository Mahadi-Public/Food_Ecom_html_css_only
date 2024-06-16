// JavaScript to toggle visibility of additional product cards
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleProducts');
    const extraProducts = document.querySelectorAll('.extra-product');

    toggleButton.addEventListener('click', function() {
        extraProducts.forEach(function(card) {
            card.style.display = (card.style.display === 'none' || card.style.display === '') ? 'block' : 'none';
        });

        // Change button text based on visibility state
        if (toggleButton.innerHTML = 'See More Products') {
            toggleButton.innerHTML = 'See Less Products';
            if (toggleButton.innerHTML = 'See Less Products'){
                toggleButton.innerHTML = 'See More Products';
            }
        } 
    });
});


// forms submite functions
function handleSubmit(event) {
    event.preventDefault();

    let email = document.getElementById("email-input").value;

    let successContainer = document.getElementById("success_container");

    let message = document.createElement("p");
    message.innerText = `Successfully subscribed email`;
    
    // Clear previous messages
    successContainer.innerHTML = '';
    successContainer.appendChild(message);
}