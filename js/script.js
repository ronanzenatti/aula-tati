var resultadosGlobal;

// Estrutura de dados do quiz da Bússola
const quizBussola = {
    perguntas: [
        {
            id: 1,
            texto: "No começo de um novo ciclo (curso, estágio ou trabalho), qual legado quer plantar?",
            alternativas: [
                { texto: "🌠 Inspirar e engajar pessoas em projetos que mudam o mundo.", personas: ["Visionário com Propósito"] },
                { texto: "🧩 Inovar processos, criar soluções surpreendentes.", personas: ["Criativo em Movimento", "Construtor de Impacto"] },
                { texto: "🌄 Fazer parte de diferentes grupos e viver novas experiências.", personas: ["Explorador de Sonhos", "Em Busca do Norte"] },
                { texto: "🏅 Mostrar resultados rápidos e ser reconhecido logo de início.", personas: ["Construtor de Impacto"] },
                { texto: "🌻 Permitir-se mudar de ideia, recomeçar quando sentir necessidade.", personas: ["Em Busca do Norte", "Explorador de Sonhos"] }
            ]
        },
        {
            id: 2,
            texto: "Diante de uma grande oportunidade, o que fala mais alto?",
            alternativas: [
                { texto: "🔗 O impacto coletivo ou social que posso produzir.", personas: ["Visionário com Propósito", "Explorador de Sonhos"] },
                { texto: "🔬 A chance de reinventar o projeto, dar um toque único.", personas: ["Criativo em Movimento"] },
                { texto: "🧭 O quanto vou aprender conhecendo novas realidades e pessoas.", personas: ["Explorador de Sonhos"] },
                { texto: "📈 O potencial de entregar resultados concretos e crescer profissionalmente.", personas: ["Construtor de Impacto"] },
                { texto: "🍃 A liberdade para experimentar, sabendo que o erro é bem-vindo.", personas: ["Criativo em Movimento", "Em Busca do Norte"] }
            ]
        },
        {
            id: 3,
            texto: "Ao receber um feedback desafiador de quem admira (professor, mentor ou gestor), o que te move?",
            alternativas: [
                { texto: "💡 Refletir sobre o propósito do meu trabalho para crescer.", personas: ["Visionário com Propósito"] },
                { texto: "🎭 Buscar novos caminhos, experimentando abordagens alternativas.", personas: ["Criativo em Movimento"] },
                { texto: "🛤️ Ouvir várias opiniões e explorar aprendizados fora do esperado.", personas: ["Explorador de Sonhos", "Em Busca do Norte"] },
                { texto: "🚩 Planejar uma resposta prática, superando expectativas nos resultados.", personas: ["Construtor de Impacto"] },
                { texto: "🧘 Aceitar a dúvida, permitindo-se aprender com a vulnerabilidade.", personas: ["Em Busca do Norte"] }
            ]
        },
        {
            id: 4,
            texto: "Na decisão entre um projeto visionário arriscado e um estável/tradicional, você tende a...",
            alternativas: [
                { texto: "🚀 Escolher o inovador, guiado pelo sonho de deixar um novo legado.", personas: ["Visionário com Propósito", "Criativo em Movimento"] },
                { texto: "🖌️ Ir para o experimental, onde criatividade tem espaço para florescer.", personas: ["Criativo em Movimento"] },
                { texto: "🎡 Experimentar ambos até decidir qual trilha ressoa mais com sua essência.", personas: ["Explorador de Sonhos", "Em Busca do Norte"] },
                { texto: "🗂️ Optar pelo seguro, mirando nos resultados e reconhecimento rápido.", personas: ["Construtor de Impacto"] },
                { texto: "🌵 Deixar o processo fluir, aceitando recomeços se mudar de ideia.", personas: ["Em Busca do Norte"] }
            ]
        },
        {
            id: 5,
            texto: "Se pudesse escolher um marco de orgulho ao final do curso/carreira, seria...",
            alternativas: [
                { texto: "🔔 Ver o impacto de longo prazo em pessoas/comunidades.", personas: ["Visionário com Propósito"] },
                { texto: "🎇 Ser reconhecido por ideias e projetos originais.", personas: ["Criativo em Movimento"] },
                { texto: "🌎 Contar histórias diversas de trilhas e aprendizados vividos.", personas: ["Explorador de Sonhos"] },
                { texto: "🏆 Somar conquistas concretas, resultados, prêmios ou promoções.", personas: ["Construtor de Impacto"] },
                { texto: "💭 Valorizar a coragem de mudar e aprender em todos os recomeços.", personas: ["Em Busca do Norte", "Explorador de Sonhos"] }
            ]
        },
        {
            id: 6,
            texto: "Diante de uma oportunidade fora da zona de conforto (intercâmbio, startup, setor novo), você:",
            alternativas: [
                { texto: "🌊 Pensa no quanto pode gerar impacto positivo e inspirar outros.", personas: ["Visionário com Propósito"] },
                { texto: "🎲 Traz sua marca pessoal, inovando e criando desde o início.", personas: ["Criativo em Movimento"] },
                { texto: "🧳 Mergulha no novo para sair da rotina e viver outra cultura/realidade.", personas: ["Explorador de Sonhos"] },
                { texto: "⚡ Busca mostrar competência e entregar resultados tangíveis rapidamente.", personas: ["Construtor de Impacto"] },
                { texto: "🌙 Vai sem saber direito onde vai dar, aberto(a) para ajustar com o tempo.", personas: ["Em Busca do Norte"] }
            ]
        },
        {
            id: 7,
            texto: "Ao participar de um grupo, seu desejo maior é:",
            alternativas: [
                { texto: "🎤 Engajar todos para um propósito maior, além das tarefas.", personas: ["Visionário com Propósito"] },
                { texto: "🦄 Propor soluções diferentes, inspirar mudanças de rota.", personas: ["Criativo em Movimento"] },
                { texto: "🛰️ Trocar vivências e aprender com as diferenças do grupo.", personas: ["Explorador de Sonhos", "Em Busca do Norte"] },
                { texto: "👔 Ser referência de entrega e eficiência na equipe.", personas: ["Construtor de Impacto"] },
                { texto: "🧪 Entender em qual papel me sinto melhor, testando possibilidades.", personas: ["Em Busca do Norte", "Explorador de Sonhos"] }
            ]
        },
        {
            id: 8,
            texto: "Se pudesse dar um conselho a alguém sobre trajetória acadêmica ou profissional, diria...",
            alternativas: [
                { texto: "🏹 Busque sempre propósito e sentido no que escolher.", personas: ["Visionário com Propósito"] },
                { texto: "🛤️ Não tema criar, ousar ou mudar tudo quando sentir necessidade.", personas: ["Criativo em Movimento"] },
                { texto: "🗺️ Permita-se explorar tudo, as dúvidas mostram novos caminhos.", personas: ["Explorador de Sonhos", "Em Busca do Norte"] },
                { texto: "🛠️ Foque em metas concretas, construa seu valor com resultados visíveis.", personas: ["Construtor de Impacto"] },
                { texto: "🌀 Lembre-se: mudar faz parte, coragem também é buscar novos começos.", personas: ["Em Busca do Norte"] }
            ]
        },
        {
            id: 9,
            texto: "Na sua definição, sucesso significa:",
            alternativas: [
                { texto: "🕊️ Ter deixado legado, propósito e inspiração para além de mim.", personas: ["Visionário com Propósito"] },
                { texto: "✨ Ser reconhecido pela originalidade das minhas ideias e projetos.", personas: ["Criativo em Movimento", "Explorador de Sonhos"] },
                { texto: "📚 Ter uma vida repleta de aprendizados e caminhos diversos.", personas: ["Explorador de Sonhos"] },
                { texto: "🔒 Conquistar realizações objetivas: resultados, promoções e impacto concreto.", personas: ["Construtor de Impacto"] },
                { texto: "💫 Aceitar e aprender em cada ciclo, sem ansiedade por certezas finais.", personas: ["Em Busca do Norte", "Explorador de Sonhos"] }
            ]
        },
        {
            id: 10,
            texto: "O que te faz levantar da cama em manhãs difíceis?",
            alternativas: [
                { texto: "🔥 O sentimento de que minha jornada pode inspirar ou ajudar alguém.", personas: ["Visionário com Propósito"] },
                { texto: "✨ A possibilidade de experimentar algo novo, criar ou mudar meu roteiro.", personas: ["Criativo em Movimento", "Explorador de Sonhos"] },
                { texto: "🌱 A expectativa de viver uma surpresa, conhecer pessoas ou caminhos diferentes.", personas: ["Explorador de Sonhos", "Em Busca do Norte"] },
                { texto: "💪 O desafio de entregar resultado ou alcançar uma meta pessoal.", personas: ["Construtor de Impacto"] },
                { texto: "🌦️ A vontade de me descobrir, aceitar dúvidas e celebrar pequenos avanços.", personas: ["Em Busca do Norte"] }
            ]
        }
    ],
    personas: [
        "Visionário com Propósito",
        "Explorador de Sonhos",
        "Construtor de Impacto",
        "Criativo em Movimento",
        "Em Busca do Norte"
    ]
};

// Estado da aplicação
let estadoQuiz = {
    perguntaAtual: 0,
    pontuacoes: {},
    respostas: []
};

// Inicializa pontuações
function inicializarPontuacoes() {
    quizBussola.personas.forEach(persona => {
        estadoQuiz.pontuacoes[persona] = 0;
    });
}

// Inicia o quiz
function iniciarQuiz() {
    inicializarPontuacoes();
    estadoQuiz.perguntaAtual = 0;
    mostrarPergunta();
}

// Mostra a pergunta atual
function mostrarPergunta() {
    const pergunta = quizBussola.perguntas[estadoQuiz.perguntaAtual];
    const corFundo = estadoQuiz.perguntaAtual % 2 === 0 ? 'tela-pergunta-roxa' : 'tela-pergunta-azul';

    // Embaralha as alternativas para cada usuário
    const alternativasEmbaralhadas = [...pergunta.alternativas].sort(() => Math.random() - 0.5);

    const html = `
        <div class="quiz-container">
            <div class="progresso-container">
                <div class="progress">
                    <div class="determinate"
                        style="width: ${((estadoQuiz.perguntaAtual + 1) / quizBussola.perguntas.length) * 100}%"></div>
                </div>
                <p style="margin-top: 10px;margin-bottom:5px">Pergunta ${estadoQuiz.perguntaAtual + 1} de
                    ${quizBussola.perguntas.length}</p>
            </div>

            <div class="instrucoes">
                <i class="material-icons">info</i>
                Ordene de acordo com sua preferência:
                <b>1º</b> = Mais se identifica até <b>${alternativasEmbaralhadas.length}º</b> = Menos se
                    identifica
            </div>

            <h2 class="pergunta-titulo">${pergunta.texto}</h2>

            <ul id="alternativas" class="alternativas-lista">
                <span class="indicador-preferencia">Mais me identifico</span><br>
                ${alternativasEmbaralhadas.map((alt, index) => `
                <li class="alternativa-item" data-alternativa='${JSON.stringify(alt)}'>
                    <span class="posicao-numero">${index + 1}</span>
                    <i class="material-icons drag-handle">drag_indicator</i>
                    <span class="alternativa-texto">${alt.texto}</span>
                </li>
                `).join('')}
                <span class="indicador-preferencia">Menos me identifica</span>
            </ul>

            <button class="btn btn-grande waves-effect waves-light white black-text" onclick="proximaPergunta()">
                ${estadoQuiz.perguntaAtual < quizBussola.perguntas.length - 1 ? 'Próxima Pergunta' : 'Ver Resultados'} <i
                    class="material-icons right">arrow_forward</i>
            </button>
        </div>
    `;

    const app = document.getElementById('app');
    app.className = `full-screen ${corFundo}`;
    app.innerHTML = html;

    // Inicializa drag and drop
    inicializarDragDrop();
}

// Inicializa funcionalidade de drag and drop
function inicializarDragDrop() {
    const lista = document.getElementById('alternativas');

    new Sortable(lista, {
        animation: 150,
        ghostClass: 'sortable-ghost',
        dragClass: 'sortable-drag',
        handle: '.alternativa-item',
        onEnd: function (evt) {
            atualizarPosicoes();
        }
    });

    // Adiciona suporte para navegação por teclado
    adicionarNavegacaoTeclado();
}

// Atualiza números de posição após reordenação
function atualizarPosicoes() {
    const items = document.querySelectorAll('.alternativa-item');
    items.forEach((item, index) => {
        const numero = item.querySelector('.posicao-numero');
        numero.textContent = index + 1;
    });
}

// Adiciona navegação por teclado
function adicionarNavegacaoTeclado() {
    const items = document.querySelectorAll('.alternativa-item');

    items.forEach((item, index) => {
        item.setAttribute('tabindex', '0');

        item.addEventListener('keydown', (e) => {
            const lista = item.parentElement;
            const allItems = [...lista.children];
            const currentIndex = allItems.indexOf(item);

            if (e.key === 'ArrowUp' && currentIndex > 0) {
                e.preventDefault();
                lista.insertBefore(item, allItems[currentIndex - 1]);
                item.focus();
                atualizarPosicoes();
            } else if (e.key === 'ArrowDown' && currentIndex < allItems.length - 1) {
                e.preventDefault();
                lista.insertBefore(allItems[currentIndex + 1], item);
                item.focus();
                atualizarPosicoes();
            }
        });
    });
}

// Processa resposta e vai para próxima pergunta
function proximaPergunta() {
    // Coleta ordem das alternativas
    const items = document.querySelectorAll('.alternativa-item');
    const totalAlternativas = items.length;

    items.forEach((item, index) => {
        const alternativa = JSON.parse(item.dataset.alternativa);
        const pontos = totalAlternativas - index; // Primeira posição recebe mais pontos

        // Adiciona pontos às personas correspondentes
        alternativa.personas.forEach(persona => {
            estadoQuiz.pontuacoes[persona] += pontos;
        });
    });

    // Salva resposta
    estadoQuiz.respostas.push({
        pergunta: estadoQuiz.perguntaAtual,
        ordem: [...items].map(item => JSON.parse(item.dataset.alternativa))
    });

    // Avança para próxima pergunta ou mostra resultados
    estadoQuiz.perguntaAtual++;

    if (estadoQuiz.perguntaAtual < quizBussola.perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultados();
    }
}

// Mostra os resultados finais
function mostrarResultados() {
    // Calcula pontuação máxima real considerando múltiplas personas por alternativa
    let pontuacaoMaximaReal = {};

    // Inicializa contadores para cada persona
    quizBussola.personas.forEach(persona => {
        pontuacaoMaximaReal[persona] = 0;
    });

    // Para cada pergunta, considera o melhor cenário possível para cada persona
    quizBussola.perguntas.forEach(pergunta => {
        const totalAlternativas = pergunta.alternativas.length;

        // Para cada persona, encontra a maior pontuação possível nesta pergunta
        quizBussola.personas.forEach(persona => {
            let maiorPontuacao = 0;

            pergunta.alternativas.forEach((alternativa, index) => {
                if (alternativa.personas.includes(persona)) {
                    // Se a persona estiver nesta alternativa, ela pode receber pontos máximos
                    maiorPontuacao = Math.max(maiorPontuacao, totalAlternativas);
                }
            });

            pontuacaoMaximaReal[persona] += maiorPontuacao;
        });
    });

    // Calcula percentuais brutos (podem ultrapassar 100%)
    const resultadosBrutos = Object.entries(estadoQuiz.pontuacoes)
        .map(([persona, pontos]) => ({
            persona: persona,
            pontos: pontos,
            percentualBruto: (pontos / pontuacaoMaximaReal[persona]) * 100
        }));

    // Encontra o maior percentual bruto
    const maiorPercentual = Math.max(...resultadosBrutos.map(r => r.percentualBruto));

    // Normaliza os percentuais para que o maior seja 100%
    const resultados = resultadosBrutos
        .map(resultado => ({
            persona: resultado.persona,
            pontos: resultado.pontos,
            percentual: Math.round((resultado.percentualBruto / maiorPercentual) * 100)
        }))
        .sort((a, b) => b.percentual - a.percentual);

    resultadosGlobal = resultados;

    // Gera HTML dos resultados
    const html = `
        <div class="quiz-container">
            <h1>Sua Bússola Vocacional</h1>
            <p class="descricao">
                Baseado em suas respostas, identificamos as personas que mais combinam com seu perfil.
                Os percentuais indicam o grau de identificação com cada tipo:
            </p>
            
            <div class="resultados-container">
                ${resultados.map((resultado, index) => `
                    <div class="resultado-item" style="animation-delay: ${index * 0.1}s">
                        <div class="resultado-titulo">
                            ${index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '⭐'} 
                            ${resultado.persona}
                        </div>
                        <div style="position: relative;">
                            <div class="resultado-barra" style="width: ${resultado.percentual}%;">
                                ${resultado.percentual}%
                            </div>
                        </div>
                        <p style="margin-top: 10px; font-size: 0.9rem; opacity: 0.8;">
                            ${getDescricaoPersona(resultado.persona)}
                        </p>
                    </div>
                `).join('')}
            </div>
            
            <div style="margin-top: 40px;">

                <button class="btn btn-grande waves-effect waves-light green" onclick="compartilharResultados()">
                    <i class="material-icons left">share</i>
                    Compartilhar
                </button>
<br>
                <a class="btn btn-grande waves-effect waves-light white-text z-depth-5  red darken-1"
                    style="margin-top: 10px;" target="_blank" href="https://carreiras.cps.sp.gov.br/">
                    Conheça o CPS Carreiras
                    <i class="material-icons left">explore</i>
                </a>
<br>
                <a style="margin-top: 10px;" href ="/" class="btn btn-grande waves-effect waves-light white black-text" onclick="reiniciarQuiz()">
                    <i class="material-icons left">refresh</i>
                    Fazer Novamente
                </a>
            </div>
            
            <p style="margin-top: 30px; font-size: 0.9rem; opacity: 0.7;">
                Este quiz é uma ferramenta de orientação vocacional e não substitui 
                aconselhamento profissional especializado.
            </p>
        </div>
    `;

    const app = document.getElementById('app');
    app.className = 'full-screen tela-resultados';
    app.innerHTML = html;

    // Anima as barras de resultado
    setTimeout(() => {
        animarBarrasResultado();
    }, 100);
}

// Retorna descrição da persona
function getDescricaoPersona(persona) {
    const descricoes = {
        "Visionário com Propósito": "Você busca deixar um legado positivo, inspirando outros através de projetos com impacto social e significado profundo.",
        "Explorador de Sonhos": "Você valoriza experiências diversas, aprendizado contínuo e a descoberta de novos caminhos e possibilidades.",
        "Construtor de Impacto": "Você foca em resultados concretos, eficiência e reconhecimento através de entregas práticas e tangíveis.",
        "Criativo em Movimento": "Você prioriza inovação, experimentação e a liberdade de criar soluções originais e transformadoras.",
        "Em Busca do Norte": "Você abraça a incerteza, valoriza o processo de autodescoberta e aceita mudanças como parte natural do crescimento."
    };

    return descricoes[persona] || "Persona com características específicas de perfil vocacional.";
}

// Anima barras de resultado
function animarBarrasResultado() {
    const barras = document.querySelectorAll('.resultado-barra');
    barras.forEach((barra, index) => {
        setTimeout(() => {
            barra.style.width = barra.style.width;
        }, index * 100);
    });
}

// Reinicia o quiz
function reiniciarQuiz() {
    estadoQuiz = {
        perguntaAtual: 0,
        pontuacoes: {},
        respostas: []
    };

    const app = document.getElementById('app');
    app.className = 'full-screen tela-inicial';
    app.innerHTML = `
        <div class="quiz-container">
            <img style="max-width: 80%;" src="imgs/logo.png" alt="Logo CPS">
            <h1 style="margin-top: 0;">Descubra Sua Bússola Vocacional</h1>
            <p class="descricao">
                Este quiz foi desenvolvido para ajudar você a descobrir qual persona vocacional 
                mais combina com seu perfil, valores e aspirações. Através de perguntas reflexivas 
                sobre situações cotidianas, identificaremos seu tipo predominante.
            </p>
            <p class="descricao">
                <i class="material-icons">timer</i> Tempo estimado: 5-10 minutos<br>
                <i class="material-icons">security</i> Suas respostas são anônimas e não são armazenadas
            </p>
                            <a class="btn btn-grande waves-effect waves-light white-text z-depth-5  red darken-1"
                    style="margin-top: 10px;" target="_blank" href="https://carreiras.cps.sp.gov.br/">
                    Conheça o CPS Carreiras
                    <i class="material-icons left">explore</i>
                </a>
                
            <button class="btn btn-grande waves-effect waves-light white black-text" onclick="iniciarQuiz()">
                Começar Jornada
                <i class="material-icons right">arrow_forward</i>
            </button>


        </div>
    `;
}

// Compartilha resultados
function compartilharResultados() {
    const resultados = resultadosGlobal
        .map(({ persona, pontos, percentual }) => ({
            persona: persona,
            pontos: pontos,
            percentual: percentual
        }))
        .sort((a, b) => b.pontos - a.pontos)
        .slice(0, 3);

    const texto = `Descobri minha bússola vocacional! 
Minhas principais personas são: 
1. ${resultados[0].persona} - ${resultados[0].percentual}%
2. ${resultados[1].persona} - ${resultados[1].percentual}%
3. ${resultados[2].persona} - ${resultados[2].percentual}%

Faça o quiz e descubra a sua!
https://bussula-carreiras.vercel.app`;

    if (navigator.share) {
        navigator.share({
            title: 'Minha Bússola Vocacional',
            text: texto
        })
            .then(() => console.log('Compartilhado com sucesso!'))
            .catch((error) => console.log('Erro ao compartilhar:', error));
    } else {
        navigator.clipboard.writeText(texto).then(() => {
            M.toast({ html: 'Resultado copiado! Cole para compartilhar.', classes: 'green' });
        }).catch(err => {
            M.toast({ html: 'Não foi possível copiar o resultado.', classes: 'red' });
            console.error('Erro ao copiar para a área de transferência: ', err);
        });
    }
}

// Função de tela cheia
function toggleTelaCheia() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Erro ao tentar entrar em tela cheia: ${err.message} (${err.name})`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

document.addEventListener('fullscreenchange', () => {
    const enterIcon = document.getElementById('fullscreen-enter-icon');
    const exitIcon = document.getElementById('fullscreen-exit-icon');

    if (document.fullscreenElement) {
        enterIcon.classList.add('hidden-icon');
        exitIcon.classList.remove('hidden-icon');
    } else {
        enterIcon.classList.remove('hidden-icon');
        exitIcon.classList.add('hidden-icon');
    }
});

// Inicializa Materialize components
document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit();
});