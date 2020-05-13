declare type ToastProp = {
   isOpen: boolean
   handleMenuOpen: () => void
   dispatchToastAction: (action: string) => (id: string) => void
}

declare type WrapperProp = {
   children: React.ReactNode
}

declare type CardProp = {
   task: Task
   setReloading: React.Dispatch<React.SetStateAction<boolean>>
}

declare type FormProp = {
   toggleModal: () => void
}

declare type NavbarProp = {
   toggleModal: () => void
}