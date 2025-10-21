import isCi from 'is-ci';

import markdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';

import EleventySassPlugin from 'eleventy-sass';
import { EleventyHtmlBasePlugin } from '@11ty/eleventy';
import EleventySyntaxHighlightPlugin from '@11ty/eleventy-plugin-syntaxhighlight';
import EleventyNavigationPlugin from '@11ty/eleventy-navigation';

const pathPrefix = isCi ? '/gobstones-guidelines' : '';

export default function (el) {
    /*
     * Copy your _assets elements directly to a subfolder or
     * file in the output. You may add more files if required.
     */
    el.addPassthroughCopy('src/assets/css');
    el.addPassthroughCopy('src/assets/js');
    el.addPassthroughCopy('src/assets/img');
    el.addPassthroughCopy('src/favicon.ico');

    /*
     * Add plugins.
     * Add yours at the bottom if needed.
     */
    el.addPlugin(EleventySassPlugin);
    el.addPlugin(EleventySyntaxHighlightPlugin);
    el.addPlugin(EleventyNavigationPlugin);
    el.addPlugin(EleventyHtmlBasePlugin);

    /*
     * Set the markdown library to use, use a custom instance to
     * allow the addition of markdown-it-anchor plugin
     */
    el.setLibrary(
        'md',
        markdownIt({ html: true }).use(markdownItAnchor, {
            permalink: markdownItAnchor.permalink.linkAfterHeader({
                class: 'anchor',
                assistiveText: (title) => `Permalink to “${title}”`,
                visuallyHiddenClass: 'hidden'
            })
        })
    );

    /*
     * Set global data that will be used by all pages, as to avoid
     * having to repeat it in every front matter
     */
    el.addGlobalData('layout', 'doc');
    el.addGlobalData('navOptions', {
        includeSelf: true,
        allowMissing: true
    });
    el.addGlobalData('permalink', () => {
        return (data) => `${data.page.filePathStem.replace('pages/', '')}.${data.page.outputFileExtension}`;
    });

    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: 'templates/includes',
            layouts: 'templates/layouts'
        },
        pathPrefix: pathPrefix
    };
}
