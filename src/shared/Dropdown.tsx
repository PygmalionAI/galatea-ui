import { ChevronDown } from "lucide-solid";
import { Component, JSX, createSignal } from "solid-js";
import usePopper from "solid-popper";

import Button from "./Button";

const Dropdown: Component<{ children: JSX.Element; label: string }> = (
  props
) => {
  const [open, setOpen] = createSignal(false);
  const [dropdown, setDropdown] = createSignal();
  const [dropdownMenu, setDropdownMenu] = createSignal();

  usePopper(dropdown, dropdownMenu, {
    placement: "bottom-start",
  });

  window.onclick = function(e) {
    const dropdownButton = (dropdown() as unknown as HTMLElement).children[0];
    const dropdownButtonChevron = (dropdown() as unknown as HTMLElement).children[0].children[0];
    
    if(open() && e.target !== dropdownButton && e.target !== dropdownButtonChevron) {
      setOpen(!open())
    }
  }

  return (
    <>
      <div ref={setDropdown} class="lol">
        <Button
          onClick={() => {
            setOpen(!open());
          }}
        >
          {props.label}
          <ChevronDown />
        </Button>
      </div>

      <div
        ref={setDropdownMenu} id="dropdownMenu"
        class={`${
          open() ? "visible" : "invisible"
        } z-10 flex flex-col rounded-md bg-stone-600 drop-shadow-md`}
      >
        {props.children}
      </div>
    </>
  );
};

export default Dropdown;
