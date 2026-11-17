
const toggle = document.querySelector('#toggle');
const pill = document.querySelector('#status-pill');
const copy = document.querySelector('#status-copy');

const STORAGE_KEY = 'anndi-block-enabled';

let protectionEnabled =
  localStorage.getItem(STORAGE_KEY) !== 'false';

function updatePanel() {
  toggle.setAttribute(
    'aria-pressed',
    String(protectionEnabled)
  );

  toggle.textContent = protectionEnabled
    ? 'Desativar proteção'
    : 'Ativar proteção';

  pill.textContent = protectionEnabled
    ? 'ATIVADA'
    : 'DESATIVADA';

  pill.classList.toggle('on', protectionEnabled);
  pill.classList.toggle('off', !protectionEnabled);

  copy.textContent = protectionEnabled
    ? 'Proteção visual ativada. O bloqueio real ainda não está implementado.'
    : 'Proteção desativada. O painel continua disponível.';
}

toggle.addEventListener('click', () => {
  protectionEnabled = !protectionEnabled;

  localStorage.setItem(
    STORAGE_KEY,
    String(protectionEnabled)
  );

  updatePanel();
});

updatePanel();
