import "reflect-metadata";
import container from "../../../modules/hello/diContainer";
import { Hello, types } from "../../../modules/hello/hello";
import { NextResponse } from "next/server";

export async function GET() {
  const greeter = container.get<Hello>(types.HelloService);

  return NextResponse.json(greeter.greet());
}
