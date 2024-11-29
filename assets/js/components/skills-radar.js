// Using Chart.js for the radar chart
import { Chart } from 'https://cdn.jsdelivr.net/npm/chart.js@4.4.1/+esm';

export const initSkillsRadar = () => {
    const ctx = document.getElementById('skills-radar').getContext('2d');
    
    const data = {
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
            fill: true,
            backgroundColor: 'rgba(99, 102, 241, 0.2)',
            borderColor: 'rgb(99, 102, 241)',
            pointBackgroundColor: 'rgb(99, 102, 241)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(99, 102, 241)'
        }]
    };

    const config = {
        type: 'radar',
        data: data,
        options: {
            responsive: true,
            scales: {
                r: {
                    angleLines: {
                        display: true,
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    };

    new Chart(ctx, config);
};