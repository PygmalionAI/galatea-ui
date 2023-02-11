import { Component, JSX, Show, createSignal } from "solid-js";

import Button from "./Button";

import { ChevronDown } from "lucide-solid";

const Dropdown: Component<{ children: JSX.Element, label: string }> = (props) => {
  const [open, setOpen] = createSignal(false);

  return(
    <div class="inline-block">
      <Button onClick={() => {setOpen(!open())}}>
        <ChevronDown />
        {props.label}
      </Button>
      <Show when={open()}>{props.children}</Show>
    </div>
  );
};

export default Dropdown;
