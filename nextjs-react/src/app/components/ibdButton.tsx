// /app/components/Button.tsx

"use client";

import React, { ReactNode } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface ButtonProps {
    color: string;
    hoverColor: string;
    size: 'small' | 'medium' | 'large';
    link: string;
    children: ReactNode; // Hinzufügen des children-Props
}

const sizes = {
    small: '8px 16px',
    medium: '12px 24px',
    large: '16px 32px',
};

interface StyledButtonProps {
    color: string;
    hoverColor: string;
    size: keyof typeof sizes;
}

const StyledButton = styled.a<StyledButtonProps>`
    display: inline-block;
    background-color: ${({ color }) => color};
    color: white;
    padding: ${({ size }) => sizes[size]};
    border: none;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    font-size: 16px;
    text-align: center;
    &:hover {
        background-color: ${({ hoverColor }) => hoverColor};
    }
`;

const Button: React.FC<ButtonProps> = ({ color, hoverColor, size, link, children }) => {
    return (
        <Link href={link} passHref>
            <StyledButton color={color} hoverColor={hoverColor} size={size}>
                {children}
            </StyledButton>
        </Link>
    );
};

export default Button;