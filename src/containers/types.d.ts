declare type Action = (id: string, update?: string) => void
declare type DispatchToastAction = (action: string) => Action | [Action, string]

declare type ToastProp = {
   isOpen: boolean
   handleMenuOpen: () => void
   dispatchToastAction: DispatchToastAction
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