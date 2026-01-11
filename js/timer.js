// ⚠️ IMPORTANTE: Altere estas datas para as suas datas reais!
// Formato: 'YYYY-MM-DD HH:mm:ss'
const dataConversa = new Date('2024-01-15 14:30:00');
const dataNamoro = new Date('2024-03-20 19:00:00');

/**
 * Calcula o tempo decorrido desde uma data inicial
 * @param {Date} dataInicio - Data de início
 * @returns {Object} Objeto com meses, dias, horas e minutos
 */
function calcularTempo(dataInicio) {
    const agora = new Date();
    const diff = agora - dataInicio;

    // Cálculos
    const minutos = Math.floor(diff / 1000 / 60);
    const horas = Math.floor(diff / 1000 / 60 / 60);
    const dias = Math.floor(diff / 1000 / 60 / 60 / 24);
    
    // Separando em unidades
    const meses = Math.floor(dias / 30);
    const diasRestantes = dias % 30;
    const horasRestantes = horas % 24;
    const minutosRestantes = minutos % 60;

    return {
        meses,
        dias: diasRestantes,
        horas: horasRestantes,
        minutos: minutosRestantes
    };
}

/**
 * Atualiza os cronômetros na página
 */
function atualizarTimers() {
    // Calcula o tempo para ambos os cronômetros
    const tempoConversa = calcularTempo(dataConversa);
    const tempoNamoro = calcularTempo(dataNamoro);

    // Atualiza o cronômetro de conversa
    document.getElementById('conv-meses').textContent = tempoConversa.meses;
    document.getElementById('conv-dias').textContent = tempoConversa.dias;
    document.getElementById('conv-horas').textContent = tempoConversa.horas;
    document.getElementById('conv-minutos').textContent = tempoConversa.minutos;

    // Atualiza o cronômetro de namoro
    document.getElementById('nam-meses').textContent = tempoNamoro.meses;
    document.getElementById('nam-dias').textContent = tempoNamoro.dias;
    document.getElementById('nam-horas').textContent = tempoNamoro.horas;
    document.getElementById('nam-minutos').textContent = tempoNamoro.minutos;
}

// Inicializa os timers quando a página carregar
atualizarTimers();

// Atualiza os timers a cada 1 minuto (60000 milissegundos)
setInterval(atualizarTimers, 60000);