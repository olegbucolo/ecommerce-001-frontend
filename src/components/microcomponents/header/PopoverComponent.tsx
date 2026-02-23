import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/react";

export default function PopoverComponent({headerProducts}:any){
    return (
        <PopoverGroup className="hidden lg:flex mx-4">
            <Popover className="relative">
                <PopoverButton>
                    Products
                </PopoverButton>
                <PopoverPanel className="absolute">
                    <a href="">1</a>
                    <a href="">2</a>
                    <a href="">3</a>
                    <a href="">4</a>
                </PopoverPanel>
            </Popover>
            <a className="mx-4" href="">Link 1</a>
            <a className="mx-4" href="">Link 2</a>
            <a className="mx-4" href="">Link 3</a>
            <a className="mx-4" href="">Link 4</a>
        </PopoverGroup>
    )
}