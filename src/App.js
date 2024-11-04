import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { SuperButton } from '../lib/SuperButton/SuperButton';
import { Modal } from '../lib/Modal/Modal';
function App() {
    return (_jsx(_Fragment, { children: _jsxs("div", { children: [_jsx(SuperButton, { text: "Hello", color: "red" }), _jsx(Modal, { title: "Adds", textcontent: "Body", button1color: "green", button1text: "Yes", button2color: "red", button2text: "No" })] }) }));
}
export default App;
