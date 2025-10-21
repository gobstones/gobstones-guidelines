// @ts-check

/* Add the current class to the navigation element that is currently active */
(function () {
    // Ideally this should be done statically in the template, but I'm done fighting with eleventy.
    for (const a of document.querySelectorAll('.navigation a')) {
        if (location.pathname === new URL(a.href).pathname) {
            a.classList.add('current');
        }
    }
})();

/* Get currently selected theme */
(function () {
    const theme = document.querySelector('#theme');
    if (!theme) return;

    theme.addEventListener('input', () => {
        localStorage.setItem('tsd-theme', theme.value);
        document.documentElement.dataset.theme = theme.value;
    });
})();

/* Add all elements to the toc, if any */
(function () {
    const tocContainer = document.querySelector('.toc-container');

    if (!tocContainer) return;

    const tocContainerStack = [];

    tocContainerStack.push(tocContainer.appendChild(document.createElement('ol')));

    const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

    headers.forEach(function (header) {
        // As per the configuration of markdown-it-anchor
        // at eleventy.config.js, anchors for headings
        // are placed right after the heading
        if (header.nextElementSibling && header.nextElementSibling.tagName === 'A') {
            // If found, then this heading is to be added in the TOC.

            const anchor = header.nextElementSibling;

            const level = parseInt(header.tagName.substring(1));

            // Put the elements up to the corresponding heading level
            while (level < tocContainerStack.length) {
                tocContainerStack.pop();
            }

            if (level > tocContainerStack.length) {
                const container = document.createElement('ol');
                const containerLi = tocContainerStack[tocContainerStack.length - 1].appendChild(
                    document.createElement('li')
                );
                containerLi.appendChild(container);
                tocContainerStack.push(container);
            }

            const element = document.createElement('li');
            const tocAnchor = element.appendChild(document.createElement('a'));
            tocAnchor.textContent = header.textContent.replace(/\([^)]*\)/, '');
            tocAnchor.href = anchor.href;
            tocContainerStack[tocContainerStack.length - 1].appendChild(element);
        }
    });
})();
