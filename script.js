const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "O Paradoxo de Moravec mostra que para uma IA é fácil jogar xadrez nível mestre, mas é difícil dobrar uma toalha ou desviar de objetos. O que isso te faz pensar sobre o futuro?",
    alternativas: [
      {
        texto: "A destreza física exige um corpo e uma história evolutiva que máquinas não têm tão cedo.",
        afirmacao: "Você enxerga a adaptação física e a experiência no mundo real como vantagens duradouras do ser humano."
      },
      {
        texto: "Com sensores melhores e robôs mais ágeis, até as tarefas simples do dia a dia serão automatizadas.",
        afirmacao: "Você acredita que a evolução da robótica logo tornará as máquinas tão hábeis no mundo físico quanto no digital."
      }
    ]
  },
  {
    enunciado: "O experimento do Quarto Chinês diz que uma IA manipula regras perfeitamente, mas não entende o significado real das coisas. Para você, essa cópia de inteligência basta?",
    alternativas: [
      {
        texto: "Basta quando o objetivo é resolver problemas rápidos e organizar grandes volumes de informação.",
        afirmacao: "Você considera que simular raciocínio já é suficiente para tarefas técnicas e operacionais do cotidiano."
      },
      {
        texto: "Não basta; sem compreensão de contexto e sentido, a máquina apenas imita respostas.",
        afirmacao: "Você diferencia simulação de entendimento real e vê limites claros entre código e compreensão."
      }
    ]
  },
  {
    enunciado: "IAs Generativas às vezes alucinam e inventam fatos com total convicção. Como você reage a essas falhas?",
    alternativas: [
      {
        texto: "Uso como ponto de partida para ideias novas, mas sempre reviso tudo antes de confiar.",
        afirmacao: "Você trata a IA como apoio criativo sob supervisão, equilibrando exploração de ideias e checagem."
      },
      {
        texto: "Evito usar em temas sérios, pois respostas inventadas com segurança confundem mais do que ajudam.",
        afirmacao: "Você valoriza a confiabilidade e evita depender de sistemas propensos a inventar informações."
      }
    ]
  },
  {
    enunciado: "O dilema do Maximizador de Clipes de Papel alerta que uma IA superinteligente pode destruir o mundo tentando cumprir uma meta boba com eficiência cega. O que te assusta mais?",
    alternativas: [
      {
        texto: "Criar objetivos mal definidos e deixar o sistema otimizar tudo sem freios éticos.",
        afirmacao: "Você destaca a responsabilidade humana de desenhar metas seguras e regras claras desde o início."
      },
      {
        texto: "Entregar decisões críticas a algoritmos sem espaço para intervenção ou revisão humana.",
        afirmacao: "Você defende manter o controle humano ativo em sistemas cada vez mais autônomos."
      }
    ]
  },
  {
    enunciado: "O Problema da Caixa Preta faz com que decisões de Deep Learning sejam impossíveis de rastrear. Você aceitaria um diagnóstico médico vindo de uma IA assim?",
    alternativas: [
      {
        texto: "Aceitaria como segunda opinião, desde que exames e um médico avaliem o caso junto.",
        afirmacao: "E, no fim, você prefere combinar a análise estatística da IA com o cuidado e a validação clínica humana."
      },
      {
        texto: "Não aceitaria sem transparência; na saúde, é essencial entender como o resultado foi gerado.",
        afirmacao: "E, no fim, você exige explicabilidade e clareza antes de aceitar decisões sensíveis ligadas à saúde."
      }
    ]
  }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativa);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacoes + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Seu Perfil diante do Futuro...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();
