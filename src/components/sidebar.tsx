import * as React from "react";

const Sidebar: React.FC<SidebarProp> = ({ currentApp, setCurrentApp }) => {
   const isActiveTab = (tab: string): boolean => {
      return tab == currentApp
   }

   return (
      <div className="flex flex-col items-center w-16 bg-white pt-4">
         <img className="w-8 mb-16" src="icon48.png" alt="brand-logo"/>
         <svg className="mb-8 fill-current text-gray-600 hover:text-indigo-600 cursor-pointer" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8678 11.4231V7.19231C12.8678 4.59462 11.5381 2.42 9.21933 1.84462V1.26923C9.21933 0.566923 8.66801 0 7.99507 0C7.32213 0 6.78702 0.566923 6.78702 1.26923V1.84462C4.46011 2.42 3.13855 4.58615 3.13855 7.19231V11.4231L2.08455 12.5146C1.57376 13.0477 1.9305 13.9615 2.65209 13.9615H13.3299C14.0515 13.9615 14.4164 13.0477 13.9056 12.5146L12.8678 11.4231ZM7.99507 16.5C8.88692 16.5 9.61661 15.7385 9.61661 14.8077H6.37353C6.37353 15.2565 6.54437 15.687 6.84847 16.0043C7.15256 16.3217 7.56501 16.5 7.99507 16.5ZM3.76284 1.88692C4.10337 1.56538 4.11148 1.01538 3.78717 0.676923C3.6381 0.522122 3.43723 0.433824 3.22696 0.430666C3.01669 0.427509 2.81347 0.509739 2.6602 0.66C1.24541 2.00646 0.310643 3.81438 0.00897599 5.78769C-0.0639934 6.30385 0.317069 6.76923 0.819747 6.76923C1.20892 6.76923 1.54944 6.47308 1.6143 6.06692C1.85323 4.45881 2.61125 2.98409 3.76284 1.88692ZM13.3543 0.66C13.03 0.346923 12.5273 0.355385 12.2192 0.676923C11.8949 1.01538 11.9111 1.55692 12.2435 1.87846C13.3624 2.95308 14.1488 4.41692 14.392 6.05846C14.4488 6.46462 14.7893 6.76077 15.1866 6.76077C15.6812 6.76077 16.0703 6.29538 15.9893 5.77923C15.6812 3.77385 14.7326 1.98846 13.3543 0.66Z" />
         </svg>
         <svg onClick={() => setCurrentApp("Task Manager")} className={isActiveTab("Task Manager") ? "mb-8 fill-current text-indigo-600 hover:text-indigo-600 cursor-pointer" : "mb-8 fill-current text-gray-600 hover:text-indigo-600 cursor-pointer"} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 10H15C15.2652 10 15.5196 10.1054 15.7071 10.2929C15.8946 10.4804 16 10.7348 16 11C16 11.2652 15.8946 11.5196 15.7071 11.7071C15.5196 11.8946 15.2652 12 15 12H5C4.73478 12 4.48043 11.8946 4.29289 11.7071C4.10536 11.5196 4 11.2652 4 11C4 10.7348 4.10536 10.4804 4.29289 10.2929C4.48043 10.1054 4.73478 10 5 10ZM5 14H15C15.2652 14 15.5196 14.1054 15.7071 14.2929C15.8946 14.4804 16 14.7348 16 15C16 15.2652 15.8946 15.5196 15.7071 15.7071C15.5196 15.8946 15.2652 16 15 16H5C4.73478 16 4.48043 15.8946 4.29289 15.7071C4.10536 15.5196 4 15.2652 4 15C4 14.7348 4.10536 14.4804 4.29289 14.2929C4.48043 14.1054 4.73478 14 5 14ZM11 6H15C15.2652 6 15.5196 6.10536 15.7071 6.29289C15.8946 6.48043 16 6.73478 16 7C16 7.26522 15.8946 7.51957 15.7071 7.70711C15.5196 7.89464 15.2652 8 15 8H11C10.7348 8 10.4804 7.89464 10.2929 7.70711C10.1054 7.51957 10 7.26522 10 7C10 6.73478 10.1054 6.48043 10.2929 6.29289C10.4804 6.10536 10.7348 6 11 6ZM3.743 7.914L0 4.172L1.414 2.757L3.743 5.086L8.828 0L10.243 1.414L3.743 7.914Z" />
         </svg>
         <svg onClick={() => setCurrentApp("Password Keeper")} className={isActiveTab("Password Keeper") ? "mb-8 fill-current text-indigo-600 hover:text-indigo-600 cursor-pointer" : "mb-8 fill-current text-gray-600 hover:text-indigo-600 cursor-pointer"} width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.00001 0C4.79441 0 3.00001 1.7944 3.00001 4V6.4H2.20001C1.77566 6.4 1.36869 6.56857 1.06864 6.86863C0.768577 7.16869 0.600006 7.57565 0.600006 8V14.4C0.600006 14.8243 0.768577 15.2313 1.06864 15.5314C1.36869 15.8314 1.77566 16 2.20001 16H11.8C12.2244 16 12.6313 15.8314 12.9314 15.5314C13.2314 15.2313 13.4 14.8243 13.4 14.4V8C13.4 7.57565 13.2314 7.16869 12.9314 6.86863C12.6313 6.56857 12.2244 6.4 11.8 6.4H11V4C11 1.7944 9.20561 0 7.00001 0ZM4.60001 4C4.60001 2.6768 5.67681 1.6 7.00001 1.6C8.32321 1.6 9.40001 2.6768 9.40001 4V6.4H4.60001V4ZM7.80001 12.5784V14.4H6.20001V12.5784C5.92031 12.4182 5.69573 12.1771 5.55587 11.8867C5.41601 11.5963 5.36743 11.2704 5.41655 10.9518C5.46567 10.6333 5.61018 10.3371 5.83102 10.1023C6.05186 9.86759 6.33866 9.70527 6.65361 9.6368C6.88754 9.58508 7.1301 9.58652 7.3634 9.64103C7.5967 9.69554 7.8148 9.80172 8.00159 9.95174C8.18839 10.1018 8.33913 10.2918 8.4427 10.5078C8.54627 10.7239 8.60003 10.9604 8.60001 11.2C8.59955 11.4798 8.52536 11.7545 8.38491 11.9965C8.24446 12.2385 8.04272 12.4392 7.80001 12.5784Z" />
         </svg>
         <svg onClick={() => setCurrentApp("Wishlist")} className={isActiveTab("Task Manager") ? "mb-8 fill-current text-indigo-600 hover:text-indigo-600 cursor-pointer" : "mb-8 fill-current text-gray-600 hover:text-indigo-600 cursor-pointer"} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4 3.15789H12.656C12.744 2.91316 12.8 2.64474 12.8 2.36842C12.8 1.05789 11.728 0 10.4 0C9.56 0 8.832 0.426316 8.4 1.06579L8 1.59474L7.6 1.05789C7.168 0.426316 6.44 0 5.6 0C4.272 0 3.2 1.05789 3.2 2.36842C3.2 2.64474 3.256 2.91316 3.344 3.15789H1.6C0.712 3.15789 0.00799999 3.86053 0.00799999 4.73684L0 13.4211C0 14.2974 0.712 15 1.6 15H14.4C15.288 15 16 14.2974 16 13.4211V4.73684C16 3.86053 15.288 3.15789 14.4 3.15789ZM10.4 1.57895C10.84 1.57895 11.2 1.93421 11.2 2.36842C11.2 2.80263 10.84 3.15789 10.4 3.15789C9.96 3.15789 9.6 2.80263 9.6 2.36842C9.6 1.93421 9.96 1.57895 10.4 1.57895ZM5.6 1.57895C6.04 1.57895 6.4 1.93421 6.4 2.36842C6.4 2.80263 6.04 3.15789 5.6 3.15789C5.16 3.15789 4.8 2.80263 4.8 2.36842C4.8 1.93421 5.16 1.57895 5.6 1.57895ZM14.4 13.4211H1.6V11.8421H14.4V13.4211ZM14.4 9.47368H1.6V4.73684H5.664L4 6.97105L5.296 7.89474L7.2 5.33684L8 4.26316L8.8 5.33684L10.704 7.89474L12 6.97105L10.336 4.73684H14.4V9.47368Z" />
         </svg>
         <svg onClick={() => setCurrentApp("Dictionary")} className={isActiveTab("Task Manager") ? "mb-8 fill-current text-indigo-600 hover:text-indigo-600 cursor-pointer" : "mb-8 fill-current text-gray-600 hover:text-indigo-600 cursor-pointer"} width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.8131 4.26328C13.9324 4.37712 14 4.5308 14 4.69208V16.3929C14 16.7287 13.7156 17 13.3636 17H0.636364C0.284375 17 0 16.7287 0 16.3929V0.607143C0 0.271317 0.284375 0 0.636364 0H9.0821C9.25114 0 9.4142 0.064509 9.53352 0.178348L13.8131 4.26328ZM12.5324 4.97098L8.78977 1.40022V4.97098H12.5324ZM7 9.52645L8.0502 13.2642C8.06378 13.3126 8.09376 13.3555 8.13547 13.386C8.17719 13.4165 8.2283 13.4331 8.28088 13.433H8.91267C8.9652 13.4331 9.01627 13.4166 9.05798 13.3861C9.09969 13.3557 9.1297 13.3129 9.14335 13.2646L10.6223 8.02795C10.6277 8.00863 10.6303 7.98873 10.6303 7.96875C10.6303 7.90837 10.6051 7.85045 10.5604 7.80776C10.5156 7.76506 10.4549 7.74107 10.3916 7.74107H9.68426C9.63025 7.74105 9.57783 7.75851 9.53557 7.79059C9.4933 7.82268 9.4637 7.86749 9.45159 7.91771L8.54119 11.6953L7.55165 7.91354C7.53874 7.86428 7.50895 7.82055 7.46701 7.78931C7.42507 7.75806 7.37338 7.74108 7.32017 7.74107H6.67983C6.62659 7.74109 6.57488 7.75809 6.53294 7.78938C6.49099 7.82067 6.46122 7.86444 6.44835 7.91373L5.4608 11.6877L4.54403 7.91752C4.53186 7.86744 4.50229 7.82276 4.46011 7.79075C4.41794 7.75875 4.36565 7.7413 4.31176 7.74126H3.60798C3.5871 7.74126 3.56631 7.74388 3.54614 7.74904C3.48505 7.76473 3.43298 7.80292 3.4014 7.85522C3.36981 7.90753 3.36129 7.96965 3.3777 8.02795L4.85267 13.2646C4.86631 13.3129 4.89626 13.3556 4.93789 13.386C4.97951 13.4165 5.0305 13.433 5.08295 13.433H5.71912C5.77166 13.433 5.82273 13.4165 5.86441 13.3859C5.90608 13.3554 5.93603 13.3126 5.9496 13.2642L6.9998 9.52645H7Z" />
         </svg>
      </div>
   )
}

export default Sidebar;
