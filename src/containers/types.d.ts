declare type ToastProp = {
   isOpen: boolean
   handleMenuOpen: () => void
   dispatchToastAction: (action: string) => (id: string) => void
   status: string
}

declare type WrapperProp = {
   children: React.ReactNode
}

declare type CardProp = {
   task: Task
   setReloading: React.Dispatch<React.SetStateAction<boolean>>
   toggleModal: (string?) => void
   status: string
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

declare type ViewProp = {
   toggleModal: (string?) => void
}

declare type TaskProp = {
   toggleModal: (string?) => void
}