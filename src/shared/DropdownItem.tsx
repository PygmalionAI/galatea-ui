import { Component, JSX } from "solid-js";

const DropdownItem: Component<{
    children: JSX.Element;
    reference?: any;
    onClick?: JSX.EventHandler<HTMLAnchorElement, MouseEvent>;
  }> = (props) => {
  return (
    <a class="px-5 py-3 hover:bg-stone-500" href={props.reference} onClick={props.onClick}>{props.children}</a>
  );
};

export default DropdownItem;
