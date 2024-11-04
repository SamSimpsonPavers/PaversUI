import { jsx as _jsx } from "react/jsx-runtime";
import '../styles/primitive.scss';
import '../styles/semantic.scss';
import '../styles/component.scss';
export const Button = ({ children }) => {
    return _jsx("button", { className: 'firstbutton', children: children });
};
