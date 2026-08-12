/* =========================================================
   AWS DEVOPS ACADEMY KASHMIR
   Main Application JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       THEME - DARK / LIGHT MODE
       ===================================================== */

    const themeButton = document.getElementById("themeButton");

    function updateThemeButton() {
        if (!themeButton) return;

        if (document.body.classList.contains("dark")) {
            themeButton.textContent = "☀️";
            themeButton.setAttribute("aria-label", "Switch to light mode");
        } else {
            themeButton.textContent = "🌙";
            themeButton.setAttribute("aria-label", "Switch to dark mode");
        }
    }

    if (localStorage.getItem("academy-theme") === "dark") {
        document.body.classList.add("dark");
    }

    updateThemeButton();

    if (themeButton) {
        themeButton.addEventListener("click", function () {

            document.body.classList.toggle("dark");

            const mode =
                document.body.classList.contains("dark")
                    ? "dark"
                    : "light";

            localStorage.setItem("academy-theme", mode);

            updateThemeButton();
        });
    }


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", function () {

            mobileMenu.classList.toggle("open");

            const isOpen =
                mobileMenu.classList.contains("open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );
        });

        const menuLinks =
            mobileMenu.querySelectorAll("a");

        menuLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mobileMenu.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );
            });

        });
    }


    /* =====================================================
       COURSE DATA
       ===================================================== */

    const courses = {

        aws: {
            title: "AWS Foundation",
            icon: "☁️",
            fee: "1999",

            description:
                "Learn AWS fundamentals through practical cloud projects.",

            syllabus: [
                "Introduction to Cloud Computing",
                "AWS Console",
                "EC2",
                "S3",
                "IAM",
                "VPC Basics",
                "Security Groups",
                "CloudWatch",
                "Deploying a Website"
            ]
        },

        linux: {
            title: "Linux Foundation",
            icon: "🐧",
            fee: "1999",

            description:
                "Learn Linux commands, files, permissions and server management.",

            syllabus: [
                "Linux Fundamentals",
                "Terminal Commands",
                "Files and Directories",
                "Users and Groups",
                "File Permissions",
                "Processes",
                "Networking",
                "Package Management",
                "Server Administration"
            ]
        },

        git: {
            title: "Git & GitHub",
            icon: "🔧",
            fee: "1999",

            description:
                "Learn version control and professional GitHub workflows.",

            syllabus: [
                "Git Fundamentals",
                "Repositories",
                "git status",
                "git add",
                "git commit",
                "Branches",
                "Merging",
                "GitHub",
                "SSH Authentication",
                "Pull Requests"
            ]
        },

        devops: {
            title: "DevOps Foundation",
            icon: "🚀",
            fee: "2999",

            description:
                "Build practical DevOps skills from Linux to CI/CD.",

            syllabus: [
                "Linux",
                "Git",
                "GitHub",
                "AWS",
                "Docker",
                "CI/CD",
                "GitHub Actions",
                "Jenkins",
                "Monitoring",
                "Automation",
                "Real Projects"
            ]
        }

    };


    /* =====================================================
       COURSE MODAL
       ===================================================== */

    const courseModal =
        document.getElementById("courseModal");

    const courseContent =
        document.getElementById("courseContent");

    window.showCourse = function (courseName) {

        const course = courses[courseName];

        if (!course) {
            console.error(
                "Course not found:",
                courseName
            );
            return;
        }

        if (!courseModal || !courseContent) {
            alert(
                course.title +
                "\n\nFee: ₹" +
                course.fee +
                "\n\n" +
                course.description
            );

            return;
        }

        let syllabusHTML = "";

        course.syllabus.forEach(function (item, index) {

            syllabusHTML += `
                <li>
                    <span>${index + 1}</span>
                    ${item}
                </li>
            `;

        });

        courseContent.innerHTML = `

            <div class="course-modal-header">

                <div class="course-icon">
                    ${course.icon}
                </div>

                <div>
                    <h2>${course.title}</h2>

                    <p>
                        ${course.description}
                    </p>
                </div>

            </div>

            <div class="course-price">

                <span>Course Fee</span>

                <strong>
                    ₹${course.fee}
                </strong>

            </div>

            <h3>
                📚 Course Syllabus
            </h3>

            <ul class="course-syllabus">
                ${syllabusHTML}
            </ul>

            <div class="course-actions">

                <a
                    href="tel:+919622821316"
                    class="btn-primary"
                >
                    📞 Call
                </a>

                <a
                    href="https://wa.me/919622821316"
                    target="_blank"
                    rel="noopener"
                    class="btn-secondary"
                >
                    💬 WhatsApp
                </a>

            </div>

        `;

        courseModal.classList.add("open");

        document.body.classList.add("modal-open");
    };


    window.closeCourse = function () {

        if (!courseModal) return;

        courseModal.classList.remove("open");

        document.body.classList.remove("modal-open");
    };


    /* =====================================================
       NOTES
       ===================================================== */

    const notes = {

        aws: `
            <h2>☁️ AWS Beginner Notes</h2>

            <h3>What is AWS?</h3>

            <p>
                AWS is a cloud computing platform providing
                services for computing, storage, networking
                and many other cloud workloads.
            </p>

            <h3>Important Services</h3>

            <ul>
                <li>EC2 — Virtual servers</li>
                <li>S3 — Object storage</li>
                <li>IAM — Identity management</li>
                <li>VPC — Virtual networking</li>
                <li>CloudWatch — Monitoring</li>
            </ul>

            <h3>Beginner Project</h3>

            <p>
                Launch an EC2 instance, connect using SSH
                and deploy a simple website.
            </p>
        `,

        linux: `
            <h2>🐧 Linux Beginner Notes</h2>

            <h3>Important Commands</h3>

            <pre>
pwd
ls
cd
mkdir
touch
cat
cp
mv
rm
chmod
sudo
            </pre>

            <h3>Practice</h3>

            <pre>
mkdir myproject
cd myproject
touch index.html
ls -l
            </pre>
        `,

        git: `
            <h2>🔧 Git & GitHub Notes</h2>

            <h3>Basic Workflow</h3>

            <pre>
git status
git add .
git commit -m "message"
git push
            </pre>

            <h3>Branches</h3>

            <pre>
git branch
git branch -M main
git checkout -b feature
            </pre>
        `,

        devops: `
            <h2>🚀 DevOps Beginner Notes</h2>

            <h3>DevOps Roadmap</h3>

            <p>
                Linux → Git → GitHub → AWS →
                Docker → CI/CD → Automation
            </p>

            <h3>Important Areas</h3>

            <ul>
                <li>Linux</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>AWS</li>
                <li>Docker</li>
                <li>CI/CD</li>
                <li>Monitoring</li>
                <li>Automation</li>
            </ul>
        `

    };


    const notesModal =
        document.getElementById("notesModal");

    const notesContent =
        document.getElementById("notesContent");


    window.openNotes = function (type) {

        if (!notes[type]) {
            console.error(
                "Notes not found:",
                type
            );
            return;
        }

        if (!notesModal || !notesContent) {
            alert(
                "Notes section is not available yet."
            );
            return;
        }

        notesContent.innerHTML =
            notes[type];

        notesModal.classList.add("open");

        document.body.classList.add("modal-open");
    };


    window.closeNotes = function () {

        if (!notesModal) return;

        notesModal.classList.remove("open");

        document.body.classList.remove("modal-open");
    };


    /* =====================================================
       MODAL CLICK OUTSIDE
       ===================================================== */

    window.addEventListener("click", function (event) {

        if (
            courseModal &&
            event.target === courseModal
        ) {
            closeCourse();
        }

        if (
            notesModal &&
            event.target === notesModal
        ) {
            closeNotes();
        }

    });


    /* =====================================================
       ESCAPE KEY
       ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeCourse();
                closeNotes();

            }

        }
    );


    /* =====================================================
       CONTACT / WELCOME
       ===================================================== */

    window.showWelcome = function () {

        alert(
            "👋 Welcome to AWS DevOps Academy Kashmir!\n\n" +

            "Learn AWS, Linux, Git, GitHub and DevOps " +
            "through practical training and projects.\n\n" +

            "📍 Srinagar, Jammu & Kashmir\n\n" +

            "📞 +91 9622821316\n" +
            "📞 +91 8899867901\n\n" +

            "📧 mirjunaidulislam21@gmail.com"
<div class="contact-actions">

    <a href="tel:+919622821316" class="contact-button">
        📞 Call Now
    </a>

    <a href="mailto:mirjunaidulislam21@gmail.com" class="contact-button">
        📧 Email Me
    </a>

    <a
        href="https://wa.me/919622821316?text=Hello%20Junaid%20Academy%2C%20I%20am%20interested%20in%20your%20AWS%20and%20DevOps%20courses."
        class="contact-button whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
    >
        💬 WhatsApp
    </a>

</div>
        );

    };


    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetID =
                    this.getAttribute("href");

                if (
                    targetID &&
                    targetID !== "#"
                ) {

                    const target =
                        document.querySelector(targetID);

                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }

            }
        );

    });


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    document.querySelectorAll(
        ".current-year"
    ).forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });


    /* =====================================================
       CONSOLE MESSAGE
       ===================================================== */

    console.log(
        "🚀 AWS DevOps Academy Kashmir loaded."
    );

});
