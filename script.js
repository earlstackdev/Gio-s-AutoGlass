const range = document.querySelector('.comparison-range input');
const before = document.querySelector('.comparison-before');
const handle = document.querySelector('.comparison-handle');
const comparison = document.querySelector('.comparison');
const beforeImage = document.querySelector('.comparison-before img');
const syncComparisonImage = () => { if (comparison && beforeImage) beforeImage.style.width = `${comparison.clientWidth}px`; };
if (range) range.addEventListener('input', (event) => { const value = `${event.target.value}%`; before.style.width = value; handle.style.left = value; });
syncComparisonImage();
window.addEventListener('resize', syncComparisonImage);
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
if (toggle) toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!open)); nav.classList.toggle('open', !open); });
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => { toggle?.setAttribute('aria-expanded', 'false'); nav?.classList.remove('open'); }));

// Keep the mobile presentation text-only by removing decorative arrow glyphs.
if (window.matchMedia('(max-width: 800px)').matches) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  let node;
  while ((node = walker.nextNode())) textNodes.push(node);
  textNodes.forEach(textNode => { textNode.nodeValue = textNode.nodeValue.replace(/[↗↔]/g, ''); });
}
