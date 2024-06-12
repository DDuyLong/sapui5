// import Controller from "sap/ui/core/mvc/Controller";
//step5
// export default class AppController extends Controller {
//     onShowHello(): void {
//         alert('step5: hello world')
//     }
// }
import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";

//step6
// export default class AppController extends Controller {
//     onShowHello1(): void {
//     MessageToast.show("step6: hello word");
//   }
// }

// step7
// export default class AppController extends Controller {
//   // thiết lập trạng thái ban đầu, mô hình dữ liệu và các cấu hình cần thiết cho người
//   /**
//    * các bước của onInit:
//    * 1. tạo dữ liệu
//    * const data = {
//    recipient: {
//       name: "World"
//    }
//    * 2.tao mô hình Json
//    const dataModel = new JSONModel(data);
//   * 3.gán mô hình và chết độ xem
//    this.getView()?.setModel(dataModel)
// };
//    */
//   onInit(): void {
//     const data = {
//       recipient: {
//         name: "world",
//       },
//     };
//     const dataModel = new JSONModel(data);
//     this.getView()?.setModel(dataModel);
//   }
//   // hành động
//   onshowMessage(): void {
//     MessageToast.show("step7: hello Word");
//   }
// }

//step8
export default class AppController extends Controller {
  // onInit(): void  {
  //   const data = {
  //     recipient: {
  //       name: 'Hello'
  //     }
  //   }
  //   const dataModel = new JSONModel(data)
  //   this.getView()?.setModel(dataModel)
  //   const i18nModle = new ResourceModel({
  //     bundleName: 'ui5.walkthrough.i18n.i18n',
  //   })
  //   this.getView()?.setModel(i18nModle,'i18n')
  // }
  // onshowMessage() : void {
  //   //dich
  //   const recipient = (<JSONModel>this.getView()?.getModel())?.getProperty("/recipient/name")
  //   const resourceBundle = <ResourceBundle>(<ResourceModel>this.getView()?.getModel("i18n"))?.getResourceBundle()
  //   const mgs = resourceBundle?.getText("helloMgs",[recipient]) || "no text defined"
  //   MessageToast.show(mgs)
  // }
}
