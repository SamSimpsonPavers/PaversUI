import type { ReactNode } from 'react';
import '../styles/primitive.scss';
import '../styles/semantic.scss';
import '../styles/component.scss';
interface ButtonProps {
    children?: ReactNode;
    text: string;
    color: string;
}
export declare const SuperButton: ({ text, color }: ButtonProps) => ReactNode;
export {};
