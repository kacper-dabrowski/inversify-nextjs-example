import "reflect-metadata";
import { Container } from "inversify";
import { Hello, types } from "./hello";
import { EnglishHello } from "./englishHello";

var container = new Container();
container.bind<Hello>(types.HelloService).to(EnglishHello);

export default container;
