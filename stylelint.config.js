module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recommended-vue',
  ],
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      extends: ['stylelint-config-recommended-scss']
    },
    {
      files: ['*.vue', '**/*.vue'],
      extends: ['stylelint-config-recommended-scss', 'stylelint-config-recommended-vue']
    }
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {},
};
