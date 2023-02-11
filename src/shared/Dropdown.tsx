import { Component, JSX, Show, createSignal } from "solid-js";

import { ChevronDown } from "lucide-solid";
import Button from "./Button";


const Dropdown: Component<{ children: JSX.Element; label: string }> = (
  props
) => {
  const [open, setOpen] = createSignal(false);

  return (
    <div class="inline-block">
      <Button
        onClick={() => {
          setOpen(!open());
        }}
      >
        <ChevronDown />
        {props.label}
      </Button>
      <Show when={open()}><div class="flex flex-col rounded-md bg-stone-600 drop-shadow-md">{props.children}</div></Show>
    </div>
  );
};

export default Dropdown;
