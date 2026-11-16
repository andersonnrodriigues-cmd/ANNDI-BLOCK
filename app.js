const toggle = document.querySelector('#toggle');
const pill = document.querySelector('#status-pill');
const copy = document.querySelector('#status-copy');
let demoEnabled = false;

toggle.addEventListener('click', () => {
  demoEnabled = !demoEnabled;
  toggle.setAttribute('aria-pressed', String(demoEnabled));
  toggle.textContent = demoEnabled ? 'Desativar demonstração' : 'Ativar demonstração';
  pill.textContent = demoEnabled ? 'DEMO ATIVA' : 'DESATIVADA';
  pill.classList.toggle('on', demoEnabled);
  pill.classList.toggle('off', !demoEnabled);
  copy.textContent = demoEnabled
    ? 'Demonstração ativada. Nenhum anúncio está sendo bloqueado nesta versão.'
    : 'Demonstração desativada. O painel continua disponível.';
});
