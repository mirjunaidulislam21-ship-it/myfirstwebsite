// ================= THEME =================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeButton.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeButton.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});


// Remember theme

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    themeButton.textContent = "☀️";

}


// ================= NOTES =================

const notes = {

    aws: `
        <h2>☁️ AWS Beginner Notes</h2>

        <h3>What is AWS?</h3>

        <p>
        Amazon Web Services is a cloud platform that provides
        computing, storage, networking and many other services.
        </p>

        <h3>Important AWS Services</h3>

        <ul>
            <li>EC2 — Virtual servers</li>
            <li>S3 — Object storage</li>
            <li>IAM — Identity and access management</li>
            <li>VPC — Virtual networking</li>
            <li>CloudWatch — Monitoring</li>
        </ul>

        <h3>First Goal</h3>

        <p>
        Learn how to launch an EC2 instance, connect using SSH
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
nano
cat
cp
mv
rm
sudo
        </pre>

        <h3>Example</h3>

        <pre>
mkdir myproject
cd myproject
touch index.html
ls -l
        </pre>

        <p>
        Practice commands every day until the terminal becomes
        comfortable.
        </p>
    `,


    git: `
        <h2>🔧 Git & GitHub Notes</h2>

        <h3>Basic Workflow</h3>

        <pre>
git init
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

        <h3>Remember</h3>

        <p>
        Git tracks changes locally. GitHub stores and shares
        your repository remotely.
        </p>
    `,


    devops: `
        <h2>🚀 DevOps Beginner Notes</h2>

        <h3>What is DevOps?</h3>

        <p>
        DevOps combines development and operations practices
        to deliver software faster and more reliably.
        </p>

        <h3>Important Areas</h3>

        <ul>
            <li>Linux</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>CI/CD</li>
            <li>Docker</li>
            <li>Cloud</li>
            <li>Automation</li>
        </ul>

        <h3>Typical Journey</h3>

        <p>
        Linux → Git → GitHub → Cloud → Docker → CI/CD → DevOps
        </p>
    `
};


function openNotes(type) {

    const modal = document.getElementById("notesModal");

    const content = document.getElementById("notesContent");

    content.innerHTML = notes[type];

    modal.style.display = "block";

}


function closeNotes() {

    document.getElementById("notesModal").style.display = "none";

}


window.addEventListener("click", function(event) {

    const modal = document.getElementById("notesModal");

    if (event.target === modal) {

        closeNotes();

    }

});
