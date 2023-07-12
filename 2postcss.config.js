module.exports = {
    plugins: [
        require('@fullhuman/postcss-purgecss')({
            // content: ['./templates/**/*.twig'],
            // safelist: ["is-active", "is-open", "is-close", "lazy", "is-show", "is-half-opacity", "is-overflow-hidden", "d-none", "d-flex", "nice-select", "list", "selected", "option", "is-disabled", "is-error", "is-success", "is-hidden", "valid", "invalid" ]
        }),
    ],
};