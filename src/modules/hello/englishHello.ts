import { injectable } from "inversify";
import { Hello } from "./hello";

@injectable()
export class EnglishHello implements Hello {
  greet() {
    return { hello: "world" };
  }
}
