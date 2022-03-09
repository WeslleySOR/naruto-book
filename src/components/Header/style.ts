import { styled } from "@stitches/react";

export const Container =  styled('header', {
    maxHeight: '120px',
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #dbdbdb',
    width: '90%',
    paddingBlock: '1rem',
    'img': {
        width: '256px',
        cursor: 'pointer'
    }
})

export const Button = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    width: '100%',
    cursor: 'pointer',
    border: 'none',
    textDecoration: 'none',
    background: 'rgba(14, 62, 218, 0.6)',
    color: 'rgba(255, 255, 255, 0.95)',
    padding: '2rem 2rem',
    fontSize: '2rem',
    borderRadius: '20px',
    transition: 'filter 0.2s',
    '&:hover': {
        '&:not(:disabled)': {
            filter: 'brightness(0.8)'
        }
    },
    '&:disabled': {
        background: 'rgba(12, 12, 12, 0.1)',
        cursor: 'not-allowed'
    }
})