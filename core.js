// ================================================================
//  🧠 CORE ENGINE - O Coração do Sistema
//  Nenhuma lógica de negócio aqui. Apenas a estrutura.
// ================================================================

class CampaignEngine {
    constructor() {
        // Estado base
        this.state = {
            usuario: null,
            items: [],
            selections: [],
            registrations: [],
            ranking: [],
            config: {}
        };

        // Plugin ativo
        this.plugin = null;

        // Inicializar
        this.loadState();
        this.render();
    }

    // ============================================================
    //  📦 PERSISTÊNCIA
    // ============================================================
    loadState() {
        const saved = localStorage.getItem('campaign_data');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                this.state = { ...this.state, ...data };
            } catch (e) { /* ignora */ }
        }

        const userSaved = localStorage.getItem('campaign_user');
        if (userSaved) {
            try {
                this.state.usuario = JSON.parse(userSaved);
            } catch (e) { /* ignora */ }
        }
    }

    saveState() {
        localStorage.setItem('campaign_data', JSON.stringify(this.state));
        if (this.state.usuario) {
            localStorage.setItem('campaign_user', JSON.stringify(this.state.usuario));
        } else {
            localStorage.removeItem('campaign_user');
        }
    }

    // ============================================================
    //  🔌 PLUGIN SYSTEM
    // ============================================================
    registerPlugin(plugin) {
        this.plugin = plugin;
        plugin.engine = this;
        
        if (plugin.defaultItems) {
            this.state.items = plugin.defaultItems;
        }
        if (plugin.defaultConfig) {
            this.state.config = { ...this.state.config, ...plugin.defaultConfig };
        }
        
        this.saveState();
        this.render();
        
        // Atualizar título
        if (plugin.defaultConfig?.campaignName) {
            document.getElementById('campaignTitle').textContent = plugin.defaultConfig.campaignName;
        }
        if (plugin.name) {
            document.getElementById('campaignSubtitle').textContent = `${plugin.name} v${plugin.version}`;
        }
    }

    // ============================================================
    //  👤 USUÁRIO
    // ============================================================
    login() {
        const nome = document.getElementById('loginNome').value.trim();
        if (!nome) { this.toast('⚠️ Digite seu nome!'); return; }
        this.state.usuario = { nome };
        this.saveState();
        this.updateUserBadge();
        closeModal('modalLogin');
        this.render();
        this.toast(`🎉 Bem-vindo, ${nome}!`);
    }

    logout() {
        if (confirm(`Deseja sair, ${this.state.usuario?.nome}?`)) {
            this.state.usuario = null;
            localStorage.removeItem('campaign_user');
            this.updateUserBadge();
            this.render();
            this.toast('👋 Até logo!');
        }
    }

    toggleLogin() {
        if (this.state.usuario) {
            this.logout();
        } else {
            openModal('modalLogin');
            setTimeout(() => document.getElementById('loginNome')?.focus(), 100);
        }
    }

    updateUserBadge() {
        const badge = document.getElementById('userBadge');
        if (this.state.usuario) {
            badge.textContent = `👤 ${this.state.usuario.nome}`;
        } else {
            badge.textContent = '👤 Visitante';
        }
    }

    // ============================================================
    //  🛒 SELEÇÕES (Carrinho)
    // ============================================================
    addSelection(itemId, metadata = {}) {
        if (!this.plugin) { this.toast('⚠️ Plugin não carregado'); return; }
        
        const item = this.state.items.find(i => i.id === itemId);
        if (!item) { this.toast('⚠️ Item não encontrado'); return; }

        const valid = this.plugin.validateSelection(item, metadata);
        if (!valid) { return; }

        const existing = this.state.selections.findIndex(s => s.item_id === itemId);
        if (existing !== -1) {
            this.state.selections[existing] = { 
                ...this.state.selections[existing], 
                ...metadata,
                quantidade: (this.state.selections[existing].quantidade || 1) + 1
            };
        } else {
            this.state.selections.push({
                item_id: itemId,
                nome: item.nome,
                valor: item.valor || 0,
                quantidade: 1,
                ...metadata,
                data_selecao: new Date().toISOString()
            });
        }

        // Atualizar item
        if (this.plugin.onItemSelected) {
            this.plugin.onItemSelected(item, this.state);
        }

        this.saveState();
        this.render();
        this.toast(`✅ Adicionado: ${item.nome}`);
    }

    removeSelection(itemId) {
        const removed = this.state.selections.find(s => s.item_id === itemId);
        if (removed && this.plugin?.onItemRemoved) {
            this.plugin.onItemRemoved(removed, this.state);
        }
        this.state.selections = this.state.selections.filter(s => s.item_id !== itemId);
        this.saveState();
        this.render();
        this.toast('🗑️ Removido');
    }

    clearCart() {
        if (this.state.selections.length === 0) return;
        if (!confirm('Remover todos?')) return;
        
        if (this.plugin?.onClearCart) {
            this.plugin.onClearCart(this.state);
        }
        
        this.state.selections = [];
        this.saveState();
        this.render();
        this.toast('🗑️ Carrinho limpo');
    }

    getTotal() {
        return this.state.selections.reduce((sum, s) => sum + (s.valor || 0) * (s.quantidade || 1), 0);
    }

    // ============================================================
    //  📤 CHECKOUT
    // ============================================================
    checkout() {
        if (this.state.selections.length === 0) {
            this.toast('⚠️ Nenhum item selecionado');
            return;
        }

        if (!this.state.usuario) {
            this.toast('🔑 Faça login para continuar');
            openModal('modalLogin');
            return;
        }

        if (this.plugin && this.plugin.renderCheckout) {
            const content = this.plugin.renderCheckout(this.state.selections);
            document.getElementById('checkoutContent').innerHTML = content;
            document.getElementById('checkoutTitle').textContent = 
                this.plugin.checkoutTitle || '📋 Resumo';
            openModal('modalCheckout');
        } else {
            this.renderGenericCheckout();
        }
    }

    renderGenericCheckout() {
        let html = `<div style="background:#f8fafc; border-radius:8px; padding:16px;">`;
        html += `<p><strong>👤 ${this.state.usuario.nome}</strong></p><hr>`;
        let total = 0;
        this.state.selections.forEach(s => {
            total += s.valor * (s.quantidade || 1);
            html += `
                <div class="flex-between" style="padding:4px 0;">
                    <span>${s.nome} ${s.quantidade > 1 ? `×${s.quantidade}` : ''}</span>
                    <span>R$ ${(s.valor * (s.quantidade || 1)).toFixed(2)}</span>
                </div>
            `;
        });
        html += `<hr><div class="flex-between" style="font-weight:bold;">
            <span>TOTAL</span>
            <span>R$ ${total.toFixed(2)}</span>
        </div></div>`;
        html += `<p class="text-muted mt-8">📱 Envie e aguarde a confirmação.</p>`;
        
        document.getElementById('checkoutContent').innerHTML = html;
        document.getElementById('checkoutTitle').textContent = '📋 Resumo';
        openModal('modalCheckout');
    }

    confirmCheckout() {
        if (!this.plugin) { this.toast('⚠️ Plugin não carregado'); return; }

        const registrations = this.plugin.registerSelections(this.state.selections, this.state.usuario);
        
        if (this.plugin.updateRanking) {
            this.state.ranking = this.plugin.updateRanking(this.state.ranking, registrations);
        }

        this.state.registrations.push(...registrations);
        this.state.selections = [];
        this.saveState();
        closeModal('modalCheckout');

        if (this.plugin.getWhatsAppMessage) {
            const msg = this.plugin.getWhatsAppMessage(registrations, this.state.usuario);
            const phone = this.state.config.whatsapp || '5511999999999';
            window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
        }

        this.render();
        this.toast('📤 Enviado! Aguarde confirmação.');
    }

    // ============================================================
    //  🎨 RENDER
    // ============================================================
    render() {
        this.updateUserBadge();
        this.renderCart();
        this.renderTabs();
        
        if (this.plugin && this.plugin.render) {
            this.plugin.render(this.state);
        } else {
            document.getElementById('mainContent').innerHTML = `
                <div class="text-center" style="padding:60px 0;">
                    <p style="font-size:3rem;">🔌</p>
                    <p><strong>Nenhum plugin carregado</strong></p>
                    <p class="text-muted">Configure a campanha para começar.</p>
                </div>
            `;
        }
    }

    renderTabs() {
        const container = document.getElementById('tabContainer');
        container.innerHTML = '';
        
        const tabs = this.plugin?.getTabs?.() || [
            { id: 'main', label: '📋 Itens', active: true },
            { id: 'my', label: '📁 Meus', active: false },
            { id: 'ranking', label: '📊 Ranking', active: false }
        ];

        tabs.forEach(tab => {
            const el = document.createElement('div');
            el.className = `tab${tab.active ? ' active' : ''}`;
            el.textContent = tab.label;
            el.dataset.tabId = tab.id;
            el.onclick = () => this.switchTab(tab.id);
            container.appendChild(el);
        });
    }

    switchTab(tabId) {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        const tab = document.querySelector(`.tab[data-tab-id="${tabId}"]`);
        if (tab) tab.classList.add('active');

        if (this.plugin && this.plugin.switchTab) {
            this.plugin.switchTab(tabId, this.state);
        }
    }

    renderCart() {
        const container = document.getElementById('cartItems');
        const count = document.getElementById('cartCount');
        const total = document.getElementById('cartTotal');
        const label = document.getElementById('cartLabel');
        const checkoutBtn = document.getElementById('btnCheckout');

        if (this.plugin?.cartLabel) {
            label.textContent = this.plugin.cartLabel;
        } else {
            label.textContent = '🛒 Selecionados';
        }

        if (this.plugin?.checkoutLabel) {
            checkoutBtn.textContent = this.plugin.checkoutLabel;
        } else {
            checkoutBtn.textContent = '📤 Finalizar';
        }

        count.textContent = this.state.selections.length;

        if (this.state.selections.length === 0) {
            container.innerHTML = '<div class="text-muted text-center" style="padding:8px 0;">Nenhum item selecionado</div>';
            total.textContent = 'R$ 0,00';
            checkoutBtn.disabled = true;
            return;
        }

        checkoutBtn.disabled = false;
        const sum = this.getTotal();
        
        if (this.plugin?.renderCartItem) {
            container.innerHTML = this.state.selections.map(s => 
                this.plugin.renderCartItem(s)
            ).join('');
        } else {
            container.innerHTML = this.state.selections.map(s => `
                <div class="cart-item">
                    <span>${s.nome} ${s.quantidade > 1 ? `×${s.quantidade}` : ''}</span>
                    <span>R$ ${(s.valor * (s.quantidade || 1)).toFixed(2)}</span>
                </div>
            `).join('');
        }

        total.textContent = `R$ ${sum.toFixed(2).replace('.', ',')}`;
    }

    // ============================================================
    //  🍞 TOAST
    // ============================================================
    toast(msg) {
        const container = document.getElementById('toastContainer');
        const el = document.createElement('div');
        el.className = 'toast';
        el.textContent = msg;
        container.appendChild(el);
        setTimeout(() => {
            el.style.opacity = '0';
            el.style.transition = 'opacity 0.5s';
            setTimeout(() => el.remove(), 500);
        }, 3000);
    }

    // ============================================================
    //  🔧 UTILITÁRIOS
    // ============================================================
    generateId() {
        return Date.now() + Math.random() * 10000;
    }

    formatDate(date) {
        return new Date(date).toLocaleString('pt-BR');
    }

    formatMoney(value) {
        return `R$ ${(value || 0).toFixed(2).replace('.', ',')}`;
    }
}

// ================================================================
//  🌐 FUNÇÕES GLOBAIS
// ================================================================
let campaign = null;

function initCampaign(plugin) {
    if (!campaign) {
        campaign = new CampaignEngine();
    }
    if (plugin) {
        campaign.registerPlugin(plugin);
    }
    return campaign;
}

function openModal(id) {
    document.getElementById(id)?.classList.add('open');
}

function closeModal(id) {
    document.getElementById(id)?.classList.remove('open');
}

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
    }
});

// Fechar modal clicando fora
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('open');
    }
});
