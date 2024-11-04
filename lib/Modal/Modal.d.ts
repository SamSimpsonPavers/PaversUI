import type { ReactNode } from 'react';
import '../styles/primitive.scss';
import '../styles/semantic.scss';
import '../styles/component.scss';
interface ButtonProps {
    children?: ReactNode;
    title: string;
    textcontent: string;
}
export declare const Modal: ({ title, textcontent }: ButtonProps) => ReactNode;
export {};
