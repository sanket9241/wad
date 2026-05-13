// Wait for the HTML document to fully load before running the script
document.addEventListener("DOMContentLoaded", function() {
    
    // Select all the links in the sidebar
    const navLinks = document.querySelectorAll('.nav-link');
    // Select all the content sections in the main area
    const contentSections = document.querySelectorAll('.content-section');

    // Loop through each navigation link
    navLinks.forEach(link => {
        
        // Add a click event listener to each link
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the link from refreshing the page

            // 1. Remove the 'active' class from ALL links
            navLinks.forEach(nav => nav.classList.remove('active'));
            
            // 2. Add the 'active' class to the link that was just clicked
            this.classList.add('active');

            // 3. Get the target section ID from the 'data-target' attribute of the clicked link
            const targetId = this.getAttribute('data-target');

            // 4. Hide ALL content sections by removing their 'active' class
            contentSections.forEach(section => section.classList.remove('active'));

            // 5. Show the specific content section that matches the target ID
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
});