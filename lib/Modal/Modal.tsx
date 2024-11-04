import type { ReactNode } from 'react';
import '../styles/primitive.scss';
import '../styles/semantic.scss';
import '../styles/component.scss';


import { SuperButton } from '../SuperButton/SuperButton';

interface ButtonProps {
    children?: ReactNode;
    title: string;
    textcontent: string;
    button1color: string;
    button1text: string;
    button2color: string;
    button2text: string;
}

export const Modal = ({ title, textcontent, button1color, button1text, button2color, button2text }: ButtonProps): ReactNode => {
    return (
        <div className="modal">
            <div className="modal-title">
                <h3>{title}</h3>
                <p>x</p>
            </div>
            <div className="modal-content">
                {textcontent ? <div> {textcontent} </div> : null}
                {/* {richcontent ? {richcontent} : null} */}
            </div>
            <div className="modal-buttons">
                {button1color ? <SuperButton text={button1text} color={button1color}/> : null}
                {button2color ? <SuperButton text={button2text} color={button2color}/> : null}
            </div>
        </div>
      );
}