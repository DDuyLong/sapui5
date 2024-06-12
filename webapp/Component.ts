import Control from "sap/ui/core/Control";
import UIComponent from "sap/ui/core/UIComponent";
import XMLView from "sap/ui/core/mvc/XMLView";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
/**
 * @namespace ui5.walkthrough
 */
export default class Component extends UIComponent {
  public static metadata = {
    //không hiểu
    interfaces: ["sap.ui.core.IAsyncContentCreation"],
    "manifest":'json'
  };

  init(): void {
    // gọi hàm init ở cha
    super.init();

    // set data model?? không hiểu
    const data = {
      recipient: {
        name: "world",
      },
    };

    const dataModel = new JSONModel(data);
    this.setModel(dataModel);

    // create the views based on the url/hash
    this.getRouter().initialize();

    //set i18n model
//     const i18Model = new ResourceModel({
//       bundleName: "ui5.walkthrough.i18n.i18n",
//     });
//     this.setModel(i18Model, "i18n");
//   }

//   createContent(): Control | Promise<Control | null> | null {
//     return XMLView.create({
//       viewName: "ui5.walkthrough.view.App",
//       id: "app",
//     });
  }
}
