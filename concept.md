
## Theme
- Modern and minimalistic design with a focus on elegance and perceived simplicity.
- Glassmorphism effect with frosted glass elements and subtle gradients.
- Dark mode with vibrant colors.


## Colors
Core Palette
- Primary / Accent: #df1b6c
- Accent Alt (Cool / Decoration / Gradients): #2bb4af
- Foreground (Base Text): #f3eced
- Background (Workbench Base): #1f1e26
- Background (Legacy / Elevated Sections): #23212d

Surfaces & Structure
- Background Elevated Panel: #2a2834
- Background Overlay / Active Tab: #2f2d3a
- Line Highlight: #2f2c39
- Gutter Background: #1f1e26
- Border Subtle: #3a3744
- Border Strong: #4a4755
- Shadow (Generic): #00000080

Selections & States
- Selection Active: #df1b6c55
- Selection Inactive: #df1b6c22
- Selection Emphasis (Find Match): #25e0da96
- Word Highlight: #2dc3be42
- Suggest / Focus Blend: #2cada981

Syntax Tokens (Final Canonical Mapping)
- Comment (italic): #6c5f6f
- Keyword (non control-flow, bold): #6176d1be
- Keyword (control-flow, bold italic): #ecd926d7
- Operator (logical / comparison / arithmetic / bitwise): #79b7b5
- Operator (assignment, bold italic): #14c759c7
- String: #84cd4c
- Number: #b82696
- Boolean / Null-like: #f06ba2
- Function / Method: #f2b07b
- Variable (generic): #9ad1ff
- Property: #58d0c4
- Class (bold): #e0a7ff
- Interface / Type / Enum (italic): #cc67e3
- Module / Namespace (underline): #ffcf6b
- Annotation / Decorator: #313553
- RegExp / Escape: #b884e7
- Macro / Enum Member: #ffcf6b

Ancillary / UI Accents
- Success Added Gutter: #14c759
- Modified Gutter / Enum Member: #ffcf6b
- Deleted Gutter: #e82c55
- Error / Accent Variant: #ff4d96
- Warning: #ecd926d7
- Info / Cool Accent Variant: #2bb4af
- Link / Interactive Accent: #df1b6c



## Technical Details
- Since this is a Color Theme, anything that can be done in color-theme.json should be done there and left the complex stuff for css overrides.
- This Color Theme is special as it can override VSCode's default styles. you can specify the overwrite in `vs-overwrite.css` file. (no not make additional files)
- Since the `vs-overwrite.css` would be placed before the default styles you must use `!important` to override the default styles.

## Requirements
- A clear and consistent naming convention for colors and styles.
- Separation of each TextMate Token color should be based on its role functionality in its respective Language. (e.g., keywords, strings, comments, etc.) (you can add more color for this as needed)
- TextMate Token color should be able to separate the following Tokens from each other: (use the same styling for the same bullets, styles in [] are required)
  - Keywords (non control-flow) [bold]
  - Keywords (control-flow) [bold, italic]
  - Assignment Operators [bold, italic]
  - Logical Operators
  - Comparison Operators, Arithmetic Operators, Bitwise Operators
  - Strings
  - Numbers
  - Comments
  - Annotations [italic]
  - Booleans, null-like values
  - Functions
  - Variables
  - Properties
  - Classes [bold]
  - Interfaces, Types, Enums [underlined]
  - Modules [underlined]