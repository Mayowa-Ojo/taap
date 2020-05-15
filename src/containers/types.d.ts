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
   toggleModal: (string?) => void
}

declare type NavbarProp = {
   toggleModal: (string?) => void
}

declare type ModalProp = {
   children: React.ReactNode
   toggleModal: (string?) => void
}