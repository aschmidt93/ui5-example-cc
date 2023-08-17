import MessageBox from "sap/m/MessageBox";

import axios from "axios";

import "../model/models";
import AppController from "./App.controller";
import BaseController from "./BaseController";

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
