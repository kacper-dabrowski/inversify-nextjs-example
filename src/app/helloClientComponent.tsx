"use client";
import { useInjection } from "inversify-react";
import container from "../modules/hello/diContainer";
import { Hello, types } from "../modules/hello/hello";
import { withProvider } from "../shared/withProvider";

const HelloComponent = () => {
  const hello = useInjection<Hello>(types.HelloService);

  return (
    <>
      {Object.entries(hello.greet()).map(([key, value]) => `${key} ${value}`)}
    </>
  );
};

export const HelloClientComponent = withProvider(container, HelloComponent);
