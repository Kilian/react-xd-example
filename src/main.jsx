//  temporary stubs required for React. These will not be required as soon as
// the XD environment provides setTimeout/clearTimeout
const reactShim = require("./react-shim");
const React = require("react");
const ReactXD = require("../lib/react-xd");
const { Color } = require("scenegraph");

const RedRectangle = props => (
  <rectangle
    width={props.width}
    height={props.height}
    fill={new Color("red")}
    x={157}
    y={398}

  />
);

const BlueEllipse = props => (
  <ellipse
    radiusX={props.radiusX}
    radiusY={props.radiusY}
    fill={new Color("blue")}
  />
);

const Shapes = () => (
  <>
    <RedRectangle width={100} height={100} />
    <BlueEllipse radiusX={10} radiusY={100} />
    <text fontSize={40} x={100} y={600} fill={new Color("#000")}>
      This is some text content
    </text>
  </>
);

function createRectangle(selection) {
  ReactXD.render(<Shapes />, selection.insertionParent);
}

module.exports = {
  commands: {
    myPluginCommand: createRectangle
  }
};
