import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";

import { ExampleColor } from "com/myorg/myui5lib/library";

/**
 * @namespace flexus.agvhub.frontend.controller
 */
export default class Main extends BaseController {
	public sayHello(): void {
		MessageBox.show("Hello World!");

		const color = ExampleColor.Highlight;
		console.log(color);
	}
}
