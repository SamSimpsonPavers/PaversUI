import type { ReactNode } from 'react';
import '../styles/primitive.scss';
import '../styles/semantic.scss';
import '../styles/component.scss';
interface ButtonProps {
    children?: ReactNode;
    title: string;
    textcontent: string;
    button1color: string;
    button1text: string;
    button2color: string;
    button2text: string;
}
export declare const Modal: ({ title, textcontent, button1color, button1text, button2color, button2text }: ButtonProps) => ReactNode;
export {};
