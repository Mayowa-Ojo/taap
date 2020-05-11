declare type ToastProp = {
   isOpen: boolean,
   handleMenuOpen: () => void
}

declare type WrapperProp = {
   children: React.ReactNode
}

declare type CardProp = {
   task: Task
}

declare type FormProp = {
   toggleModal: () => void
}

declare type NavbarProp = {
   toggleModal: () => void
}