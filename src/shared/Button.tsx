import { Component, JSX } from "solid-js";

type ButtonSchema = "primary" | "secondary";

const schemaNameToClass: Record<ButtonSchema, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
};

const Button: Component<{ children: JSX.Element; schema?: ButtonSchema; class?:string }> = (
  props
) => (
  <button class={schemaNameToClass[props.schema || "primary"] + (props.class ? ` ${props.class}` : '')}>
    {props.children}
  </button>
);

export default Button;
