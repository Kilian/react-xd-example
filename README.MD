### Made by [@kilianvalkhof](https://twitter.com/kilianvalkhof)

#### Other projects:

- 💻 [Polypane](https://polypane.app) - Develop responsive websites and apps twice as fast on multiple screens at once
- 🖌️ [Superposition](https://superposition.design) - Kickstart your design system by extracting design tokens from your website
- 🗒️ [FromScratch](https://fromscratch.rocks) - A smart but simple autosaving scratchpad

---

# React-XD Example

**Work-In-Progress, not ready for production**

An example plugin for Adobe XD that uses a custom React reconciler so you can declaratively write out the elements to render to an artboard.

Nowhere near feature complete and `lib/react-xd.js` will move to it's own repository soon.

## What works
Right now you can style and place [GraphicNodes](https://adobexdplatform.com/plugin-docs/reference/scenegraph.html#GraphicNode) onto a selected artboard.

Shapes are written in lowercase per React convention (so `new Rectangle()` becomes `<rectangle />`). Positioning shapes with x/y is always relative to their parent.

I haven't tested nesting, groups or anything other than `GraphicNode`s

## Working with this example

First, install xdpm:
```
npm install -g @adobe/xdpm
```

Then clone the repository and install the dependencies with `npm install` or `yarn`.

In one terminal run `npm run watch`, and in another run `xdpm watch`. This will recompile your plugin every time you make a change in the `src` folder and sync it to the Adobe XD plugin folder.

Once in XD, reload your plugins and you can execute your plugin. Any errors will show up in the developer console of XD.
