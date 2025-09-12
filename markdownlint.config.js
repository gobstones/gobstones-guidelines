// You can see the list of rules at: https://github.com/DavidAnson/markdownlint

module.exports = {
    default: true,
    'heading-increment': true,
    'heading-style': { style: 'atx' },
    'ul-style': { style: 'asterisk' },
    'list-indent': true,
    'ul-indent': { indent: 4, start_indented: false },
    'no-trailing-spaces': {
        br_spaces: 2,
        list_item_empty_lines: false,
        strict: false
    },
    'no-hard-tabs': {
        code_blocks: true,
        ignore_code_languages: [],
        spaces_per_tab: 4
    },
    'no-reversed-links': true,
    'no-multiple-blanks': {
        maximum: 1
    },
    'line-length': false,
    'commands-show-output': true,
    'no-missing-space-atx': true,
    'no-multiple-space-atx': true,
    'no-missing-space-closed-atx': true,
    'no-multiple-space-closed-atx': true,
    'blanks-around-headings': {
        lines_above: 1,
        lines_below: 1
    },
    'heading-start-left': true,
    'no-duplicate-heading': { siblings_only: true },
    'single-title': {
        level: 1,
        front_matter_title: ''
    },
    'no-trailing-punctuation': {
        punctuation: '.,;:!。，；：！'
    },
    'no-multiple-space-blockquote': true,
    'no-blanks-blockquote': true,
    'ol-prefix': { style: 'ordered' },
    'list-marker-space': {
        // Spaces for single-line unordered list items
        ul_single: 1,
        // Spaces for single-line ordered list items
        ol_single: 1,
        // Spaces for multi-line unordered list items
        ul_multi: 1,
        // Spaces for multi-line ordered list items
        ol_multi: 1
    },
    'blanks-around-fences': {
        // Include list items
        list_items: true
    },
    'blanks-around-lists': true,
    'no-inline-html': { allowed_elements: [] },
    'no-bare-urls': true,
    'hr-style': { style: '---------------------------------------------------------------------' },
    'no-emphasis-as-heading': { punctuation: '.,;:!?。，；：！' },
    'no-space-in-emphasis': true,
    'no-space-in-code': true,
    'no-space-in-links': true,
    'fenced-code-language': {
        allowed_languages: ['sh', 'ts', 'yaml', 'json', 'mermaid'],
        language_only: true
    },
    'first-line-heading': {
        level: 1,
        front_matter_title: ''
    },
    'no-empty-links': true,
    'required-headings': false,
    'proper-names': {
        code_blocks: false,
        html_elements: true,
        names: [
            'TypeScript',
            'JavaScript',
            'Gobstones',
            'GobstonesWeb',
            'React',
            'StoryBook',
            'Git'
        ]
    },
    'no-alt-text': true,
    'code-block-style': { style: 'fenced' },
    'single-trailing-newline': true,
    'code-fence-style': { style: 'backtick' },
    'emphasis-style': { style: 'underscore' },
    'strong-style': { style: 'asterisk' },
    'link-fragments': true,
    'reference-links-images': { shortcut_syntax: false },
    'link-image-reference-definitions': {
        ignored_definitions: []
    },
    'link-image-style': {
        autolink: false,
        inline: true,
        full: false,
        collapsed: false,
        shortcut: false,
        url_inline: true
    },
    'table-pipe-style': {
        style: 'leading_and_trailing'
    },
    'table-column-count': true
};
