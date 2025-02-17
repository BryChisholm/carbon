/**
 * Copyright IBM Corp. 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { test } = require('@playwright/test');
const { themes } = require('../../test-utils/env');
const { snapshotStory } = require('../../test-utils/storybook');

test.describe('FluidDatePicker', () => {
  themes.forEach((theme) => {
    test.describe(theme, () => {
      test('fluid date picker (range) @vrt', async ({ page }) => {
        await snapshotStory(page, {
          component: 'FluidDatePicker',
          id: 'experimental-unstable-fluiddatepicker--range-with-calendar',
          theme,
        });
      });

      test('fluid date picker (single) @vrt', async ({ page }) => {
        await snapshotStory(page, {
          component: 'FluidDatePicker',
          id: 'experimental-unstable-fluiddatepicker--single',
          theme,
        });
      });

      test('fluid date picker (simple) @vrt', async ({ page }) => {
        await snapshotStory(page, {
          component: 'FluidDatePicker',
          id: 'experimental-unstable-fluiddatepicker--simple',
          theme,
        });
      });
    });
  });
});
