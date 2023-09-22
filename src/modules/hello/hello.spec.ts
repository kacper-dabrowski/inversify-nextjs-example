import container from "./diContainer";
import { PolishHello } from "./polishHello";
import { Hello, types } from "./hello";

describe("hello world script", () => {
  let helloWorld: Hello;
  beforeEach(() => {
    helloWorld = container.get<Hello>(types.HelloService);
  });

  it("should greet with english", () => {
    expect(helloWorld.greet()).toEqual({ hello: "world" });
  });

  it("should greet with polish", () => {
    container.rebind(types.HelloService).to(PolishHello);

    helloWorld = container.get<Hello>(types.HelloService);

    expect(helloWorld.greet()).toEqual({ witaj: "świecie" });
  });
});
