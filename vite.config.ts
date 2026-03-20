import { defineConfig, Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Plugin that resolves figma:asset/* imports to the actual files in src/assets
function figmaAssetPlaceholder(): Plugin {
  return {
    name: 'figma-asset-resolver',
    enforce: 'pre',
    resolveId(source) {
      if (source.startsWith('figma:asset/')) {
        // Extract filename (e.g. "hash.png") from "figma:asset/hash.png"
        const filename = source.replace('figma:asset/', '');
        // Resolve to the actual file in src/assets
        return path.resolve(__dirname, 'src', 'assets', filename);
      }
      return null;
    },
  };
}

export default defineConfig({
  plugins: [
    figmaAssetPlaceholder(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
