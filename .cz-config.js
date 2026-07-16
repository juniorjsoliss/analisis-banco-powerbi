module.exports = {
  types: [
    { value: 'feat',     name: '✨ feat:     A new feature (e.g., new table, view, or Power BI report)' },
    { value: 'fix',      name: '🐛 fix:      A bug fix (e.g., fixing SQL syntax or broken relations)' },
    { value: 'docs',     name: '📚 docs:     Documentation only changes (e.g., README or comments)' },
    { value: 'style',    name: '💄 style:    Code style changes (formatting, white-spaces, casing)' },
    { value: 'refactor', name: '🔨 refactor: A code change that neither fixes a bug nor adds a feature' },
    { value: 'perf',     name: '⚡ perf:     A code change that improves performance (e.g., index, fast JOIN)' },
    { value: 'test',     name: '✅ test:     Adding or correcting tests (e.g., testing data integrity)' },
    { value: 'build',    name: '📦 build:    Changes that affect build tools or external dependencies' },
    { value: 'ci',       name: '🤖 ci:       Changes to CI configuration files and scripts' },
    { value: 'chore',    name: '🔧 chore:    Other changes that don’t modify database or report files' },
    { value: 'revert',   name: '⏪ revert:   Reverts a previous commit' }
  ],

  // Scopes tailored for your Data Analysis & SQL Server project
  scopes: [
    { name: 'database' }, // For SQL scripts, tables, schemas, and views
    { name: 'powerbi' },  // For .pbix files, DAX measures, or visual layouts
    { name: 'git' },      // For .gitignore or repo structure updates
    { name: 'docs' }      // For documentation-only updates
  ],

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  footerPrefix: 'Closes:',

  // Custom interactive prompts in English
  messages: {
    type: "Select the type of change that you're committing:",
    scope: "\nDenote the SCOPE of this change (optional):",
    customScope: "Denote the custom scope:",
    subject: "Write a SHORT, imperative tense description of the change:\n",
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new lines:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this commit (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },

  // Skip tedious questions to keep your workflow fast and clean
  skipQuestions: ['body', 'footer'], 
  subjectLimit: 80,
};