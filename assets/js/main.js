// Main application entry point
document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    initThemeToggle();
    initNavigation();
    loadSkills();
    loadProjects();
    initializeAnimations();
});

// Theme Toggle functionality
const initThemeToggle = () => {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Check for saved theme preference
    const isDark = localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    html.classList.toggle('dark', isDark);
    
    themeToggle?.addEventListener('click', () => {
        html.classList.toggle('dark');
        localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
    });
};

// Smooth scroll navigation
const initNavigation = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile menu toggle
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuButton?.addEventListener('click', () => {
        mobileMenu?.classList.toggle('hidden');
    });
};

// Initialize animations
const initializeAnimations = () => {
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                entry.target.classList.remove('opacity-0');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.1
    });

    // Observe all animated elements
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        element.classList.add('opacity-0');
        observer.observe(element);
    });
};

// Load and render skills section
const loadSkills = () => {
    const skills = [
        { name: 'CI/CD', icon: 'rocket', level: 'Expert', description: 'Jenkins, GitLab CI, GitHub Actions' },
        { name: 'Cloud', icon: 'cloud', level: 'Expert', description: 'AWS, Azure, GCP' },
        { name: 'Infrastructure as Code', icon: 'code', level: 'Advanced', description: 'Terraform, CloudFormation' },
        { name: 'Containers', icon: 'box', level: 'Expert', description: 'Docker, Kubernetes' },
        { name: 'Monitoring', icon: 'chart', level: 'Advanced', description: 'Prometheus, Grafana, ELK' },
        { name: 'Scripting', icon: 'terminal', level: 'Expert', description: 'Python, Bash, PowerShell' }
    ];

    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) return;

    skillsContainer.innerHTML = skills.map(skill => `
        <div class="skill-card animate-on-scroll">
            <div class="skill-icon">${skill.icon}</div>
            <h3 class="skill-title">${skill.name}</h3>
            <span class="skill-level">${skill.level}</span>
            <p class="skill-description">${skill.description}</p>
        </div>
    `).join('');
};

// Load and render projects section
const loadProjects = () => {
    const projects = [
        {
            title: 'Cloud Infrastructure Automation',
            description: 'Automated AWS infrastructure deployment using Terraform and Ansible',
            tags: ['AWS', 'Terraform', 'Ansible'],
            link: '#'
        },
        {
            title: 'Kubernetes Platform',
            description: 'Production-grade Kubernetes cluster with monitoring and auto-scaling',
            tags: ['Kubernetes', 'Docker', 'Prometheus'],
            link: '#'
        },
        {
            title: 'CI/CD Pipeline',
            description: 'Optimized deployment pipeline reducing deployment time by 70%',
            tags: ['Jenkins', 'Docker', 'GitLab'],
            link: '#'
        }
    ];

    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;

    projectsContainer.innerHTML = projects.map(project => `
        <div class="project-card animate-on-scroll">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" class="project-link">Learn More →</a>
            </div>
        </div>
    `).join('');
};