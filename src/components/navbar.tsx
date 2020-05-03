import * as React from "react";

import "./navbar.scss";


export default function Navbar() {
   return (
      <nav className="navbar pr-4 flex w-full items-center h-10 border-b border-solid border-gray-300 justify-between">
         <div></div>
         <div className="flex">
            <span className="inline-block w-20 border-b border-opacity-25 mr-4 border-solid border-indigo-300 transform -translate-y-3"></span>
            <h2 className="text-indigo-700 text-lg">Task Manager</h2>
            <span className="inline-block w-20 border-b border-opacity-25 ml-4 border-solid border-indigo-300 transform -translate-y-3"></span>
         </div>
         <ul className="flex">
            <li className="m-3">
               <svg className="fill-current text-gray-600 hover:text-indigo-600 cursor-pointer" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0C4.48606 0 0 4.48606 0 10C0 15.5139 4.48606 20 10 20C15.5139 20 20 15.5139 20 10C20 4.48606 15.5139 0 10 0ZM10 16.1538C8.99519 16.1538 8.19615 15.7279 8.08894 14.8279C8.0861 14.801 8.08897 14.7738 8.09735 14.7481C8.10574 14.7224 8.11945 14.6987 8.1376 14.6787C8.15575 14.6586 8.17792 14.6426 8.20268 14.6317C8.22743 14.6208 8.2542 14.6152 8.28125 14.6154H11.7163C11.7437 14.6152 11.7707 14.6208 11.7957 14.6319C11.8207 14.643 11.843 14.6592 11.8612 14.6796C11.8794 14.7 11.893 14.724 11.9012 14.7501C11.9094 14.7761 11.9119 14.8036 11.9087 14.8308C11.7861 15.7139 10.9942 16.1538 10 16.1538ZM14.7115 13.8462H5.28846C4.71923 13.8462 4.42308 13.125 4.75048 12.7404C5.53558 11.8106 6.09038 11.4197 6.09038 8.85577C6.09038 6.50625 7.32788 5.6726 8.35 5.26587C8.42034 5.23655 8.48376 5.19283 8.53617 5.13752C8.58859 5.0822 8.62884 5.01653 8.65433 4.94471C8.83173 4.35577 9.33365 3.84615 10 3.84615C10.6663 3.84615 11.1673 4.35577 11.3462 4.94519C11.3718 5.01699 11.4122 5.08265 11.4647 5.13795C11.5171 5.19325 11.5806 5.23698 11.651 5.26635C12.6707 5.67212 13.9106 6.50721 13.9106 8.85625C13.9106 11.4202 14.4649 11.8111 15.25 12.7409C15.574 13.125 15.2774 13.8462 14.7115 13.8462Z" />
               </svg>
            </li>
            <li className="m-3">
               <svg className="fill-current text-gray-600 hover:text-indigo-600 cursor-pointer" width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 11V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H7V2H2V16H16V11H18Z" />
                  <path d="M18 4H14V0H12V4H8V6H12V10H14V6H18" />
               </svg>
            </li>
            <li className="m-3">
               <svg className="fill-current text-gray-600 hover:text-indigo-600 cursor-pointer" width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.2938 14.6894C16.8423 13.679 16.1871 12.7612 15.3646 11.9872C14.5446 11.2109 13.5733 10.592 12.5042 10.1646C12.4947 10.1601 12.4851 10.1578 12.4755 10.1533C13.9667 9.13568 14.9361 7.47814 14.9361 5.60804C14.9361 2.51005 12.2792 0 9 0C5.72077 0 3.06387 2.51005 3.06387 5.60804C3.06387 7.47814 4.03328 9.13568 5.52449 10.1555C5.51492 10.16 5.50534 10.1623 5.49577 10.1668C4.42343 10.5942 3.46121 11.207 2.63541 11.9894C1.81371 12.7641 1.15857 13.6817 0.706172 14.6917C0.261734 15.6805 0.0220377 16.7406 5.98544e-05 17.8146C-0.00057901 17.8387 0.00390188 17.8627 0.0132386 17.8852C0.0225753 17.9077 0.036579 17.9281 0.0544243 17.9454C0.0722696 17.9627 0.0935956 17.9764 0.117146 17.9858C0.140696 17.9952 0.165993 18 0.191548 18H1.62771C1.73303 18 1.8168 17.9209 1.8192 17.8236C1.86707 16.0779 2.60908 14.443 3.92078 13.2038C5.27795 11.9216 7.08033 11.2161 9 11.2161C10.9197 11.2161 12.722 11.9216 14.0792 13.2038C15.3909 14.443 16.1329 16.0779 16.1808 17.8236C16.1832 17.9231 16.267 18 16.3723 18H17.8085C17.834 18 17.8593 17.9952 17.8829 17.9858C17.9064 17.9764 17.9277 17.9627 17.9456 17.9454C17.9634 17.9281 17.9774 17.9077 17.9868 17.8852C17.9961 17.8627 18.0006 17.8387 17.9999 17.8146C17.976 16.7337 17.739 15.6822 17.2938 14.6894ZM9 9.49749C7.90134 9.49749 6.8673 9.09271 6.08938 8.35779C5.31146 7.62286 4.88301 6.64598 4.88301 5.60804C4.88301 4.5701 5.31146 3.59322 6.08938 2.85829C6.8673 2.12337 7.90134 1.71859 9 1.71859C10.0987 1.71859 11.1327 2.12337 11.9106 2.85829C12.6885 3.59322 13.117 4.5701 13.117 5.60804C13.117 6.64598 12.6885 7.62286 11.9106 8.35779C11.1327 9.09271 10.0987 9.49749 9 9.49749Z" />
               </svg>
            </li>
         </ul>
      </nav>
   )
}
