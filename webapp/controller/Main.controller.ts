
import MessageBox from "sap/m/MessageBox";

import axios from "axios";

import BaseController from "./BaseController";
import AppController from "./App.controller";

/**
 * @namespace com.example.project.controller
 */
export default class Main extends BaseController {
  public sayHello(): void {
    MessageBox.show("Hello World!");

    // const color = ExampleColor.Highlight;
    // console.log("");
  }
}
