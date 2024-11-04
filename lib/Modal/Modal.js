import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/primitive.scss';
import '../styles/semantic.scss';
import '../styles/component.scss';
import { SuperButton } from '../SuperButton/SuperButton';
export const Modal = ({ title, textcontent }) => {
    return (_jsxs("div", { className: "modal", children: [_jsxs("div", { className: "modal-title", children: [_jsx("h3", { children: title }), _jsx("p", { children: "x" })] }), _jsx("div", { className: "modal-content", children: textcontent ? _jsxs("div", { children: [" ", textcontent, " "] }) : null }), _jsxs("div", { className: "modal-buttons", children: [_jsx(SuperButton, { text: 'green', color: 'green' }), _jsx(SuperButton, { text: 'red', color: 'red' })] })] }));
};
