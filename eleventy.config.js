const isCi = require('is-ci');

const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItReplaceLink = require('markdown-it-replace-link');

const EleventySassPlugin = require('eleventy-sass');
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const EleventySyntaxHighlightPlugin = require('@11ty/eleventy-plugin-syntaxhighlight');
const EleventyNavigationPlugin = require('@11ty/eleventy-navigation');

const pathPrefix = isCi ? '/gobstones-guidelines' : '';

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
    el.setLibrary('md',
        markdownIt({ html: true })
        .use(markdownItAnchor, {
            permalink: markdownItAnchor.permalink.linkAfterHeader({
                class: 'anchor',
                assistiveText: title => `Permalink to “${title}”`,
                visuallyHiddenClass: 'hidden'
            })
        })
        .use(markdownItReplaceLink, {
            /*
            replaceLink: function (link, env, token, htmlToken) {
                if (link.match(/^(?!www\.|(?:http|ftp|mailto)s?:\/\/|[A-Za-z]:\\|\/\/).* /)) {
                    if (env.permalink.startsWith('/governance')) {
                        console.log(env);
                        console.log(token);
                        console.log(htmlToken);
                    }
                    const updated = `${pathPrefix}${link.startsWith('/') ? '' : '/'}${link}`;
                    // console.log(`Updating link: ${link} -> ${updated}`);
                    return link;
                }
                return link;
            }
            */
        })
    );

    /*
     * Set global data that will be used by all pages, as to avoid
     * having to repeat it in every front matter
     */
    el.addGlobalData('layout', 'doc');
    el.addGlobalData('navOptions', {
        includeSelf: true, allowMissing: true
    });
    el.addGlobalData("permalink", () => {
        return (data) => `${data.page.filePathStem.replace('pages/', '')}.${data.page.outputFileExtension}`;
    });

    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: 'templates/includes',
            layouts: 'templates/layouts',
        },
		pathPrefix: pathPrefix,
    };
};
