// Function to inject the popup HTML and CSS into the page
(function() {
  // Create the popup container
  const popupContainer = document.createElement('div');
  popupContainer.id = 'email-popup';
  popupContainer.style.display = 'none'; // Initially hidden
  popupContainer.style.position = 'fixed';
  popupContainer.style.top = '0';
  popupContainer.style.left = '0';
  popupContainer.style.width = '100%';
  popupContainer.style.height = '100%';
  popupContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  popupContainer.style.justifyContent = 'center';
  popupContainer.style.alignItems = 'center';
  popupContainer.style.zIndex = '1000';
  
  // Create the popup content
  popupContainer.innerHTML = `
    <div style="background-color: #fff; padding: 20px; border-radius: 10px; text-align: center; width: 300px; box-shadow: 0 0 15px rgba(0, 0, 0, 0.2); position: relative;">
      <span id="close-popup-btn" style="position: absolute; top: 10px; right: 10px; font-size: 24px; cursor: pointer; color: #333;">&times;</span>
      <h2>Subscribe to our Newsletter</h2>
      <p>Stay updated with our latest news and offers.</p>
      <form id="email-form">
        <input type="email" id="email-input" placeholder="Enter your email" required style="width: 80%; padding: 10px; margin-top: 10px; border: 1px solid #ddd; border-radius: 5px;">
        <button type="submit" style="padding: 10px 20px; margin-top: 10px; background-color: #28a745; color: #fff; border: none; border-radius: 5px; cursor: pointer;">Subscribe</button>
      </form>
    </div>
  `;

  // Append the popup to the body
  document.body.appendChild(popupContainer);

  // Function to show the popup
  function showPopup() {
    popupContainer.style.display = 'flex';
  }

  // Function to hide the popup
  function hidePopup() {
    popupContainer.style.display = 'none';
  }

  // Show the popup after 3 seconds
  setTimeout(showPopup, 3000);

  // Add event listener to close button
  document.getElementById('close-popup-btn').addEventListener('click', hidePopup);

  // Add event listener for form submission
  document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('email-input').value;
    
    if (emailInput) {
      alert("Thank you for subscribing!");
      hidePopup();
      // Here you can add your code to handle the email input, e.g., send it to your server or email marketing service.
    } else {
      alert("Please enter a valid email address.");
    }
  });
})();
