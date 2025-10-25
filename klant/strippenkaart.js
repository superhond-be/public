document.addEventListener('DOMContentLoaded', () => {
  const gebruikt = 3;
  const totaal = 10;
  const strips = [
    { datum: '2025-09-01', status: 'aanwezig' },
    { datum: '2025-09-08', status: 'aanwezig' },
    { datum: '2025-09-15', status: 'afgemeld' }
  ];

  document.getElementById('gebruikt').textContent = gebruikt;
  document.getElementById('totaal').textContent = totaal;

  const lijst = document.getElementById('strip-lijst');
  strips.forEach(strip => {
    const li = document.createElement('li');
    li.textContent = `${strip.datum} – ${strip.status}`;
    lijst.appendChild(li);
  });
});
