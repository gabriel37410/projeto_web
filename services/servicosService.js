var getServicos = function() {
    var servicos = [
        {
            id: 1,
            nome: 'Viagens Guiadas',
            imagem: 'guiadas.png',
            breveDescricao: 'Viagens com os melhores guias.',
            detalhadaDescricao: 'Venha fazer uma viagem com os melhores guias da America Latina.'
        },
        {
            id: 2,
            nome: 'Paraquedismo',
            imagem: 'paraquedismo.png',
            breveDescricao: 'Saltos de para-quedas',
            detalhadaDescricao: 'Nesse pacote você e levado para o salto dos 5 picos mais belos da America Latina'
        },
        {
            id: 3,
            nome: '7 Picos',
            imagem: '7picos.png',
            breveDescricao: 'Escalada ao cume',
            detalhadaDescricao: 'Aqui você recebe um pacote para excursões a escaladas aos 7 picos mais altas de cada continente.'
        },
        {
            id: 4,
            nome: 'Voluntariado',
            imagem: 'voluntariado.png',
            breveDescricao: 'Voluntáriado nas partes mais remotas do mundo.',
            detalhadaDescricao: 'Venha conosco para serviços voluntarios em todas as partes do mundo.'
        },
        {
            id: 5,
            nome: 'Volta ao mundo',
            imagem: 'volta_mundo.png',
            breveDescricao: 'Projeto de volta ao mundo',
            detalhadaDescricao: 'Vai encarar uma rotina? Ou prefere dar uma volta ao mundo em cima de duas rodas? Aqui você pode, esse é um projeto que acontece apenas uma vez a cada 10 anos, e 2020 será a proxima partida, encare essa conosco.'
        }
    ];

    return servicos;
}

module.exports = {
    getServicos: getServicos
}