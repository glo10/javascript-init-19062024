import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      reporter: ['html'],
      reportsDirectory: './coverage'
    },
    environmentMatchGlobs: [
      ['**/tests/*/*.test.[c|m]js', 'jsdom']
    ],
    exclude: ['cypress', 'node_modules', 'demo', 'admin']
  }
})
