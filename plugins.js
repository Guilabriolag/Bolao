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
        // ================================================================
//  📦 DADOS OFICIAIS - COPA DO MUNDO 2026
//  Fase de Grupos - Todos os 48 jogos
// ================================================================

const JOGOS_COPA_2026 = [
    // ==================== GRUPO A ====================
    { 
        id: 1,
        data: '2026-06-11', 
        hora: '16:00', 
        local: 'Cidade do México',
        time1: 'México', 
        bandeira1: '🇲🇽',
        time2: 'África do Sul', 
        bandeira2: '🇿🇦',
        grupo: 'A',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 2,
        data: '2026-06-11', 
        hora: '23:00', 
        local: 'Guadalajara',
        time1: 'Coreia do Sul', 
        bandeira1: '🇰🇷',
        time2: 'Tchéquia', 
        bandeira2: '🇨🇿',
        grupo: 'A',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 25,
        data: '2026-06-18', 
        hora: '13:00', 
        local: 'Atlanta',
        time1: 'Tchéquia', 
        bandeira1: '🇨🇿',
        time2: 'África do Sul', 
        bandeira2: '🇿🇦',
        grupo: 'A',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 28,
        data: '2026-06-18', 
        hora: '22:00', 
        local: 'Guadalajara',
        time1: 'México', 
        bandeira1: '🇲🇽',
        time2: 'Coreia do Sul', 
        bandeira2: '🇰🇷',
        grupo: 'A',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 43,
        data: '2026-06-24', 
        hora: '22:00', 
        local: 'Cidade do México',
        time1: 'Tchéquia', 
        bandeira1: '🇨🇿',
        time2: 'México', 
        bandeira2: '🇲🇽',
        grupo: 'A',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 44,
        data: '2026-06-24', 
        hora: '22:00', 
        local: 'Monterrey',
        time1: 'África do Sul', 
        bandeira1: '🇿🇦',
        time2: 'Coreia do Sul', 
        bandeira2: '🇰🇷',
        grupo: 'A',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },

    // ==================== GRUPO B ====================
    { 
        id: 3,
        data: '2026-06-12', 
        hora: '16:00', 
        local: 'Toronto',
        time1: 'Canadá', 
        bandeira1: '🇨🇦',
        time2: 'Bósnia', 
        bandeira2: '🇧🇦',
        grupo: 'B',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 6,
        data: '2026-06-13', 
        hora: '16:00', 
        local: 'San Francisco',
        time1: 'Catar', 
        bandeira1: '🇶🇦',
        time2: 'Suíça', 
        bandeira2: '🇨🇭',
        grupo: 'B',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 26,
        data: '2026-06-18', 
        hora: '16:00', 
        local: 'Los Angeles',
        time1: 'Suíça', 
        bandeira1: '🇨🇭',
        time2: 'Bósnia', 
        bandeira2: '🇧🇦',
        grupo: 'B',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 27,
        data: '2026-06-18', 
        hora: '19:00', 
        local: 'Vancouver',
        time1: 'Canadá', 
        bandeira1: '🇨🇦',
        time2: 'Catar', 
        bandeira2: '🇶🇦',
        grupo: 'B',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 41,
        data: '2026-06-24', 
        hora: '16:00', 
        local: 'Vancouver',
        time1: 'Suíça', 
        bandeira1: '🇨🇭',
        time2: 'Canadá', 
        bandeira2: '🇨🇦',
        grupo: 'B',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 42,
        data: '2026-06-24', 
        hora: '16:00', 
        local: 'Seattle',
        time1: 'Bósnia', 
        bandeira1: '🇧🇦',
        time2: 'Catar', 
        bandeira2: '🇶🇦',
        grupo: 'B',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },

    // ==================== GRUPO C ====================
    { 
        id: 7,
        data: '2026-06-13', 
        hora: '19:00', 
        local: 'Nova York/NJ',
        time1: 'Brasil', 
        bandeira1: '🇧🇷',
        time2: 'Marrocos', 
        bandeira2: '🇲🇦',
        grupo: 'C',
        valor: 15.00,
        max_palpites: 200,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 8,
        data: '2026-06-13', 
        hora: '22:00', 
        local: 'Boston',
        time1: 'Haiti', 
        bandeira1: '🇭🇹',
        time2: 'Escócia', 
        bandeira2: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
        grupo: 'C',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 29,
        data: '2026-06-19', 
        hora: '19:00', 
        local: 'Boston',
        time1: 'Escócia', 
        bandeira1: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
        time2: 'Marrocos', 
        bandeira2: '🇲🇦',
        grupo: 'C',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 30,
        data: '2026-06-19', 
        hora: '21:30', 
        local: 'Filadélfia',
        time1: 'Brasil', 
        bandeira1: '🇧🇷',
        time2: 'Haiti', 
        bandeira2: '🇭🇹',
        grupo: 'C',
        valor: 15.00,
        max_palpites: 200,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 45,
        data: '2026-06-24', 
        hora: '19:00', 
        local: 'Miami',
        time1: 'Escócia', 
        bandeira1: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
        time2: 'Brasil', 
        bandeira2: '🇧🇷',
        grupo: 'C',
        valor: 15.00,
        max_palpites: 200,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 46,
        data: '2026-06-24', 
        hora: '19:00', 
        local: 'Atlanta',
        time1: 'Marrocos', 
        bandeira1: '🇲🇦',
        time2: 'Haiti', 
        bandeira2: '🇭🇹',
        grupo: 'C',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },

    // ==================== GRUPO D ====================
    { 
        id: 4,
        data: '2026-06-12', 
        hora: '22:00', 
        local: 'Los Angeles',
        time1: 'Estados Unidos', 
        bandeira1: '🇺🇸',
        time2: 'Paraguai', 
        bandeira2: '🇵🇾',
        grupo: 'D',
        valor: 12.00,
        max_palpites: 150,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 9,
        data: '2026-06-14', 
        hora: '01:00', 
        local: 'Vancouver',
        time1: 'Austrália', 
        bandeira1: '🇦🇺',
        time2: 'Turquia', 
        bandeira2: '🇹🇷',
        grupo: 'D',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 31,
        data: '2026-06-20', 
        hora: '00:00', 
        local: 'San Francisco',
        time1: 'Turquia', 
        bandeira1: '🇹🇷',
        time2: 'Paraguai', 
        bandeira2: '🇵🇾',
        grupo: 'D',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 49,
        data: '2026-06-25', 
        hora: '23:00', 
        local: 'Los Angeles',
        time1: 'Turquia', 
        bandeira1: '🇹🇷',
        time2: 'Estados Unidos', 
        bandeira2: '🇺🇸',
        grupo: 'D',
        valor: 12.00,
        max_palpites: 150,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 50,
        data: '2026-06-25', 
        hora: '23:00', 
        local: 'San Francisco',
        time1: 'Paraguai', 
        bandeira1: '🇵🇾',
        time2: 'Austrália', 
        bandeira2: '🇦🇺',
        grupo: 'D',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },

    // ==================== GRUPO E ====================
    { 
        id: 10,
        data: '2026-06-14', 
        hora: '14:00', 
        local: 'Houston',
        time1: 'Alemanha', 
        bandeira1: '🇩🇪',
        time2: 'Curaçao', 
        bandeira2: '🇨🇼',
        grupo: 'E',
        valor: 12.00,
        max_palpites: 120,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 12,
        data: '2026-06-14', 
        hora: '20:00', 
        local: 'Filadélfia',
        time1: 'Costa do Marfim', 
        bandeira1: '🇨🇮',
        time2: 'Equador', 
        bandeira2: '🇪🇨',
        grupo: 'E',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 33,
        data: '2026-06-20', 
        hora: '17:00', 
        local: 'Toronto',
        time1: 'Alemanha', 
        bandeira1: '🇩🇪',
        time2: 'Costa do Marfim', 
        bandeira2: '🇨🇮',
        grupo: 'E',
        valor: 12.00,
        max_palpites: 120,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 34,
        data: '2026-06-20', 
        hora: '21:00', 
        local: 'Kansas City',
        time1: 'Equador', 
        bandeira1: '🇪🇨',
        time2: 'Curaçao', 
        bandeira2: '🇨🇼',
        grupo: 'E',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 47,
        data: '2026-06-25', 
        hora: '17:00', 
        local: 'Filadélfia',
        time1: 'Curaçao', 
        bandeira1: '🇨🇼',
        time2: 'Costa do Marfim', 
        bandeira2: '🇨🇮',
        grupo: 'E',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 48,
        data: '2026-06-25', 
        hora: '17:00', 
        local: 'Nova York/NJ',
        time1: 'Equador', 
        bandeira1: '🇪🇨',
        time2: 'Alemanha', 
        bandeira2: '🇩🇪',
        grupo: 'E',
        valor: 12.00,
        max_palpites: 120,
        palpites_feitos: 0,
        resultado: null
    },

    // ==================== GRUPO F ====================
    { 
        id: 11,
        data: '2026-06-14', 
        hora: '17:00', 
        local: 'Dallas',
        time1: 'Holanda', 
        bandeira1: '🇳🇱',
        time2: 'Japão', 
        bandeira2: '🇯🇵',
        grupo: 'F',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 13,
        data: '2026-06-14', 
        hora: '23:00', 
        local: 'Monterrey',
        time1: 'Suécia', 
        bandeira1: '🇸🇪',
        time2: 'Tunísia', 
        bandeira2: '🇹🇳',
        grupo: 'F',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 32,
        data: '2026-06-20', 
        hora: '14:00', 
        local: 'Houston',
        time1: 'Holanda', 
        bandeira1: '🇳🇱',
        time2: 'Suécia', 
        bandeira2: '🇸🇪',
        grupo: 'F',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 36,
        data: '2026-06-21', 
        hora: '01:00', 
        local: 'Monterrey',
        time1: 'Tunísia', 
        bandeira1: '🇹🇳',
        time2: 'Japão', 
        bandeira2: '🇯🇵',
        grupo: 'F',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 51,
        data: '2026-06-25', 
        hora: '20:00', 
        local: 'Dallas',
        time1: 'Japão', 
        bandeira1: '🇯🇵',
        time2: 'Suécia', 
        bandeira2: '🇸🇪',
        grupo: 'F',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 52,
        data: '2026-06-25', 
        hora: '20:00', 
        local: 'Kansas City',
        time1: 'Tunísia', 
        bandeira1: '🇹🇳',
        time2: 'Holanda', 
        bandeira2: '🇳🇱',
        grupo: 'F',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },

    // ==================== GRUPO G ====================
    { 
        id: 14,
        data: '2026-06-15', 
        hora: '16:00', 
        local: 'Seattle',
        time1: 'Bélgica', 
        bandeira1: '🇧🇪',
        time2: 'Egito', 
        bandeira2: '🇪🇬',
        grupo: 'G',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 16,
        data: '2026-06-15', 
        hora: '22:00', 
        local: 'Los Angeles',
        time1: 'Irã', 
        bandeira1: '🇮🇷',
        time2: 'Nova Zelândia', 
        bandeira2: '🇳🇿',
        grupo: 'G',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 38,
        data: '2026-06-21', 
        hora: '16:00', 
        local: 'Los Angeles',
        time1: 'Bélgica', 
        bandeira1: '🇧🇪',
        time2: 'Irã', 
        bandeira2: '🇮🇷',
        grupo: 'G',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 40,
        data: '2026-06-21', 
        hora: '22:00', 
        local: 'Vancouver',
        time1: 'Nova Zelândia', 
        bandeira1: '🇳🇿',
        time2: 'Egito', 
        bandeira2: '🇪🇬',
        grupo: 'G',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },

    // ==================== GRUPO H ====================
    { 
        id: 15,
        data: '2026-06-15', 
        hora: '13:00', 
        local: 'Atlanta',
        time1: 'Espanha', 
        bandeira1: '🇪🇸',
        time2: 'Cabo Verde', 
        bandeira2: '🇨🇻',
        grupo: 'H',
        valor: 12.00,
        max_palpites: 120,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 17,
        data: '2026-06-15', 
        hora: '19:00', 
        local: 'Miami',
        time1: 'Arábia Saudita', 
        bandeira1: '🇸🇦',
        time2: 'Uruguai', 
        bandeira2: '🇺🇾',
        grupo: 'H',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 37,
        data: '2026-06-21', 
        hora: '13:00', 
        local: 'Atlanta',
        time1: 'Espanha', 
        bandeira1: '🇪🇸',
        time2: 'Arábia Saudita', 
        bandeira2: '🇸🇦',
        grupo: 'H',
        valor: 12.00,
        max_palpites: 120,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 39,
        data: '2026-06-21', 
        hora: '19:00', 
        local: 'Miami',
        time1: 'Uruguai', 
        bandeira1: '🇺🇾',
        time2: 'Cabo Verde', 
        bandeira2: '🇨🇻',
        grupo: 'H',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },

    // ==================== GRUPO I ====================
    { 
        id: 18,
        data: '2026-06-16', 
        hora: '16:00', 
        local: 'Nova York/NJ',
        time1: 'França', 
        bandeira1: '🇫🇷',
        time2: 'Senegal', 
        bandeira2: '🇸🇳',
        grupo: 'I',
        valor: 12.00,
        max_palpites: 150,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 19,
        data: '2026-06-16', 
        hora: '19:00', 
        local: 'Boston',
        time1: 'Iraque', 
        bandeira1: '🇮🇶',
        time2: 'Noruega', 
        bandeira2: '🇳🇴',
        grupo: 'I',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },

    // ==================== GRUPO J ====================
    { 
        id: 20,
        data: '2026-06-16', 
        hora: '22:00', 
        local: 'Kansas City',
        time1: 'Argentina', 
        bandeira1: '🇦🇷',
        time2: 'Argélia', 
        bandeira2: '🇩🇿',
        grupo: 'J',
        valor: 15.00,
        max_palpites: 200,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 21,
        data: '2026-06-17', 
        hora: '01:00', 
        local: 'San Francisco',
        time1: 'Áustria', 
        bandeira1: '🇦🇹',
        time2: 'Jordânia', 
        bandeira2: '🇯🇴',
        grupo: 'J',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },

    // ==================== GRUPO K ====================
    { 
        id: 22,
        data: '2026-06-17', 
        hora: '14:00', 
        local: 'Houston',
        time1: 'Portugal', 
        bandeira1: '🇵🇹',
        time2: 'RD do Congo', 
        bandeira2: '🇨🇩',
        grupo: 'K',
        valor: 12.00,
        max_palpites: 120,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 24,
        data: '2026-06-17', 
        hora: '23:00', 
        local: 'Cidade do México',
        time1: 'Uzbequistão', 
        bandeira1: '🇺🇿',
        time2: 'Colômbia', 
        bandeira2: '🇨🇴',
        grupo: 'K',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    },

    // ==================== GRUPO L ====================
    { 
        id: 23,
        data: '2026-06-17', 
        hora: '17:00', 
        local: 'Dallas',
        time1: 'Inglaterra', 
        bandeira1: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
        time2: 'Croácia', 
        bandeira2: '🇭🇷',
        grupo: 'L',
        valor: 12.00,
        max_palpites: 150,
        palpites_feitos: 0,
        resultado: null
    },
    { 
        id: 53,
        data: '2026-06-17', 
        hora: '20:00', 
        local: 'Toronto',
        time1: 'Gana', 
        bandeira1: '🇬🇭',
        time2: 'Panamá', 
        bandeira2: '🇵🇦',
        grupo: 'L',
        valor: 10.00,
        max_palpites: 100,
        palpites_feitos: 0,
        resultado: null
    }
];
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
