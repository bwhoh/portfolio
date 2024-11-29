// Infrastructure diagrams component
export const initInfrastructureDiagrams = () => {
    // Configure mermaid
    mermaid.initialize({
        startOnLoad: true,
        theme: 'neutral',
        flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: 'basis'
        }
    });

    // Microservices Architecture Diagram
    const microservicesDiagram = `
    graph TD
        subgraph Kubernetes Cluster
            A[Ingress Controller] --> B[Service Mesh]
            B --> C[Microservice A]
            B --> D[Microservice B]
            B --> E[Microservice C]
            F[Autoscaler] --> C
            F --> D
            F --> E
        end
        G[Load Balancer] --> A
        H[(Database)] <--> C
        I[(Cache)] <--> D
    `;

    // CI/CD Pipeline Diagram
    const pipelineDiagram = `
    graph LR
        A[Code Push] --> B[Build]
        B --> C[Test]
        C --> D[Security Scan]
        D --> E{Quality Gate}
        E -->|Pass| F[Stage]
        F --> G[Production]
        E -->|Fail| H[Notify]
    `;

    // Monitoring Stack Diagram
    const monitoringDiagram = `
    graph TD
        A[Applications] --> B[Prometheus]
        A --> C[Fluentd]
        B --> D[Grafana]
        C --> E[Elasticsearch]
        E --> F[Kibana]
        B --> G[Alert Manager]
        G --> H[Notification]
    `;

    // Render diagrams
    const diagrams = {
        'architecture-diagram': microservicesDiagram,
        'pipeline-diagram': pipelineDiagram,
        'monitoring-diagram': monitoringDiagram
    };

    Object.entries(diagrams).forEach(([id, diagram]) => {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = diagram;
            mermaid.render(id + '-svg', diagram).then(result => {
                element.innerHTML = result.svg;
            });
        }
    });
};