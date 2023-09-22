export interface Hello {
  greet(): { [key: string]: string };
}

export const types = {
  HelloService: Symbol("HELLO"),
};
