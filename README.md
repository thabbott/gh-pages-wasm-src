# gh-pages-wasm
Deploy WebAssembly on GitHub Pages. Adapted from https://github.com/sn99/wasm-template-rust.

Travis CI is no longer free, so this repository includes a deploy script that pushes public files to a submodule in `public`. The pages site will be deployed from the submodule, not from this repository.
