// ================================================================
//  📦 PLUGIN: BOLÃO
//  Sistema de Palpites para Copa do Mundo
// ================================================================

const BolaoPlugin = {
    name: 'Bolão',
    version: '1.0',
    
    defaultConfig: {
        whatsapp: '5511999999999',
        pixKey: 'copa2026@bolao.com',
        campaignName: '⚽ Bolão Copa 2026'
    },
    
    defaultItems: [
        { 
            id: 1, 
            nome: 'Brasil vs Marrocos', 
            valor: 10.00,
            time1: '🇧🇷 Brasil', 
            time2: '🇲🇦 Marrocos',
            data: '24/06/2026', 
            hora: '18:00',
            max_palpites: 50, 
            palpites_feitos: 0, 
            resultado: null 
        },
        { 
            id: 2, 
            nome: 'Argentina vs França', 
            valor: 15.00,
            time1: '🇦🇷 Argentina', 
            time2: '🇫🇷 França',
            data: '24/06/2026', 
            hora: '21:00',
            max_palpites: 40, 
            palpites_feitos: 0, 
            resultado: null 
        },
        { 
            id: 3, 
            nome: 'Alemanha vs Espanha', 
            valor: 10.00,
            time1: '🇩🇪 Alemanha', 
            time2: '🇪🇸 Espanha',
            data: '25/06/2026', 
            hora: '15:00',
            max_palpites: 60, 
            palpites_feitos: 0, 
            resultado: null 
        },
    ],

    cartLabel: '🛒 Meus Palpites',
    checkoutLabel: '📤 Enviar Palpites',
    checkoutTitle: '📋 Resumo dos Palpites',

    // ============================================================
    //  VALIDAÇÃO
    // ============================================================
    validateSelection(item, metadata) {
        const jogo = this.engine.state.items.find(i => i.id === item.id);
        if (!jogo) { this.engine.toast('⚠️ Jogo não encontrado'); return false; }

        if (jogo.resultado) {
            this.engine.toast('🔒 Jogo já encerrado!');
            return false;
        }

        if (jogo.palpites_feitos >= jogo.max_palpites) {
            this.engine.toast('🔴 Esgotado! Não há mais vagas.');
            return false;
        }

        const gols1 = parseInt(metadata.gols1) || 0;
        const gols2 = parseInt(metadata.gols2) || 0;
        
        if (gols1 < 0 || gols2 < 0) {
            this.engine.toast('⚠️ Placar inválido');
            return false;
        }

        if (gols1 === 0 && gols2 === 0) {
            this.engine.toast('⚠️ Defina um placar');
            return false;
        }

        return true;
    },

    // ============================================================
    //  RENDER
    // ============================================================
    render(state) {
        const container = document.getElementById('mainContent');
        const items = state.items || [];
        
        if (items.length === 0) {
            container.innerHTML = `
                <div class="text-center" style="padding:40px 0;">
                    <p style="font-size:2rem;">⚽</p>
                    <p><strong>Nenhum jogo cadastrado</strong></p>
                </div>
            `;
            return;
        }

        container.innerHTML = items.map(item => {
            const disponivel = item.palpites_feitos < item.max_palpites;
            const jaSelecionou = state.selections.some(s => s.item_id === item.id);
            const encerrado = item.resultado !== null;

            return `
                <div class="card" style="border-left-color: ${encerrado ? '#94a3b8' : (disponivel ? 'var(--secondary)' : 'var(--danger)')};">
                    <div class="flex-between">
                        <span class="title">${item.time1} <span class="text-muted">vs</span> ${item.time2}</span>
                        <span class="badge">R$ ${item.valor.toFixed(2)}</span>
                    </div>
                    <div class="meta">
                        <span>📅 ${item.data} ${item.hora}</span>
                        <span>🎯 ${item.palpites_feitos}/${item.max_palpites}</span>
                    </div>
                    ${encerrado ? `
                        <div class="text-center" style="padding:8px 0; font-size:1.2rem; font-weight:bold; color:var(--success);">
                            ${item.resultado}
                        </div>
                    ` : `
                        <div class="input-group mt-8">
                            <input type="number" id="gols1_${item.id}" min="0" max="99" placeholder="0" 
                                   class="input-field input-sm" style="width:50px;"
                                   ${!disponivel && !jaSelecionou ? 'disabled' : ''}
                                   value="${jaSelecionou ? state.selections.find(s => s.item_id === item.id)?.gols1 || '' : ''}">
                            <span>×</span>
                            <input type="number" id="gols2_${item.id}" min="0" max="99" placeholder="0" 
                                   class="input-field input-sm" style="width:50px;"
                                   ${!disponivel && !jaSelecionou ? 'disabled' : ''}
                                   value="${jaSelecionou ? state.selections.find(s => s.item_id === item.id)?.gols2 || '' : ''}">
                            <span class="text-muted" style="font-size:0.7rem;">(palpite)</span>
                        </div>
                    `}
                    <div class="flex-between mt-8">
                        <span class="text-muted" style="font-size:0.8rem;">
                            ${encerrado ? '🔒 Encerrado' : (disponivel ? '✅ Disponível' : '🔴 Esgotado')}
                        </span>
                        ${!encerrado ? `
                            <button class="btn ${jaSelecionou ? 'btn-danger' : 'btn-primary'} btn-sm" 
                                    onclick="${jaSelecionou ? `campaign.removeSelection(${item.id})` : `addBolaoPalpite(${item.id})`}"
                                    ${!disponivel && !jaSelecionou ? 'disabled' : ''}>
                                ${jaSelecionou ? '❌ Remover' : '➕ Palpitar'}
                            </button>
                        ` : `
                            <span class="badge badge-success">✅ Finalizado</span>
                        `}
                    </div>
                </div>
            `;
        }).join('');
    },

    // ============================================================
    //  TABS
    // ============================================================
    getTabs() {
        return [
            { id: 'main', label: '📋 Jogos', active: true },
            { id: 'my', label: '🏆 Meus Palpites', active: false },
            { id: 'ranking', label: '📊 Ranking', active: false }
        ];
    },

    switchTab(tabId, state) {
        const container = document.getElementById('mainContent');
        
        if (tabId === 'main') {
            this.render(state);
            return;
        }

        if (tabId === 'my') {
            this.renderMyPalpites(state);
            return;
        }

        if (tabId === 'ranking') {
            this.renderRanking(state);
            return;
        }
    },

    renderMyPalpites(state) {
        const container = document.getElementById('mainContent');
        
        if (!state.usuario) {
            container.innerHTML = `
                <div class="text-center" style="padding:40px 0;">
                    <p style="font-size:2rem;">🔑</p>
                    <p><strong>Faça login para ver seus palpites</strong></p>
                    <button class="btn btn-primary" onclick="openModal('modalLogin')">Entrar</button>
                </div>
            `;
            return;
        }

        const meus = state.registrations.filter(r => r.usuario === state.usuario.nome);
        
        if (meus.length === 0) {
            container.innerHTML = `
                <div class="text-center" style="padding:40px 0;">
                    <p style="font-size:2rem;">📭</p>
                    <p><strong>Você ainda não enviou palpites</strong></p>
                </div>
            `;
            return;
        }

        container.innerHTML = meus.slice().reverse().map(r => `
            <div class="card" style="border-left-color: ${r.pago ? 'var(--success)' : 'var(--warning)'};">
                <div class="flex-between">
                    <span class="title">${r.time1} <span class="text-muted">vs</span> ${r.time2}</span>
                    <span class="badge ${r.pago ? 'badge-success' : 'badge-warning'}">${r.pago ? '✅ Pago' : '⏳ Pendente'}</span>
                </div>
                <div style="font-size:1.3rem; text-align:center; padding:8px 0; font-weight:bold;">
                    ${r.gols1} × ${r.gols2}
                </div>
                <div class="meta">
                    <span>📅 ${r.data_envio || '---'}</span>
                    <span>💰 R$ ${(r.valor || 0).toFixed(2)}</span>
                </div>
            </div>
        `).join('');
    },

    renderRanking(state) {
        const container = document.getElementById('mainContent');
        const ranking = state.ranking || [];

        if (ranking.length === 0) {
            container.innerHTML = `
                <div class="text-center" style="padding:40px 0;">
                    <p style="font-size:2rem;">📊</p>
                    <p><strong>Nenhum participante ainda</strong></p>
                </div>
            `;
            return;
        }

        const sorted = [...ranking].sort((a, b) => b.palpites - a.palpites);

        container.innerHTML = sorted.map((r, i) => `
            <div class="card" style="border-left-color: ${i === 0 ? '#fbbf24' : i === 1 ? '#94a3b8' : i === 2 ? '#d97706' : 'var(--secondary)'};">
                <div class="flex-between">
                    <span>
                        <strong>${i + 1}º</strong> ${r.usuario}
                        ${i === 0 ? '🏆' : ''}
                    </span>
                    <div class="flex gap-8">
                        <span class="badge">${r.palpites} palpites</span>
                        <span class="badge badge-success">${r.acertos || 0} acertos</span>
                    </div>
                </div>
                <div class="meta">
                    <span>💰 Total: R$ ${(r.total_gasto || 0).toFixed(2)}</span>
                </div>
            </div>
        `).join('');
    },

    // ============================================================
    //  CARRINHO
    // ============================================================
    renderCartItem(selection) {
        const item = this.engine.state.items.find(i => i.id === selection.item_id);
        if (!item) return '';
        return `
            <div class="cart-item">
                <span>${item.time1} ${selection.gols1}×${selection.gols2} ${item.time2}</span>
                <span>R$ ${(selection.valor || 0).toFixed(2)}</span>
            </div>
        `;
    },

    // ============================================================
    //  CHECKOUT
    // ============================================================
    renderCheckout(selections) {
        const usuario = this.engine.state.usuario;
        let html = `<div style="background:#f8fafc; border-radius:8px; padding:16px;">`;
        html += `<p><strong>👤 ${usuario?.nome || 'Visitante'}</strong></p><hr>`;
        let total = 0;
        
        selections.forEach(s => {
            const item = this.engine.state.items.find(i => i.id === s.item_id);
            if (!item) return;
            total += s.valor || 0;
            html += `
                <div class="flex-between" style="padding:4px 0;">
                    <span>${item.time1} ${s.gols1}×${s.gols2} ${item.time2}</span>
                    <span>R$ ${(s.valor || 0).toFixed(2)}</span>
                </div>
            `;
        });
        
        html += `<hr><div class="flex-between" style="font-weight:bold; font-size:1.1rem;">
            <span>TOTAL</span>
            <span>R$ ${total.toFixed(2)}</span>
        </div></div>`;
        
        html += `
            <div style="margin-top:12px; background:#fff3e0; border-radius:8px; padding:12px;">
                <p style="font-weight:bold;">💰 Pagamento</p>
                <p><strong>PIX:</strong> ${this.engine.state.config.pixKey || 'copa2026@bolao.com'}</p>
                <p class="text-muted" style="font-size:0.8rem;">📱 Após o pagamento, envie o comprovante.</p>
            </div>
        `;
        
        return html;
    },

    // ============================================================
    //  REGISTRO
    // ============================================================
    registerSelections(selections, usuario) {
        return selections.map(s => {
            const item = this.engine.state.items.find(i => i.id === s.item_id);
            if (!item) return null;
            
            item.palpites_feitos++;
            
            return {
                id: this.engine.generateId(),
                usuario: usuario.nome,
                item_id: s.item_id,
                time1: item.time1,
                time2: item.time2,
                gols1: s.gols1 || 0,
                gols2: s.gols2 || 0,
                valor: s.valor || 0,
                pago: false,
                data_envio: new Date().toISOString(),
                data: item.data || '',
                hora: item.hora || '',
            };
        }).filter(Boolean);
    },

    // ============================================================
    //  RANKING UPDATE
    // ============================================================
    updateRanking(ranking, registrations) {
        const newRanking = [...ranking];
        
        registrations.forEach(r => {
            const existing = newRanking.find(rk => rk.usuario === r.usuario);
            if (existing) {
                existing.palpites = (existing.palpites || 0) + 1;
                existing.total_gasto = (existing.total_gasto || 0) + r.valor;
            } else {
                newRanking.push({
                    usuario: r.usuario,
                    palpites: 1,
                    acertos: 0,
                    total_gasto: r.valor,
                });
            }
        });
        
        return newRanking;
    },

    // ============================================================
    //  WHATSAPP MESSAGE
    // ============================================================
    getWhatsAppMessage(registrations, usuario) {
        let msg = `🟢 *${this.engine.state.config.campaignName || 'Bolão'}*\n\n`;
        msg += `👤 *${usuario.nome}*\n`;
        msg += `📅 ${new Date().toLocaleString('pt-BR')}\n\n`;
        msg += `📋 *Palpites:*\n`;
        let total = 0;
        registrations.forEach(r => {
            msg += `  ${r.time1} ${r.gols1}×${r.gols2} ${r.time2} - R$ ${(r.valor || 0).toFixed(2)}\n`;
            total += r.valor || 0;
        });
        msg += `\n💰 *Total:* R$ ${total.toFixed(2)}`;
        msg += `\n\n✅ Aguardando confirmação de pagamento.`;
        return msg;
    }
};

// ================================================================
//  🚀 FUNÇÃO PARA ADICIONAR PALPITE (Bolão)
// ================================================================

function addBolaoPalpite(itemId) {
    if (!campaign) return;
    
    const gols1 = parseInt(document.getElementById(`gols1_${itemId}`).value) || 0;
    const gols2 = parseInt(document.getElementById(`gols2_${itemId}`).value) || 0;
    
    campaign.addSelection(itemId, { gols1, gols2 });
}


// ================================================================
//  📦 PLUGIN: HYPESATS
//  Sistema de Tickets com Recompensa em Satoshis
// ================================================================

const HypeSatsPlugin = {
    name: 'HypeSats',
    version: '1.0',
    
    defaultConfig: {
        whatsapp: '5511999999999',
        pixKey: 'hypesats@pagamento.com',
        lightningAddress: 'hypesats@getalby.com',
        campaignName: '🚀 HypeSats - Tickets e Recompensas'
    },
    
    defaultItems: [
        { 
            id: 1, 
            nome: '🎫 Ticket Bronze', 
            valor: 10.00,
            sats_reward: 1000,
            descricao: 'Acesso básico + 1.000 sats',
            nivel: 'Bronze',
            beneficios: ['Acesso ao conteúdo', '1.000 sats'],
            estoque: 100,
            vendidos: 0
        },
        { 
            id: 2, 
            nome: '🎟️ Ticket Prata', 
            valor: 25.00,
            sats_reward: 3000,
            descricao: 'Acesso premium + 3.000 sats',
            nivel: 'Prata',
            beneficios: ['Acesso premium', 'Conteúdo exclusivo', '3.000 sats'],
            estoque: 50,
            vendidos: 0
        },
        { 
            id: 3, 
            nome: '💎 Ticket Ouro', 
            valor: 50.00,
            sats_reward: 7000,
            descricao: 'Acesso VIP + 7.000 sats',
            nivel: 'Ouro',
            beneficios: ['Acesso VIP', 'Conteúdo exclusivo', 'Mentoria', '7.000 sats'],
            estoque: 20,
            vendidos: 0
        },
        { 
            id: 4, 
            nome: '🌟 Ticket Diamante', 
            valor: 100.00,
            sats_reward: 15000,
            descricao: 'Acesso completo + 15.000 sats',
            nivel: 'Diamante',
            beneficios: ['Acesso completo', 'Conteúdo exclusivo', 'Mentoria 1:1', '15.000 sats'],
            estoque: 10,
            vendidos: 0
        },
    ],

    cartLabel: '🛒 Meus Tickets',
    checkoutLabel: '📤 Comprar Tickets',
    checkoutTitle: '📋 Resumo da Compra',

    // ============================================================
    //  VALIDAÇÃO
    // ============================================================
    validateSelection(item, metadata) {
        const ticket = this.engine.state.items.find(i => i.id === item.id);
        if (!ticket) { this.engine.toast('⚠️ Ticket não encontrado'); return false; }

        if (ticket.estoque <= 0) {
            this.engine.toast('🔴 Ticket esgotado!');
            return false;
        }

        return true;
    },

    // ============================================================
    //  RENDER
    // ============================================================
    render(state) {
        const container = document.getElementById('mainContent');
        const items = state.items || [];
        
        if (items.length === 0) {
            container.innerHTML = `
                <div class="text-center" style="padding:40px 0;">
                    <p style="font-size:2rem;">🎫</p>
                    <p><strong>Nenhum ticket disponível</strong></p>
                </div>
            `;
            return;
        }

        const niveis = ['Bronze', 'Prata', 'Ouro', 'Diamante'];
        const sortedItems = [...items].sort((a, b) => 
            niveis.indexOf(a.nivel) - niveis.indexOf(b.nivel)
        );

        const cores = {
            'Bronze': '#cd7f32',
            'Prata': '#c0c0c0',
            'Ouro': '#ffd700',
            'Diamante': '#b9f2ff'
        };

        container.innerHTML = sortedItems.map(item => {
            const disponivel = item.estoque > 0;
            const jaSelecionou = state.selections.some(s => s.item_id === item.id);
            const cor = cores[item.nivel] || 'var(--secondary)';

            return `
                <div class="card" style="border-left-color: ${cor};">
                    <div class="flex-between">
                        <span class="title">${item.nome}</span>
                        <span class="badge" style="background:${cor}; color:#000;">${item.nivel}</span>
                    </div>
                    <p class="text-muted" style="font-size:0.85rem; margin:4px 0;">${item.descricao}</p>
                    <div style="display:flex; flex-wrap:wrap; gap:4px; margin:8px 0;">
                        ${item.beneficios.map(b => `<span class="badge" style="background:#e2e8f0; color:#333;">${b}</span>`).join('')}
                    </div>
                    <div class="meta">
                        <span>💰 R$ ${item.valor.toFixed(2)}</span>
                        <span>⚡ ${item.sats_reward.toLocaleString()} sats</span>
                        <span>📦 ${item.estoque} disponíveis</span>
                    </div>
                    <div class="flex-between mt-8">
                        <span class="text-muted" style="font-size:0.8rem;">
                            ${disponivel ? '✅ Disponível' : '🔴 Esgotado'}
                        </span>
                        <button class="btn ${jaSelecionou ? 'btn-danger' : 'btn-primary'} btn-sm" 
                                onclick="${jaSelecionou ? `campaign.removeSelection(${item.id})` : `campaign.addSelection(${item.id})`}"
                                ${!disponivel ? 'disabled' : ''}>
                            ${jaSelecionou ? '❌ Remover' : '➕ Adicionar'}
                        </button>
                    </div>
                </div>
            `;
        }).join('');

        container.innerHTML += `
            <div style="background: linear-gradient(135deg, #1a1a2e, #16213e); color:#fff; border-radius:12px; padding:16px; margin-top:16px;">
                <div class="flex-between">
                    <span><strong>⚡ Ganhe Satoshis</strong></span>
                    <span class="badge" style="background:#f7931a; color:#000;">Lightning Network</span>
                </div>
                <p style="font-size:0.85rem; opacity:0.8; margin-top:8px;">
                    Ao comprar um ticket, você recebe automaticamente a recompensa em Satoshis!
                </p>
            </div>
        `;
    },

    // ============================================================
    //  TABS
    // ============================================================
    getTabs() {
        return [
            { id: 'main', label: '🎫 Tickets', active: true },
            { id: 'my', label: '📁 Meus Tickets', active: false },
            { id: 'ranking', label: '🏆 Ranking Sats', active: false }
        ];
    },

    switchTab(tabId, state) {
        const container = document.getElementById('mainContent');
        
        if (tabId === 'main') {
            this.render(state);
            return;
        }

        if (tabId === 'my') {
            this.renderMyTickets(state);
            return;
        }

        if (tabId === 'ranking') {
            this.renderRanking(state);
            return;
        }
    },

    renderMyTickets(state) {
        const container = document.getElementById('mainContent');
        
        if (!state.usuario) {
            container.innerHTML = `
                <div class="text-center" style="padding:40px 0;">
                    <p style="font-size:2rem;">🔑</p>
                    <p><strong>Faça login para ver seus tickets</strong></p>
                    <button class="btn btn-primary" onclick="openModal('modalLogin')">Entrar</button>
                </div>
            `;
            return;
        }

        const meus = state.registrations.filter(r => r.usuario === state.usuario.nome);
        
        if (meus.length === 0) {
            container.innerHTML = `
                <div class="text-center" style="padding:40px 0;">
                    <p style="font-size:2rem;">📭</p>
                    <p><strong>Você ainda não comprou tickets</strong></p>
                </div>
            `;
            return;
        }

        const totalSats = meus.reduce((sum, r) => sum + (r.sats_reward || 0), 0);

        container.innerHTML = `
            <div style="background: linear-gradient(135deg, #f7931a, #fbbf24); color:#000; border-radius:12px; padding:16px; margin-bottom:16px;">
                <div class="flex-between">
                    <span><strong>⚡ Satoshis Ganhos</strong></span>
                    <span style="font-size:1.5rem; font-weight:bold;">${totalSats.toLocaleString()} sats</span>
                </div>
                <p class="text-muted" style="font-size:0.8rem;">${meus.length} tickets comprados</p>
            </div>
            ${meus.slice().reverse().map(r => `
                <div class="card" style="border-left-color: ${r.pago ? 'var(--success)' : 'var(--warning)'};">
                    <div class="flex-between">
                        <span class="title">${r.nome}</span>
                        <span class="badge ${r.pago ? 'badge-success' : 'badge-warning'}">
                            ${r.pago ? '✅ Pago' : '⏳ Pendente'}
                        </span>
                    </div>
                    <div class="meta">
                        <span>💰 R$ ${(r.valor || 0).toFixed(2)}</span>
                        <span>⚡ ${(r.sats_reward || 0).toLocaleString()} sats</span>
                        <span>📅 ${r.data_envio || '---'}</span>
                    </div>
                    ${r.pago ? `
                        <div style="margin-top:8px; background:#f0fdf4; border-radius:8px; padding:8px; text-align:center;">
                            <span style="font-weight:bold; color:var(--success);">✅ Sats enviados para sua carteira!</span>
                        </div>
                    ` : `
                        <div style="margin-top:8px; background:#fef3c7; border-radius:8px; padding:8px; text-align:center;">
                            <span style="font-weight:bold; color:#d97706;">⏳ Aguardando pagamento</span>
                        </div>
                    `}
                </div>
            `).join('')}
        `;
    },

    renderRanking(state) {
        const container = document.getElementById('mainContent');
        const ranking = state.ranking || [];

        if (ranking.length === 0) {
            container.innerHTML = `
                <div class="text-center" style="padding:40px 0;">
                    <p style="font-size:2rem;">🏆</p>
                    <p><strong>Nenhum participante ainda</strong></p>
                </div>
            `;
            return;
        }

        const sorted = [...ranking].sort((a, b) => (b.total_sats || 0) - (a.total_sats || 0));

        container.innerHTML = `
            <div style="background: linear-gradient(135deg, #1a1a2e, #16213e); color:#fff; border-radius:12px; padding:16px; margin-bottom:16px;">
                <div class="flex-between">
                    <span><strong>🏆 Ranking de Satoshis</strong></span>
                    <span class="badge" style="background:#f7931a; color:#000;">⚡ Lightning</span>
                </div>
            </div>
            ${sorted.map((r, i) => `
                <div class="card" style="border-left-color: ${i === 0 ? '#fbbf24' : i === 1 ? '#94a3b8' : i === 2 ? '#d97706' : 'var(--secondary)'};">
                    <div class="flex-between">
                        <span>
                            <strong>${i + 1}º</strong> ${r.usuario}
                            ${i === 0 ? '👑' : ''}
                        </span>
                        <span style="font-weight:bold; color:#f7931a;">
                            ⚡ ${(r.total_sats || 0).toLocaleString()} sats
                        </span>
                    </div>
                    <div class="meta">
                        <span>🎫 ${r.tickets || 0} tickets</span>
                        <span>💰 R$ ${(r.total_gasto || 0).toFixed(2)}</span>
                    </div>
                </div>
            `).join('')}
        `;
    },

    // ============================================================
    //  CARRINHO
    // ============================================================
    renderCartItem(selection) {
        const item = this.engine.state.items.find(i => i.id === selection.item_id);
        if (!item) return '';
        return `
            <div class="cart-item">
                <span>${item.nome}</span>
                <span>⚡ ${item.sats_reward.toLocaleString()} sats</span>
            </div>
        `;
    },

    // ============================================================
    //  CHECKOUT
    // ============================================================
    renderCheckout(selections) {
        const usuario = this.engine.state.usuario;
        let html = `<div style="background:#f8fafc; border-radius:8px; padding:16px;">`;
        html += `<p><strong>👤 ${usuario?.nome || 'Visitante'}</strong></p><hr>`;
        
        let total = 0;
        let totalSats = 0;
        
        selections.forEach(s => {
            const item = this.engine.state.items.find(i => i.id === s.item_id);
            if (!item) return;
            total += s.valor || 0;
            totalSats += item.sats_reward || 0;
            html += `
                <div class="flex-between" style="padding:4px 0;">
                    <span>${item.nome}</span>
                    <span>R$ ${(s.valor || 0).toFixed(2)}</span>
                </div>
            `;
        });
        
        html += `<hr>`;
        html += `
            <div class="flex-between" style="font-weight:bold;">
                <span>TOTAL</span>
                <span>R$ ${total.toFixed(2)}</span>
            </div>
            <div class="flex-between" style="color:#f7931a; font-weight:bold; margin-top:4px;">
                <span>⚡ Recompensa em Sats</span>
                <span>${totalSats.toLocaleString()} sats</span>
            </div>
        `;
        html += `</div>`;
        
        html += `
            <div style="margin-top:12px; background:linear-gradient(135deg, #f7931a20, #fbbf2420); border-radius:8px; padding:12px; border:2px solid #f7931a;">
                <p style="font-weight:bold; color:#f7931a;">⚡ Pagamento via Lightning</p>
                <p><strong>Endereço Lightning:</strong> ${this.engine.state.config.lightningAddress || 'hypesats@getalby.com'}</p>
                <p><strong>PIX (alternativo):</strong> ${this.engine.state.config.pixKey || 'hypesats@pagamento.com'}</p>
                <p class="text-muted" style="font-size:0.8rem;">💰 Após o pagamento, os sats serão enviados automaticamente!</p>
            </div>
        `;
        
        return html;
    },

    // ============================================================
    //  REGISTRO
    // ============================================================
    registerSelections(selections, usuario) {
        return selections.map(s => {
            const item = this.engine.state.items.find(i => i.id === s.item_id);
            if (!item) return null;
            
            item.estoque--;
            item.vendidos++;
            
            return {
                id: this.engine.generateId(),
                usuario: usuario.nome,
                item_id: s.item_id,
                nome: item.nome,
                nivel: item.nivel,
                valor: s.valor || 0,
                sats_reward: item.sats_reward || 0,
                beneficios: item.beneficios || [],
                pago: false,
                data_envio: new Date().toISOString(),
            };
        }).filter(Boolean);
    },

    // ============================================================
    //  RANKING UPDATE
    // ============================================================
    updateRanking(ranking, registrations) {
        const newRanking = [...ranking];
        
        registrations.forEach(r => {
            const existing = newRanking.find(rk => rk.usuario === r.usuario);
            if (existing) {
                existing.tickets = (existing.tickets || 0) + 1;
                existing.total_gasto = (existing.total_gasto || 0) + r.valor;
                existing.total_sats = (existing.total_sats || 0) + (r.sats_reward || 0);
            } else {
                newRanking.push({
                    usuario: r.usuario,
                    tickets: 1,
                    total_gasto: r.valor,
                    total_sats: r.sats_reward || 0,
                });
            }
        });
        
        return newRanking;
    },

    // ============================================================
    //  WHATSAPP MESSAGE
    // ============================================================
    getWhatsAppMessage(registrations, usuario) {
        let msg = `🟢 *${this.engine.state.config.campaignName || 'HypeSats'}*\n\n`;
        msg += `👤 *${usuario.nome}*\n`;
        msg += `📅 ${new Date().toLocaleString('pt-BR')}\n\n`;
        msg += `📋 *Tickets Comprados:*\n`;
        
        let total = 0;
        let totalSats = 0;
        
        registrations.forEach(r => {
            msg += `  ${r.nome} - ⚡ ${(r.sats_reward || 0).toLocaleString()} sats\n`;
            total += r.valor || 0;
            totalSats += r.sats_reward || 0;
        });
        
        msg += `\n💰 *Total:* R$ ${total.toFixed(2)}`;
        msg += `\n⚡ *Sats a receber:* ${totalSats.toLocaleString()} sats`;
        msg += `\n\n✅ Aguardando confirmação de pagamento.`;
        msg += `\n📱 Lightning: ${this.engine.state.config.lightningAddress || 'hypesats@getalby.com'}`;
        msg += `\n📱 PIX: ${this.engine.state.config.pixKey || 'hypesats@pagamento.com'}`;
        
        return msg;
    }
};


// ================================================================
//  📦 PLUGIN: ESCOLA DE SKATE
//  Sistema de Inscrições para Aulas e Campeonatos
// ================================================================

const EscolaSkatePlugin = {
    name: 'Escola de Skate',
    version: '1.0',
    
    defaultConfig: {
        whatsapp: '5511999999999',
        pixKey: 'skate@escola.com',
        campaignName: '🛹 Escola de Skate - Inscrições'
    },
    
    defaultItems: [
        { 
            id: 1, 
            nome: '🛹 Aula Experimental', 
            valor: 0.00,
            descricao: 'Primeira aula grátis para conhecer a escola',
            duracao: '1h',
            nivel: 'Iniciante',
            vagas: 20,
            inscritos: 0,
            data: '2026-07-01',
            horario: '14:00'
        },
        { 
            id: 2, 
            nome: '📚 Mensalidade Completa', 
            valor: 150.00,
            descricao: 'Acesso ilimitado a todas as aulas do mês',
            duracao: '30 dias',
            nivel: 'Todos os níveis',
            vagas: 50,
            inscritos: 0,
            beneficios: ['Aulas diárias', 'Equipamento incluso', 'Avaliação mensal']
        },
        { 
            id: 3, 
            nome: '🏆 Campeonato de Skate', 
            valor: 50.00,
            descricao: 'Inscrição para o campeonato anual',
            duracao: '1 dia',
            nivel: 'Intermediário/Avançado',
            vagas: 30,
            inscritos: 0,
            data: '2026-07-15',
            horario: '09:00',
            premio: 'Troféu + R$ 500,00'
        },
        { 
            id: 4, 
            nome: '🎯 Aula Particular', 
            valor: 80.00,
            descricao: 'Aula individual com um dos nossos instrutores',
            duracao: '1h',
            nivel: 'Personalizado',
            vagas: 10,
            inscritos: 0,
        },
    ],

    cartLabel: '🛹 Minhas Inscrições',
    checkoutLabel: '📤 Confirmar Inscrição',
    checkoutTitle: '📋 Resumo da Inscrição',

    // ============================================================
    //  VALIDAÇÃO
    // ============================================================
    validateSelection(item, metadata) {
        const aula = this.engine.state.items.find(i => i.id === item.id);
        if (!aula) { this.engine.toast('⚠️ Atividade não encontrada'); return false; }

        if (aula.inscritos >= aula.vagas) {
            this.engine.toast('🔴 Turma lotada!');
            return false;
        }

        return true;
    },

    // ============================================================
    //  RENDER
    // ============================================================
    render(state) {
        const container = document.getElementById('mainContent');
        const items = state.items || [];
        
        if (items.length === 0) {
            container.innerHTML = `
                <div class="text-center" style="padding:40px 0;">
                    <p style="font-size:2rem;">🛹</p>
                    <p><strong>Nenhuma atividade disponível</strong></p>
                </div>
            `;
            return;
        }

        container.innerHTML = items.map(item => {
            const disponivel = item.inscritos < item.vagas;
            const jaSelecionou = state.selections.some(s => s.item_id === item.id);
            const isGratis = item.valor === 0;

            return `
                <div class="card" style="border-left-color: ${isGratis ? 'var(--success)' : (disponivel ? 'var(--secondary)' : 'var(--danger)')};">
                    <div class="flex-between">
                        <span class="title">${item.nome}</span>
                        <span class="badge ${isGratis ? 'badge-success' : ''}">
                            ${isGratis ? '🎁 Grátis' : `R$ ${item.valor.toFixed(2)}`}
                        </span>
                    </div>
                    <p class="text-muted" style="font-size:0.85rem; margin:4px 0;">${item.descricao}</p>
                    <div class="meta">
                        <span>⏱️ ${item.duracao || '---'}</span>
                        <span>📊 ${item.nivel || 'Todos'}</span>
                        <span>📦 ${item.inscritos}/${item.vagas} vagas</span>
                    </div>
                    ${item.data ? `<div class="meta"><span>📅 ${item.data} ${item.horario || ''}</span></div>` : ''}
                    ${item.premio ? `<div class="meta"><span>🏆 ${item.premio}</span></div>` : ''}
                    ${item.beneficios ? `
                        <div style="display:flex; flex-wrap:wrap; gap:4px; margin:8px 0;">
                            ${item.beneficios.map(b => `<span class="badge" style="background:#e2e8f0; color:#333;">${b}</span>`).join('')}
                        </div>
                    ` : ''}
                    <div class="flex-between mt-8">
                        <span class="text-muted" style="font-size:0.8rem;">
                            ${disponivel ? '✅ Disponível' : '🔴 Lotado'}
                        </span>
                        <button class="btn ${jaSelecionou ? 'btn-danger' : 'btn-primary'} btn-sm" 
                                onclick="${jaSelecionou ? `campaign.removeSelection(${item.id})` : `campaign.addSelection(${item.id})`}"
                                ${!disponivel ? 'disabled' : ''}>
                            ${jaSelecionou ? '❌ Remover' : (isGratis ? '🎯 Inscrever-se' : '➕ Inscrever')}
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    },

    // ============================================================
    //  TABS
    // ============================================================
    getTabs() {
        return [
            { id: 'main', label: '🛹 Atividades', active: true },
            { id: 'my', label: '📁 Minhas Inscrições', active: false },
            { id: 'ranking', label: '🏆 Ranking', active: false }
        ];
    },

    switchTab(tabId, state) {
        const container = document.getElementById('mainContent');
        
        if (tabId === 'main') {
            this.render(state);
            return;
        }

        if (tabId === 'my') {
            this.renderMyRegistrations(state);
            return;
        }

        if (tabId === 'ranking') {
            this.renderRanking(state);
            return;
        }
    },

    renderMyRegistrations(state) {
        const container = document.getElementById('mainContent');
        
        if (!state.usuario) {
            container.innerHTML = `
                <div class="text-center" style="padding:40px 0;">
                    <p style="font-size:2rem;">🔑</p>
                    <p><strong>Faça login para ver suas inscrições</strong></p>
                    <button class="btn btn-primary" onclick="openModal('modalLogin')">Entrar</button>
                </div>
            `;
            return;
        }

        const meus = state.registrations.filter(r => r.usuario === state.usuario.nome);
        
        if (meus.length === 0) {
            container.innerHTML = `
                <div class="text-center" style="padding:40px 0;">
                    <p style="font-size:2rem;">📭</p>
                    <p><strong>Você ainda não tem inscrições</strong></p>
                </div>
            `;
            return;
        }

        container.innerHTML = meus.slice().reverse().map(r => `
            <div class="card" style="border-left-color: ${r.pago ? 'var(--success)' : 'var(--warning)'};">
                <div class="flex-between">
                    <span class="title">${r.nome}</span>
                    <span class="badge ${r.pago ? 'badge-success' : 'badge-warning'}">
                        ${r.pago ? '✅ Confirmado' : '⏳ Pendente'}
                    </span>
                </div>
                <div class="meta">
                    <span>📅 ${r.data_envio || '---'}</span>
                    <span>💰 ${r.valor === 0 ? '🎁 Grátis' : `R$ ${(r.valor || 0).toFixed(2)}`}</span>
                </div>
                ${r.pago ? `
                    <div style="margin-top:8px; background:#f0fdf4; border-radius:8px; padding:8px; text-align:center;">
                        <span style="font-weight:bold; color:var(--success);">✅ Inscrição confirmada!</span>
                    </div>
                ` : `
                    <div style="margin-top:8px; background:#fef3c7; border-radius:8px; padding:8px; text-align:center;">
                        <span style="font-weight:bold; color:#d97706;">⏳ Aguardando confirmação</span>
                    </div>
                `}
            </div>
        `).join('');
    },

    renderRanking(state) {
        const container = document.getElementById('mainContent');
        const ranking = state.ranking || [];

        if (ranking.length === 0) {
            container.innerHTML = `
                <div class="text-center" style="padding:40px 0;">
                    <p style="font-size:2rem;">🏆</p>
                    <p><strong>Nenhum participante ainda</strong></p>
                </div>
            `;
            return;
        }

        const sorted = [...ranking].sort((a, b) => (b.inscricoes || 0) - (a.inscricoes || 0));

        container.innerHTML = sorted.map((r, i) => `
            <div class="card" style="border-left-color: ${i === 0 ? '#fbbf24' : i === 1 ? '#94a3b8' : i === 2 ? '#d97706' : 'var(--secondary)'};">
                <div class="flex-between">
                    <span>
                        <strong>${i + 1}º</strong> ${r.usuario}
                        ${i === 0 ? '🏆' : ''}
                    </span>
                    <span class="badge">${r.inscricoes || 0} inscrições</span>
                </div>
                <div class="meta">
                    <span>💰 R$ ${(r.total_gasto || 0).toFixed(2)}</span>
                </div>
            </div>
        `).join('');
    },

    // ============================================================
    //  CHECKOUT
    // ============================================================
    renderCheckout(selections) {
        const usuario = this.engine.state.usuario;
        let html = `<div style="background:#f8fafc; border-radius:8px; padding:16px;">`;
        html += `<p><strong>👤 ${usuario?.nome || 'Visitante'}</strong></p><hr>`;
        
        let total = 0;
        
        selections.forEach(s => {
            const item = this.engine.state.items.find(i => i.id === s.item_id);
            if (!item) return;
            total += s.valor || 0;
            html += `
                <div class="flex-between" style="padding:4px 0;">
                    <span>${item.nome}</span>
                    <span>${item.valor === 0 ? '🎁 Grátis' : `R$ ${(s.valor || 0).toFixed(2)}`}</span>
                </div>
            `;
        });
        
        html += `<hr>`;
        html += `
            <div class="flex-between" style="font-weight:bold;">
                <span>TOTAL</span>
                <span>${total === 0 ? '🎁 Grátis' : `R$ ${total.toFixed(2)}`}</span>
            </div>
        `;
        html += `</div>`;
        
        if (total > 0) {
            html += `
                <div style="margin-top:12px; background:#fff3e0; border-radius:8px; padding:12px;">
                    <p style="font-weight:bold;">💰 Pagamento</p>
                    <p><strong>PIX:</strong> ${this.engine.state.config.pixKey || 'skate@escola.com'}</p>
                    <p class="text-muted" style="font-size:0.8rem;">📱 Após o pagamento, envie o comprovante.</p>
                </div>
            `;
        }
        
        return html;
    },

    // ============================================================
    //  REGISTRO
    // ============================================================
    registerSelections(selections, usuario) {
        return selections.map(s => {
            const item = this.engine.state.items.find(i => i.id === s.item_id);
            if (!item) return null;
            
            item.inscritos++;
            
            return {
                id: this.engine.generateId(),
                usuario: usuario.nome,
                item_id: s.item_id,
                nome: item.nome,
                valor: s.valor || 0,
                pago: false,
                data_envio: new Date().toISOString(),
                nivel: item.nivel || 'Todos',
                duracao: item.duracao || '---',
            };
        }).filter(Boolean);
    },

    // ============================================================
    //  RANKING UPDATE
    // ============================================================
    updateRanking(ranking, registrations) {
        const newRanking = [...ranking];
        
        registrations.forEach(r => {
            const existing = newRanking.find(rk => rk.usuario === r.usuario);
            if (existing) {
                existing.inscricoes = (existing.inscricoes || 0) + 1;
                existing.total_gasto = (existing.total_gasto || 0) + r.valor;
            } else {
                newRanking.push({
                    usuario: r.usuario,
                    inscricoes: 1,
                    total_gasto: r.valor,
                });
            }
        });
        
        return newRanking;
    },

    // ============================================================
    //  WHATSAPP MESSAGE
    // ============================================================
    getWhatsAppMessage(registrations, usuario) {
        let msg = `🟢 *${this.engine.state.config.campaignName || 'Escola de Skate'}*\n\n`;
        msg += `👤 *${usuario.nome}*\n`;
        msg += `📅 ${new Date().toLocaleString('pt-BR')}\n\n`;
        msg += `📋 *Inscrições:*\n`;
        
        let total = 0;
        registrations.forEach(r => {
            msg += `  ${r.nome}\n`;
            total += r.valor || 0;
        });
        
        if (total > 0) {
            msg += `\n💰 *Total:* R$ ${total.toFixed(2)}`;
        } else {
            msg += `\n🎁 *Gratuito*`;
        }
        msg += `\n\n✅ Aguardando confirmação.`;
        
        return msg;
    }
};
