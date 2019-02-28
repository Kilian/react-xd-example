const ReactReconciler = require("react-reconciler");
const upperFirst = require("lodash.upperfirst");
const SceneGraph = require("scenegraph");

const rootHostContext = {};
const childHostContext = {};

const hostConfig = {
  now: Date.now,
  getRootHostContext: () => {
    return rootHostContext;
  },
  prepareForCommit: () => {},
  resetAfterCommit: () => {},
  getChildHostContext: () => {
    return childHostContext;
  },
  shouldSetTextContent: (type, props) => {
    return (
      typeof props.children === "string" || typeof props.children === "number"
    );
  },
  createInstance: (
    type,
    newProps,
    rootContainerInstance,
    _currentHostContext,
    workInProgress
  ) => {
    const position = {
      x: 0,
      y: 0
    };
    const shape = new SceneGraph[(upperFirst(type))]();

    Object.keys(newProps).forEach(propName => {
      if (type === "text" && propName == "children") {
        shape.text = newProps[propName];
      } else if (propName === "x" || propName === "y") {
        position[propName] = newProps[propName];
      } else {
        shape[propName] = newProps[propName];
      }
    });

    return {
      shape,
      position
    };
  },
  createTextInstance: text => {
    return text;
  },
  appendInitialChild: (parent, child) => {
    parent.addChild(child.shape);
    child.shape.placeInParentCoordinates(
      { x: 0, y: 0 },
      { x: child.position.x, y: child.position.x }
    );
  },
  appendChild(parent, child) {
    parent.addChild(child.shape);
    child.shape.placeInParentCoordinates(
      { x: 0, y: 0 },
      { x: child.position.x, y: child.position.x }
    );
  },
  finalizeInitialChildren: (domElement, type, props) => {},
  supportsMutation: true,
  appendChildToContainer: (parent, child) => {
    parent.addChild(child.shape);
    child.shape.placeInParentCoordinates(
      { x: 0, y: 0 },
      { x: child.position.x, y: child.position.x }
    );
  },
  prepareUpdate(domElement, oldProps, newProps) {
    return true;
  },
  commitUpdate(domElement, updatePayload, type, oldProps, newProps) {
    Object.keys(newProps).forEach(propName => {
      shape[propName] = newProps[propName];
    });
  },
  commitTextUpdate(textInstance, oldText, newText) {
    textInstance.text = newText;
  },
  removeChild(parentInstance, child) {
    parentInstance.removeChild(child);
  }
};

const ReactReconcilerInst = ReactReconciler(hostConfig);

let SceneGraphInstance;
module.exports = {
  render: (reactElement, scenegraph, callback) => {
    if (!SceneGraphInstance) {
      SceneGraphInstance = ReactReconcilerInst.createContainer(
        scenegraph,
        false
      );
    }

    // update the root Container
    return ReactReconcilerInst.updateContainer(
      reactElement,
      SceneGraphInstance,
      null,
      callback
    );
  }
};
