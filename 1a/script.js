const links = document.querySelectorAll(".menu-link");
const content = document.getElementById("dynamic-content");

links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    let page = this.getAttribute("data-page");

    if (page === "dashboard") {
      content.innerHTML = "<h3>Welcome to Dashboard</h3><p>Overview of college statistics.</p>";
    }

    else if (page === "students") {
      content.innerHTML = `
        <h3>Students List</h3>
        <ul class="list-group">
          <li class="list-group-item">Rahul Sharma</li>
          <li class="list-group-item">Anita Patil</li>
          <li class="list-group-item">Amit Kumar</li>
        </ul>
      `;
    }

    else if (page === "exams") {
      content.innerHTML = `
        <h3>Exam Schedule</h3>
        <p>Mid-term Exam: 20 June 2026</p>
        <p>Final Exam: 15 December 2026</p>
      `;
    }

    else if (page === "settings") {
      content.innerHTML = `
        <h3>Settings</h3>
        <p>Update profile, change password, and system preferences.</p>
      `;
    }
  });
});