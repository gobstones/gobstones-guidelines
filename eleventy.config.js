const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

const EleventySassPlugin = require('eleventy-sass');
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const EleventySyntaxHighlightPlugin = require('@11ty/eleventy-plugin-syntaxhighlight');
const EleventyNavigationPlugin = require('@11ty/eleventy-navigation');

module.exports = function (el) {
    /*
     * Copy your _assets elements directly to a subfolder or
     * file in the output. You may add more files if required.
     */
    el.addPassthroughCopy('src/css');
    el.addPassthroughCopy('src/js');
    el.addPassthroughCopy('src/img');
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
    el.setLibrary('md', markdownIt({ html: true }).use(markdownItAnchor, {
        permalink: markdownItAnchor.permalink.linkAfterHeader({
            class: 'anchor',
            assistiveText: title => `Permalink to “${title}”`,
            visuallyHiddenClass: 'hidden'
          })
    }));

    /*
     * Set global data that will be used by all pages, as to avoid
     * having to repeat it in every front matter
     */
    el.addGlobalData('layout', 'doc');
    el.addGlobalData('navOptions', {
        includeSelf: true, allowMissing: true
    });

    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: 'templates/includes',
            layouts: 'templates/layouts',
        },
		pathPrefix: "/gobstones-guidelines",
    };
};
