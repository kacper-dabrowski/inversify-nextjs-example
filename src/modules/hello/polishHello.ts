import { injectable } from "inversify";
import { Hello } from "./hello";

@injectable()
export class PolishHello implements Hello {
  greet() {
    return { witaj: "świecie" };
  }
}
