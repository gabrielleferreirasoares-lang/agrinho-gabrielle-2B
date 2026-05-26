document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica 1: Alternador de Tema (Claro / Escuro) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            themeToggleBtn.textContent = '🌱 Alternar Tema';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggleBtn.textContent = '☀️ Modo Claro';
        }
    });

    // --- Lógica 2: Simulador Sustentável ---
    const btnCalcular = document.getElementById('btn-calcular');
    const inputHectares = document.getElementById('hectares');
    const resultBox = document.getElementById('resultado');
    const resAgua = document.getElementById('res-agua');
    const resCo2 = document.getElementById('res-co2');

    btnCalcular.addEventListener('click', () => {
        const hectares = parseFloat(inputHectares.value);

        if (isNaN(hectares) || hectares <= 0) {
            alert('Por favor, insira um número válido de hectares superior a zero.');
            return;
        }

        // Multiplicadores fictícios baseados em dados de agricultura de precisão
        // Economia média anual por hectare: 12.000 litros de água e 45kg de CO2 evitados
        const aguaEconomizada = hectares * 12000;
        const co2Reduzido = hectares * 45;

        // Inserindo os valores calculados formatados na pontuação brasileira
        resAgua.textContent = aguaEconomizada.toLocaleString('pt-BR');
        resCo2.textContent = co2Reduzido.toLocaleString('pt-BR');

        // Exibe a caixa de resultado removendo a classe 'hidden'
        resultBox.classList.remove('hidden');
    });

    // --- Lógica 3: Validação e Envio do Formulário de Contato ---
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o recarregamento da página

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        if (nome && email && mensagem) {
            // Simulação de envio com feedback visual de sucesso
            alert(`Obrigado pelo contato, ${nome}! Sua mensagem sobre o agro sustentável foi enviada com sucesso de forma fictícia.`);
            contactForm.reset(); // Limpa os campos do formulário
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    });
});
