/*
 * @Copyright © 2016-2020 Onny LLC - All Rights Reserved
 *
 * This file is part of Onny and is the sole property of its owner.
 * Unauthorized use of this file, via any medium or form, whole or in part,
 * is strictly prohibited without the expressed written permission of Onny LLC and/or Isaac Marotte
 *
 * This file is proprietary and confidential
 *
 * Last Modified: 2020.12.21
 */

module.exports = function babelConfig(api) {
  const presets = [
    '@babel/preset-env',
    [
      'minify',
      {
        mangle: {
          exclude: [
            'srcState',
            'loc',
            'locArray',
            'value',
            'values',
            'func',
            'Mutations',
            'MutationInstance',
            'fn',
            'indices',
            'funcWithMutations',
            'mutationState'
          ]
        }
      }
    ]
  ];

  const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-export-default-from'
  ];
  // https://babeljs.io/docs/en/next/config-files#apicache
  api.cache.never();

  return {
    presets,
    plugins,
    comments: false
  };
};
