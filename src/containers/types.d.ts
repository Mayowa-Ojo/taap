declare type Action = (id: string, update?: string) => void
declare type DispatchToastAction = (action: string) => Action | [Action, string]
declare type ToggleModal = (string?, data?: Task) => void

declare type ToastProp = {
   isOpen: boolean
   handleMenuOpen: () => void
   dispatchToastAction: DispatchToastAction
   status: string
}

declare type WrapperProp = {
   children: React.ReactNode
   currentApp: string
   setCurrentApp: React.Dispatch<React.SetStateAction<string>>
}

declare type CardProp = {
   task: Task
   setReloading: React.Dispatch<React.SetStateAction<boolean>>
   toggleModal: ToggleModal
   status: string
}

declare type FormProp = {
   toggleModal: ToggleModal,
   data?: Task
}

declare type NavbarProp = {
   toggleModal: ToggleModal,
   currentApp: string
}

declare type ModalProp = {
   children: React.ReactNode
   toggleModal: ToggleModal
}

declare type ViewProp = {
   toggleModal: ToggleModal
   data: Task
}

declare type TaskProp = {
   toggleModal: ToggleModal
}

declare type SidebarProp = {
   currentApp: string
   setCurrentApp: React.Dispatch<React.SetStateAction<string>>
}