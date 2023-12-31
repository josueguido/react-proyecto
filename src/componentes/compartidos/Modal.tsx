import React from "react";

interface ModalProps {
    children: React.ReactNode;
}
function Modal({ children }: ModalProps) {
    return (
        <div className="flex items-center fixed inset-0 bg-gray-700 bg-opacity-75">
            <div className="nx-auto">{children}</div>
        </div>
    );
}

export default Modal;
