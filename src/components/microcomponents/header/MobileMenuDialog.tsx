import { Dialog, DialogPanel } from "@headlessui/react";

export default function MobileMenuDialog({open, onClose}: any){
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogPanel>
                <a href="">LINK</a>
                <a href="">LINK</a>
                <a href="">LINK</a>
                <a href="">LINK</a>
            </DialogPanel>
        </Dialog>
    )
}