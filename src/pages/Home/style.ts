import { styled } from "@stitches/react";

export const Container = styled('div',{
    display: 'flex',
    flexDirection: 'column',    
    gap: '10rem',
    color: '#0b0b0b',
    padding: '2rem 0',
    '> input': {
        margin: '0 auto',
        width: '90%',
        padding: '1.5rem',
        fontSize: 'var(--font-size--default)'
    }
})

export const Content = styled('div', {
    margin: '0 4rem',
    display: 'grid',
    paddingBottom: '4rem',
    gridTemplateColumns: 'repeat(auto-fit, 160px)',
    justifyContent: 'center',
    gap: '1.5rem',
    '@media (max-width: 768px)': {
        gridTemplateColumns: 'repeat(auto-fit, 128px)',
        gap: '1.25rem'
    },
    '@media (max-width: 425px)': {
        gridTemplateColumns: 'repeat(auto-fit, 64px)',
        gap: '1rem'
    }
})