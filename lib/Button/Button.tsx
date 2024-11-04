import type { ReactNode } from 'react';
import '../styles/primitive.scss';
import '../styles/semantic.scss';
import '../styles/component.scss';

interface ButtonProps {
    children: ReactNode;
}

export const Button = ({ children }: ButtonProps): ReactNode => {
    return <button className='firstbutton'>{children}</button>;
}