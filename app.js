// ================================================================
//  🚀 APP - Inicialização da Aplicação
//  Escolha qual plugin usar aqui
// ================================================================

// ============================================================
//  OPÇÃO 1: BOLÃO DA COPA
// ============================================================
// document.addEventListener('DOMContentLoaded', () => {
//     initCampaign(BolaoPlugin);
//     
//     // Customizar título
//     document.getElementById('campaignTitle').textContent = '⚽ Bolão Copa 2026';
//     document.getElementById('campaignSubtitle').textContent = 'Palpite nos jogos e concorra a prêmios!';
// });

// ============================================================
//  OPÇÃO 2: HYPESATS - TICKETS COM SATS
// ============================================================
// document.addEventListener('DOMContentLoaded', () => {
//     initCampaign(HypeSatsPlugin);
//     
//     document.getElementById('campaignTitle').textContent = '🚀 HypeSats';
//     document.getElementById('campaignSubtitle').textContent = 'Compre tickets e ganhe Satoshis!';
// });

// ============================================================
//  OPÇÃO 3: ESCOLA DE SKATE
// ============================================================
// document.addEventListener('DOMContentLoaded', () => {
//     initCampaign(EscolaSkatePlugin);
//     
//     document.getElementById('campaignTitle').textContent = '🛹 Escola de Skate';
//     document.getElementById('campaignSubtitle').textContent = 'Inscreva-se e comece a andar de skate!';
// });

// ============================================================
//  OPÇÃO ATUAL (DESCOMENTE A QUE QUISER USAR)
// ============================================================


document.addEventListener('DOMContentLoaded', () => {
    // Carregar jogos da Copa 2026
    const jogos = JOGOS_COPA_2026;
    
    // Inicializar com os dados
    initCampaign({
        ...BolaoPlugin,
        defaultItems: jogos
    });
    
    document.getElementById('campaignTitle').textContent = '⚽ Bolão Copa 2026';
    document.getElementById('campaignSubtitle').textContent = 'Palpite nos jogos e concorra a prêmios!';
});
