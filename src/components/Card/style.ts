import { styled } from "@stitches/react";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    cursor: 'pointer',
    transition: 'filter 0.2s',
    borderRadius: '5%',
    maxWidth: '160px',
    height: '160px',
    'h1': {
        fontSize: 'var(--font-size--medium)',
        fontWeight: 'normal',
        color: '#000',
        backgroundColor: 'rgba(255,255,255,0.85)',
        textAlign: 'center',
        opacity: '0',
        transition: 'font 0.2s, opacity 0.5s ease',
    },
    '&:hover': {
        filter: 'brightness(0.9)',
        'h1': {
            opacity: '1'
        }
    },
    '@media (max-width: 768px)': {
        maxWidth: '128px',
        height: '128px',
        'h1': {
            fontSize: 'var(--font-size--small)',
        }
      },
    '@media (max-width: 425px)': {
        maxWidth: '64px',
        height: '64px',
        'h1': {
            fontSize: 'var(--font-size--smallx)',
        }
    }
})