---
title: Home
permalink: index.html
---

# Home

<!-- markdownlint-disable-next-line -->
<script>
  const availableLangs = ['en'];
  const defaultLang = 'en';
  const lang = (navigator.language || navigator.userLanguage || defaultLang).toLowerCase();
  const chosen = availableLangs.includes(lang) ? lang : defaultLang;

  fetch(`/${chosen}/index.html`)
    .then(r => r.text())
    .then(html => {
      // Replace body content without changing the URL
      document.open();
      document.write(html);
      document.close();
    })
    .catch(err => {
      console.error('Error loading localized content:', err);
      // <!-- markdownlint-disable-next-line -->
      document.body.innerHTML = '<p>Error loading page.</p>';
    });
</script>

<!-- markdownlint-disable-next-line -->
<noscript>
    <!-- markdownlint-disable-next-line -->
    <p>Enable JavaScript to view this site.</p>
</noscript>
