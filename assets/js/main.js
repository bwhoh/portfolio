// Theme Management
const themeToggle = {
    init() {
        const toggle = document.getElementById('theme-toggle');
        const isDark = localStorage.theme === 'dark' || 
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

        document.documentElement.classList.toggle('dark', isDark);
        this.updateIcon(isDark);

        toggle?.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.theme = isDark ? 'dark' : 'light';
            this.updateIcon(isDark);
        });
    },

    updateIcon(isDark) {
        const toggle = document.getElementById('theme-toggle');
        if (!toggle) return;
        
        toggle.innerHTML = isDark ? 
            '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>' :
            '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>';
    }
};

// Navigation Component
const navigation = {
    init() {
        this.initMobileMenu();
        this.initSmoothScroll();
        this.initScrollSpy();
    },

    initMobileMenu() {
        const menuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        menuButton?.addEventListener('click', () => {
            const isHidden = mobileMenu?.classList.contains('hidden');
            mobileMenu?.classList.toggle('hidden', !isHidden);
            
            // Update button icon
            menuButton.innerHTML = isHidden ?
                '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>' :
                '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>';
        });
    },

    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                target?.scrollIntoView({ behavior: 'smooth' });
                
                // Close mobile menu if open
                document.getElementById('mobile-menu')?.classList.add('hidden');
            });
        });
    },

    initScrollSpy() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('text-indigo-600', 'dark:text-indigo-400');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('text-indigo-600', 'dark:text-indigo-400');
                }
            });
        });
    }
};

// Skills Component
const skills = {
    data: [
        {
            name: 'CI/CD',
            level: 'Expert',
            description: 'Jenkins, GitLab CI, GitHub Actions',
            icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'
        },
        {
            name: 'Cloud Services',
            level: 'Expert',
            description: 'AWS, Azure, GCP',
            icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>'
        },
        {
            name: 'Infrastructure as Code',
            level: 'Expert',
            description: 'Terraform, CloudFormation, Ansible',
            icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>'
        },
        {
            name: 'Containerization',
            level: 'Expert',
            description: 'Docker, Kubernetes, Container Security',
            icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>'
        },
        {
            name: 'Monitoring & Logging',
            level: 'Advanced',
            description: 'Prometheus, Grafana, ELK Stack',
            icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5M8 8v8m8 0h1m-1 0h-2m-4 0H9m-4 0h1m-1 0h2m8-8h1m-1 0h-2m-4 0H9m-4 0h1m-1 0h2m8 4h1m-1 0h-2m-4 0H9m-4 0h1m-1 0h2"/></svg>'
        },
        {
            name: 'Security & Compliance',
            level: 'Advanced',
            description: 'DevSecOps, Compliance Automation',
            icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>'
        }
    ],

    init() {
        const container = document.getElementById('skills-container');
        if (!container) return;

        container.innerHTML = this.data.map(skill => `
            <div class="skill-card animate-on-scroll">
                <div class="flex items-center mb-4">
                    <div class="flex-shrink-0 text-indigo-600 dark:text-indigo-400">
                        ${skill.icon}
                    </div>
                    <div class="ml-4">
                        <h3 class="text-lg font-semibold">${skill.name}</h3>
                        <span class="text-sm text-indigo-600 dark:text-indigo-400">${skill.level}</span>
                    </div>
                </div>
                <p class="text-gray-600 dark:text-gray-300">${skill.description}</p>
            </div>
        `).join('');
    }
};

// Projects Component
const projects = {
    data: [
        {
            title: 'Cloud Infrastructure Automation',
            description: 'Automated cloud infrastructure deployment using Terraform and Ansible, reducing provisioning time by 80%',
            tags: ['AWS', 'Terraform', 'Ansible'],
            link: '#'
        },
        {
            title: 'Kubernetes Platform',
            description: 'Designed and implemented a production-grade Kubernetes platform with auto-scaling and monitoring',
            tags: ['Kubernetes', 'Docker', 'Prometheus'],
            link: '#'
        },
        {
            title: 'CI/CD Pipeline Optimization',
            description: 'Rebuilt CI/CD pipelines reducing deployment time from 45 minutes to 12 minutes',
            tags: ['Jenkins', 'Docker', 'GitLab'],
            link: '#'
        }
    ],

    init() {
        const container = document.getElementById('projects-container');
        if (!container) return;

        container.innerHTML = this.data.map(project => `
            <div class="project-card animate-on-scroll">
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-3">${project.title}</h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.tags.map(tag => `
                            <span class="px-3 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                                ${tag}
                            </span>
                        `).join('')}
                    </div>
                    <a href="${project.link}" class="inline-flex items-center text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">
                        Learn More
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </a>
                </div>
            </div>
        `).join('');
    }
};

// Animation Component
const animations = {
    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            el.classList.add('transform', 'transition-all', 'duration-500', 'opacity-0', 'translate-y-8');
            observer.observe(el);
        });
    }
};

// Contact Form Component
const contactForm = {
    init() {
        const form = document.querySelector('form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thanks for your message! This is a demo form.');
        });
    }
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    themeToggle.init();
    navigation.init();
    skills.init();
    projects.init();
    animations.init();
    contactForm.init();
});