/**
 * @type { import('eslint').Linter.BaseConfig }
 */
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'airbnb-base',
        'airbnb-typescript/base'
    ],
    env: {
        "es6": true,
        "node": true
    },
    parserOptions: {
        "project": "./tsconfig.eslint.json",
        "sourceType": "module"
    },
    rules: {
        'prettier/prettier': 'off',

        'max-len': [
            'error',
            {
                code: 120,
                ignoreStrings: true,
                ignoreRegExpLiterals: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'linebreak-style': 'off',
        'no-param-reassign': [
            'error',
            {
                props: false,
            },
        ],
        radix: [
            'error',
            'as-needed',
        ],
        'newline-before-return': 'error',
        'no-multiple-empty-lines': 'error',
        'arrow-body-style': 'error',
        'object-curly-newline': 'error',

        // import/...
        'import/no-default-export': 'off',
        'import/prefer-default-export': 'off',
        'import/order': [
            'error',
            {
                groups: [
                    [
                        'builtin',
                        'external',
                    ],
                    'internal',
                    'parent',
                    'sibling',
                    'type',
                ],
                pathGroups: [
                    {
                        pattern: '*(@shared)/**',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: '*(context)/**',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: '*(views)/**',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: '*(components|hooks)/**',
                        group: 'internal',
                    },
                    {
                        pattern: '*(theme)/**',
                        group: 'internal',
                        position: 'after',
                    },
                    {
                        pattern: '*(utils)/**',
                        group: 'internal',
                        position: 'after',
                    },
                    {
                        pattern: '*(icons|assets)/**',
                        group: 'internal',
                        position: 'after',
                    },
                    {
                        pattern: '*(types)/**',
                        group: 'internal',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['builtin', 'type'],
                'newlines-between': 'always-and-inside-groups',
            },
        ],
        'import/no-extraneous-dependencies': 'error',

        // using @typescript-eslint/...
        'no-duplicate-imports': 'off',
        'no-unused-vars': 'off',
        indent: 'off',
        semi: 'off',
        'no-shadow': 'off',
        'no-undef': 'off',

        // extends the base eslint/...
        '@typescript-eslint/no-duplicate-imports': 'error',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                argsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/indent': [
            'error',
            4,
        ],
        '@typescript-eslint/semi': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/member-ordering': ['warn', {
            default: [
                'public-static-field',
                'protected-static-field',
                'private-static-field',

                'public-static-method',
                'protected-static-method',
                'private-static-method',

                'public-field',
                'protected-field',
                'private-field',

                'constructor',

                'public-abstract-field',
                'protected-abstract-field',
                'private-abstract-field',

                'public-abstract-method',
                'protected-abstract-method',
                'private-abstract-method',

                'public-method',
                'protected-method',
                'private-method',
            ],
        }],
        '@typescript-eslint/comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'only-multiline',
                enums: 'always-multiline',
                generics: 'never',
                tuples: 'always-multiline',
            },
        ],
    },
};
