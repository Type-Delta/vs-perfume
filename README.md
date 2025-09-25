# Perfume

VS Code theme focused on frosted glassmorphism with vibrant colors.

A theme inspired by the beauty of luxury *"Perfumes"* (especially the ones from Montelli family) and their intricate designs.

![Preview](https://raw.githubusercontent.com/Type-Delta/vs-perfume/refs/heads/master/assets/dark-fractured_full_beta3.png)

> [!IMPORTANT]
> This theme is a work in progress and may not be as stable as it should be.

## 🌌 Concept
- Modern and minimalistic design with a focus on elegance and perceived simplicity.
- Glassmorphism effect with frosted glass elements and subtle gradients.
- Dark mode with vibrant colors.

## 🛠️ Installation

### Install from VS Code Marketplace (Recommended)

You can install the theme directly from the **VS Code Marketplace** [here](https://marketplace.visualstudio.com/items?itemName=type-delta.perfume).

### Install from source

1. Clone the repository

   ```bash
   git clone https://github.com/Type-Delta/vs-perfume.git
   cd vs-perfume
   ```

2. Build and Install the extension

   ```bash
   npm install
   ```

### Using CSS overrides (Optional)

CSS overrides are required to achieve the glassmorphism effect.

Please note that **every time VS Code updates, you need to re-enable the custom CSS and JS extension again.** As it modifies the core files of VS Code and would be reverted on update.

This step is recommended BUT ***OPTIONAL*** and the theme would look good without it.

1. Install the [Custom CSS and JS](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css) extension from the VS Code marketplace.
2. Open VS Code settings (Ctrl+,). And search for `vscode_custom_css.imports`.
3. Add a path to the `vs-overwrite.css` file in the repository. In your settings.json, it should look like this:

   ```json
   "vscode_custom_css.imports": [
      "https://raw.githubusercontent.com/Type-Delta/vs-perfume/refs/heads/master/src/vs-overwrite.css",
   ],
   ```
4. Open the command palette (`Ctrl+Shift+P` or `⌘+Shift+P`) and run **"Enable Custom CSS and JS"** command.