const fs = require('fs');
const html = fs.readFileSync('portal.html', 'utf8');

function check(condition, message) {
  if (!condition) throw new Error(message);
  console.log(`✓ ${message}`);
}

const section = html.match(/id="page-pesquisa"[\s\S]*?<!-- ===== PROTOCOLO =====/);
check(section, 'etapa de pesquisas encontrada');
check(/id="surveyCardsGrid"/.test(section[0]), 'seleção usa grade de cards');
check(/<h2>Selecione a empresa<\/h2>/.test(section[0]), 'título segue o layout aprovado');
check(/survey-card-logo/.test(html), 'cards possuem logotipo da empresa');
check(/survey-card-content/.test(html) && /survey-card-facts/.test(html), 'cards possuem apresentação institucional completa');
check(/Começar a pesquisa/.test(html), 'cards usam a ação aprovada de início');
check(/apiJson\('\/api\/public\/pesquisas'\)/.test(html), 'pesquisas continuam vindo do backend');
check(/loadPublishedSurvey\(form\.id\)/.test(html), 'card e botão usam o identificador real');
check(/Não há pesquisas disponíveis no momento/.test(html), 'estado vazio é tratado');
check(/grid-template-columns:1fr 1fr/.test(html) && /grid-template-columns:1fr\}/.test(html), 'grade é responsiva');
console.log('PORTAL PESQUISAS: 10 verificações aprovadas');
