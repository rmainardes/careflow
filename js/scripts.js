

        let chartBarra = null;
        let chartLinha = null;

      
        function mostrarGraficoPonto(tipo) {
            const divBarra = document.getElementById("graficoBarra");
            const divLinha = document.getElementById("graficoLinhaPonto");
        
            // Check if the elements exist before proceeding
            if (!divBarra || !divLinha) {
                console.warn('graficoBarra or graficoLinhaPonto not found in DOM yet.');
                return; // Exit the function if the elements are not in the DOM
            }
        
            // Destroy existing charts before switching
            if (tipo === 'bar' && chartLinha) {
                chartLinha.destroy();
                chartLinha = null;
            } else if (tipo === 'line' && chartBarra) {
                chartBarra.destroy();
                chartBarra = null;
            }
        
            // Show the correct chart
            if (tipo === 'bar') {
                divBarra.style.display = 'block';
                divLinha.style.display = 'none';
        
                if (!chartBarra) {
                    const ctxBar = divBarra.querySelector('canvas').getContext('2d'); // Ensure the canvas is inside the div
                    chartBarra = new Chart(ctxBar, {
                        type: 'bar',
                        data: {
                            labels: ['Maria', 'Carlos', 'Paulo'],
                            datasets: [{
                                label: 'Horas Trabalhadas',
                                data: [8, 8, 8],
                                backgroundColor: ['#2980b9', '#27ae60', '#f39c12']
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    ticks: { stepSize: 1 }
                                }
                            }
                        }
                    });
                }
            } else if (tipo === 'line') {
                divBarra.style.display = 'none';
                divLinha.style.display = 'block';
        
                if (!chartLinha) {
                    const ctxLinha = divLinha.querySelector('canvas').getContext('2d');
                    chartLinha = new Chart(ctxLinha, {
                        type: 'line',
                        data: {
                            labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
                            datasets: [
                                {
                                    label: 'Maria',
                                    data: [8, 8, 7, 8, 8],
                                    borderColor: '#2980b9',
                                    fill: false,
                                    tension: 0.4
                                },
                                {
                                    label: 'Carlos',
                                    data: [8, 7, 8, 7, 8],
                                    borderColor: '#27ae60',
                                    fill: false,
                                    tension: 0.4
                                },
                                {
                                    label: 'Paulo',
                                    data: [7, 8, 8, 7, 7],
                                    borderColor: '#f39c12',
                                    fill: false,
                                    tension: 0.4
                                }
                            ]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    ticks: { stepSize: 1 }
                                }
                            }
                        }
                    });
                }
            }
        }
        // Enhanced resize handler with debounce
        let resizeTimeout;
        window.addEventListener('resize', function () {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function () {
                if (chartBarra) {
                    chartBarra.resize();
                }
                if (chartLinha) {
                    chartLinha.resize();
                }
            }, 200); // 200ms debounce time
        });

        //Initialize with bar chart
        
        setTimeout(() => {
            const divBarra = document.getElementById("graficoBarra");
            if (divBarra) {
                divBarra.style.display = 'block';  // Force it visible
                mostrarGraficoPonto('bar');
            } else {
                console.warn('graficoBarra not in DOM');
            }
        }, 3000);

        

       


        function showTab(tabId) {
            // Hide all content sections
            document.querySelectorAll('.content').forEach(content => {
                content.classList.remove('visible');
                content.style.display = 'none'; // Hide
            });
        
            const tabContent = document.getElementById(tabId);
            tabContent.classList.add('visible');
            tabContent.style.display = 'block'; // Show
        
            // Highlight active tab
            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('active-tab');
            });
        
            event.target.classList.add('active-tab');
        
            // 👇 Only now is the chart container visible, so render the chart
            if (tabId === 'graficoTab') {
                requestAnimationFrame(() => {
                    mostrarGraficoPonto('bar');  // Or 'line'
                });
            }
        }
    


        
        
        
        
        
