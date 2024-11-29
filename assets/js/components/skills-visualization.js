// Skills visualization component
export const initSkillsVisualization = () => {
    // Setup chart data
    const skillsData = {
        labels: [
            'Cloud Platforms',
            'Container Orchestration',
            'CI/CD',
            'Infrastructure as Code',
            'Monitoring & Logging',
            'Scripting'
        ],
        datasets: [{
            label: 'Skill Level',
            data: [95, 90, 85, 88, 82, 87],
            backgroundColor: 'rgba(99, 102, 241, 0.2)',
            borderColor: 'rgb(99, 102, 241)',
            pointBackgroundColor: 'rgb(99, 102, 241)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(99, 102, 241)'
        }]
    };

    // Initialize radar chart
    const ctx = document.getElementById('skills-radar');
    if (ctx) {
        new Chart(ctx, {
            type: 'radar',
            data: skillsData,
            options: {
                responsive: true,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20
                        }
                    }
                }
            }
        });
    }

    // Initialize progress bars animation
    const progressBars = document.querySelectorAll('.skill-progress');
    progressBars.forEach(bar => {
        const value = bar.dataset.value;
        bar.style.width = `${value}%`;
    });
};