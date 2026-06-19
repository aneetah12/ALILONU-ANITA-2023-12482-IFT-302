const pdfFiles = [
    {
        title: "Building Modern Web Applications Using Angular",
        desc: "Learn to create rich, single-page applications with the Angular framework.",
        icon: "fa-brands fa-angular",
        filename: "building-modern-web-applications-using-angular.9781785880728.73223.pdf"
    },
    {
        title: "Introduction to Web Development Notes",
        desc: "Web fundamentals, best practices, and introduction to core technologies.",
        icon: "fa-solid fa-code",
        filename: "Web Development Training Notes_ Introduction to Web Development - DEV Community.pdf"
    },
    {
        title: "Overview of WAP (Lecture 1)",
        desc: "Understanding Wireless Application Protocol and mobile networks.",
        icon: "fa-solid fa-wifi",
        filename: "Lecture 1-Overview of WAP.pdf"
    },
    {
        title: "REAL IFT 302 Notes",
        desc: "In-depth course notes focusing on advanced programming paradigms.",
        icon: "fa-solid fa-book-journal-whills",
        filename: "REAL IFT 302 Notes.pdf"
    },
    {
        title: "Introduction to MySQL",
        desc: "A comprehensive guide to managing relational databases and schemas.",
        icon: "fa-solid fa-database",
        filename: "Introduction to MySQL.pdf"
    },
    {
        title: "XML Basics",
        desc: "Understand data storage and transport with Extensible Markup Language.",
        icon: "fa-solid fa-file-code",
        filename: "XML Basics.pdf"
    },
    {
        title: "MC7501 Web Application Development",
        desc: "Enterprise-level web development strategies and architecture.",
        icon: "fa-solid fa-network-wired",
        filename: "MC7501-WEB-APPLICATION-DEVELOPMENT.pdf"
    },
    {
        title: "Introduction to jQuery",
        desc: "Master DOM manipulation and event handling with the jQuery library.",
        icon: "fa-brands fa-js",
        filename: "1.06-jQuery-Intro.pdf"
    },
    {
        title: "JavaScript Basics (Part 1)",
        desc: "Learn the core programming language that powers the dynamic web.",
        icon: "fa-brands fa-square-js",
        filename: "javascript1.pdf"
    }
];

// UI Generation
const libraryGrid = document.getElementById('libraryGrid');
const searchBar = document.getElementById('searchBar');

function displayPDFs(pdfs) {
    libraryGrid.innerHTML = '';
    
    if (pdfs.length === 0) {
        libraryGrid.innerHTML = '<p style="text-align:center; grid-column: 1/-1; font-size: 1.2rem; color: var(--text-main);">No resources found matching your search.</p>';
        return;
    }

    pdfs.forEach(pdf => {
        const card = document.createElement('div');
        card.className = 'pdf-card';
        card.innerHTML = `
            <div class="card-icon"><i class="${pdf.icon}"></i></div>
            <h2>${pdf.title}</h2>
            <p>${pdf.desc}</p>
            <a href="${pdf.filename}" class="download-btn" download>
                <i class="fa-solid fa-download"></i> Download
            </a>
        `;
        libraryGrid.appendChild(card);
    });
}

displayPDFs(pdfFiles);

searchBar.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filteredPDFs = pdfFiles.filter(pdf => 
        pdf.title.toLowerCase().includes(term) || 
        pdf.desc.toLowerCase().includes(term)
    );
    displayPDFs(filteredPDFs);
});

// Theme Toggle Logic
const themeToggleBtn = document.getElementById('themeToggle');
const icon = themeToggleBtn.querySelector('i');

// Check local storage for saved theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
}

themeToggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'light') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});