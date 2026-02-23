import { Bars3Icon } from "@heroicons/react/24/outline";

export default function MobileMenuComponent({ setMobileMenuOpen }: any) {
    return (
        <div className="lg:hidden flex flex-1 justify-end">
            <button onClick={() => setMobileMenuOpen(true)}>
                <Bars3Icon className="size-4" />
            </button>
        </div>
    )
}