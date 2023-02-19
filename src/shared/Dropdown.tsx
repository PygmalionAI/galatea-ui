import { ChevronDown } from "lucide-solid";
import { Component, JSX, createSignal } from "solid-js";
import usePopper from 'solid-popper';

import Button from "./Button";


const Dropdown: Component<{ children: JSX.Element; label: string }> = (
  props
) => {

  const [open, setOpen] = createSignal(false);
  const [dropdown, setDropdown] = createSignal();
  const [dropdownMenu, setDropdownMenu] = createSignal();

  usePopper(dropdown, dropdownMenu, {
    placement: 'bottom-start',
  });

  return (
    <>
        <div ref={setDropdown}>
          <Button
            onClick={() => {
              setOpen(!open());
            }}
            >
            {props.label}
            <ChevronDown/>
          </Button>
        </div>

      <div ref={setDropdownMenu} class={`${open() ? "visible" : "invisible"} z-10 flex flex-col rounded-md bg-stone-600 drop-shadow-md`} >{props.children}</div>
    </>
  );
};

export default Dropdown;
