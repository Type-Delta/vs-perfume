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

Please note that **every time VS Code updates, you would need to re-enable the custom CSS and JS extension again.** As it modifies the core files of VS Code and would be reverted on every update.

This step is recommended BUT ***OPTIONAL*** and the theme would look good without it.

1. Install the [Custom CSS and JS](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css) extension from the VS Code marketplace.
2. Open VS Code settings (Ctrl+,). And search for `vscode_custom_css.imports`.
3. Add a path to the `vs-overwrite.css` file in the repository. In your settings.json, it should look like this:

   ```json
   "vscode_custom_css.imports": [
      "https://raw.githubusercontent.com/Type-Delta/vs-perfume/refs/heads/master/dist/vs-overwrite.css",
   ],
   ```
4. Open the command palette (`Ctrl+Shift+P` or `⌘+Shift+P`) and run **"Enable Custom CSS and JS"** command.

## 🔗 Integration

### Catppuccin Icons

It's recommended to use the Catppuccin Icons with this theme for a more cohesive look, but hey, it's up to you!

If you want to use the Catppuccin icons with this theme, you can install the [Catppuccin Icons](https://marketplace.visualstudio.com/items?itemName=Catppuccin.catppuccin-vsc-icons) extension from the VS Code marketplace.
Then, add the following line to the `vscode_custom_css.imports` setting in your settings.json:

```jsonc
"vscode_custom_css.imports": [
   "https://raw.githubusercontent.com/Type-Delta/vs-perfume/refs/heads/master/dist/vs-overwrite.css",
   // 👇 add this line
   "https://raw.githubusercontent.com/Type-Delta/vs-perfume/refs/heads/master/dist/catppuccin-icon.adt.css"
],
```

What this does is tweak those icons to better match the overall aesthetic of the Perfume theme.

## 🎨 Gallery

> [!NOTE]
> All screenshots are taken with the CSS overrides enabled.

### Dark Themes

#### Dark (normal ver.)

![Dark (normal ver.)](https://raw.githubusercontent.com/Type-Delta/vs-perfume/refs/heads/master/assets/dark_full_beta3.png)

#### Dark Fractured (more colors)

![Dark Fractured (more colors)](https://raw.githubusercontent.com/Type-Delta/vs-perfume/refs/heads/master/assets/dark-fractured_full_beta3.png)
