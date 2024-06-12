import Text from "sap/m/Text";
import XMLView from "sap/ui/core/mvc/XMLView";
import ComponentContainer from "sap/ui/core/ComponentContainer";

new Text({
  text: "setp2: helllo world",
}).placeAt("content");

XMLView.create({
  // chưa hiểu viewName lấy ở đâu
  viewName: "ui5.walkthrough.view.App",
}).then(function (view) {
  view.placeAt("content");
});

new ComponentContainer({
  name: "ui5.walkthrough",
  settings: {
    id: "walkthroughts",
  },
  async: true,
}).placeAt("content");
