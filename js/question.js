const quiz = [
    {
        q:'Quantos anos o campus Campo Mourão da UTFPR completou em 2025?',
        options: ['30','27','19','18','16'],
        answer: 0,
        topic: "computer"
    },
    {
        q:'Qual curso de graduação tem na UTFPR-CM?',
        options: ['Engenharia Mecânica','Engenharia Eletrônica','Engenharia de Produção','Engenharia Elétrica','Engenharia de Software'],
        answer: 1,
        topic: "computer"
    },
    {
        q:'Licenciatura em Química é um curso que tem na UTFPR-CM?',
        options: ['Verdadeiro','Falso'],
        answer: 0,
        topic: "computer"
    },
    {
        q:'Antes de ser Universidade Tecnológica Federal do Paraná, a instituição era conhecida como CEFET – Centro Federal de Educação Tecnológica?',
        options: ['Sim', 'Não'],
        answer: 0,
        topic: "computer"
    },
    {
        q:'Qual dos cursos de graduação abaixo não tem na UTFPR-CM?',
        options: ['Engenharia Eletrônica','Engenharia Civil','Ciência da Computação','Tecnologia em Alimentos','Agronomia'],
        answer: 4,
        topic: "computer"
    },
    {
        q:'A UTFPR é uma universidade que possui 13 campi no estado do Paraná?',
        options: ['Verdadeiro','Falso'],
        answer: 0,
        topic: "computer"
    },
    {
        q:'A UTFPR não aceita a nota do ENEM como forma de seleção para estudar nela?',
        options: ['Verdadeiro','Falso'],
        answer: 1,
        topic: "computer"
    },
    {
        q:'Ciência da Computação é um dos cursos de graduação da UTFPR-CM?',
        options: ['Verdadeiro','Falso'],
        answer: 0,
        topic: "computer"
    },
    {
        q:'Qual dos cursos de graduação abaixo tem na UTFPR-CM?',
        options: ['Engenharia Química','Licenciatura em Química','Tecnologia em Alimentos','Engenharia de Alimentos','Engenharia Ambiental e Sanitária','Todas as opções'],
        answer: 5,
        topic: "computer"
    },
    {
        q:'Para estudar na UTFPR, você pode se inscrever no SISU com sua nota do ENEM ou fazer o vestibular',
        options: ['Verdadeiro','Falso'],
        answer: 0,
        topic: "computer"
    },
    {
        q:'Na UTFPR-CM tem ensino médio gratuito, que é o curso Técnico em Informática para Internet.',
        options: ['Verdadeiro','Falso'],
        answer: 0,
        topic: "computer"
    },
    {
        q:'Quantos cursos de graduação tem na UTFPR-CM?',
        options: ['10','9','8','7','6','5'],
        answer: 2,
        topic: "computer"
    },
    {
        q:'O nome do curso que forma professores na UTFPR-CM é?',
        options: ['Licenciatura em Física','Tecnologia em Alimentos','Licenciatura em Química','Técnico Integrado em Informática','Engenharia Química'],
        answer: 2,
        topic: "computer"
    },
    {
        q:'O que significa essa logomarca?',
        options: ['Universidade Tecnológica de Campo Mourão','Universidade Federal do Paraná','Universidade Federal Tecnológica do Paraná','Universidade Tecnológica do Paraná','Universidade Tecnológica Federal do Paraná'],
        answer: 4,
        img: 'img/logo-utfpr.png',
        topic: "computer"
    },
    {
        q:'A UTFPR é uma universidade 100% gratuita. Não precisa pagar nada para estudar aqui!',
        options: ['Verdadeiro','Falso'],
        answer: 0,
        topic: "computer"
    },
    {
        q:'Para aprender a construir prédios, pontes, usinas, rodovias, em qual curso eu posso estudar na UTFPR-CM?',
        options: ['Engenharia Têxtil','Engenharia de Produção','Engenharia Mecânica','Engenharia Civil','Engenharia Ambiental'],
        answer: 3,
        topic: "computer"
    },
    {
        q:'Para aprender a projetar sistemas de abastecimento de água e tratamento de esgoto, em qual curso eu posso estudar na UTFPR-CM?',
        options: ['Engenharia Civil','Engenharia Química','Tecnologia em Alimentos','Engenharia Eletrônica','Engenharia Ambiental e Sanitária'],
        answer: 4,
        topic: "computer"
    },
    {
        q:'Para trabalhar em indústrias que tratam o petróleo, ou que fabricam tintas, eu posso me formar no curso de Engenharia Química na UTFPR-CM?',
        options: ['Verdadeiro','Falso'],
        answer: 0,
        topic: "computer"
    },
    {
        q:'Para eu ser um profissional que saiba tanto consertar um controle remoto quanto ajudar na criação de um carro, qual curso de graduação posso fazer na UTFPR-CM?',
        options: ['Engenharia Civil','Engenharia Química','Engenharia Ambiental e Sanitária','Ciência da Computação','Engenharia Eletrônica'],
        answer: 4,
        topic: "computer"
    },
    {
        q:'Quero muito trabalhar com inteligência artificial e no desenvolvimento de aplicativos. O curso ideal pra mim na UTFPR-CM é Ciência da Computação?',
        options: ['Verdadeiro','Falso'],
        answer: 0,
        topic: "computer"
    },
    {
        q:'Qual curso na UTFPR-CM ensina a desenvolver sistemas computacionais e aplicativos?',
        options: ['Engenharia de Produção','Ciência da Computação','Engenharia Ambiental e Sanitária','Licenciatura em Química','Engenharia Eletrônica'],
        answer: 1,
        topic: "computer"
    },
    {
        q:'Em qual curso da UTFPR-CM você pode se formar para projetar sistemas elétricos?',
        options: ['Engenharia Civil','Engenharia Eletrônica','Tecnologia em Alimentos','Engenharia Mecânica','Agronomia'],
        answer: 1,
        topic: "computer"
    },
    {
        q:'A UTFPR-CM oferece o curso de Engenharia Ambiental e Sanitária?',
        options: ['Verdadeiro','Falso'],
        answer: 0,
        topic: "computer"
    },
    {
        q:'Em qual curso da UTFPR-CM você pode aprender sobre a produção e controle de qualidade de alimentos?',
        options: ['Tecnologia em Alimentos','Engenharia Mecânica','Engenharia Eletrônica','Engenharia Química','Licenciatura em Química'],
        answer: 0,
        topic: "computer"
    },
    {
        q:'Qual dos seguintes cursos na UTFPR-CM é mais focado em programação e desenvolvimento de software?',
        options: ['Engenharia de Produção','Engenharia Civil','Ciência da Computação','Tecnologia em Alimentos','Engenharia Mecânica'],
        answer: 2,
        topic: "computer"
    },
    {
        q:'Em qual curso da UTFPR-CM você aprenderá a lidar com o impacto ambiental de obras?',
        options: ['Engenharia Eletrônica','Engenharia Ambiental e Sanitária','Ciência da Computação','Engenharia Mecânica','Tecnologia em Alimentos'],
        answer: 1,
        topic: "computer"
    },
    {
        q:'O curso de Engenharia Eletrônica na UTFPR-CM é focado em:',
        options: ['Projetar e construir estruturas como pontes e edifícios','Desenvolver e testar circuitos eletrônicos','Gerenciar a produção em fábricas','Criar softwares e aplicativos','Analisar o impacto ambiental de obras'],
        answer: 1,
        topic: "computer"
    },
    {
        q:'Qual curso de graduação da UTFPR-CM prepara profissionais para trabalhar com a transformação e conservação de alimentos?',
        options: ['Engenharia Química','Tecnologia em Alimentos','Engenharia de Produção','Licenciatura em Química','Engenharia Ambiental e Sanitária'],
        answer: 1,
        topic: "computer"
    },
    {
        q:'O campus de Campo Mourão da UTFPR oferece cursos na área de Engenharia?',
        options: ['Verdadeiro','Falso'],
        answer: 0,
        topic: "computer"
    },
    {
        q:'Qual das atividades a seguir faz parte da formação em Licenciatura em Química na UTFPR-CM?',
        options: ['Planejar e ministrar aulas','Projetar circuitos eletrônicos','Desenvolver sistemas de abastecimento de água','Criar estruturas de concreto para pontes','Gestão de processos industriais'],
        answer: 0,
        topic: "computer"
    },
    {
        q:'Quais das seguintes atividades são típicas de um engenheiro civil?',
        options: ['Calcular a resistência de materiais para construção','Desenvolver processos industriais químicos','Programar sistemas de controle de tráfego','Criar material didático para ensino de Química','Projetar circuitos eletrônicos para dispositivos móveis'],
        answer: 0,
        topic: "computer"
    },
]