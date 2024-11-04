import { jsx as _jsx } from "react/jsx-runtime";
import '../styles/primitive.scss';
import '../styles/semantic.scss';
import '../styles/component.scss';
export const SuperButton = ({ text, color }) => {
    return _jsx("button", { className: `superbutton superbutton-${color}`, children: text });
};
