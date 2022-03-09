import { styled } from "@stitches/react";

export const Container = styled('div', {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: '1rem auto',
    padding: '2rem',
    minWidth: '70%',
    maxWidth: '70%',
    '@media (max-width: 768px)': {
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6rem',
        minWidth: '100%',
        padding: '1rem'
    },
    '@media (max-width: 425px)': {
        gap: '4rem',
        padding: '0.5rem'
    }
})

export const CharacterHeader = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    '.div-info' :{
        'h1':{
            fontSize: 'var(--font-size--default)',
            fontWeight: '500',
            marginRight: '0.5rem'
        },
        'span': {
            fontSize: 'var(--font-size--default)',
            color: 'rgba(255, 60, 20, 0.9)',
            fontWeight: '700',
        }
    },
    '.div-image':{
        width: '256px',
        height: '256px',
        borderRadius: '10%'
    },
    '@media (max-width: 768px)': {
        '.div-info' :{
            'h1':{
                fontSize: 'var(--font-size--small)',
                fontWeight: '500',
                marginRight: '0.5rem'
            },
            'span': {
                fontSize: 'var(--font-size--small)',
                color: 'rgba(255, 60, 20, 0.9)',
                fontWeight: '700',
            }
        },
        '.div-image':{
            width: '256px',
            height: '256px',
            borderRadius: '10%'
        },
    },
    '@media (max-width: 425px)': {
        '.div-info' :{
            'h1':{
                fontSize: 'var(--font-size--smallx)',
                fontWeight: '500',
                marginRight: '0.5rem'
            },
            'span': {
                fontSize: 'var(--font-size--smallx)',
                color: 'rgba(255, 60, 20, 0.9)',
                fontWeight: '700',
            }
        },
        '.div-image':{
            width: '192px',
            height: '192px',
            borderRadius: '10%'
        }
    }
})

export const CharacterContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 0 0 4rem',
    width: '50%',
    'span': {
        fontSize: 'var(--font-size--default)',
        lineHeight: '24px'
    },
    '> div': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2rem',
        'h1': {
            fontSize: 'var(--font-size--large)',
            fontWeight: '500',
            textAlign: 'center'
        }
    },
    '@media (max-width: 768px)': {
        width: '90%',
        'span': {
            fontSize: 'var(--font-size--small)',
            lineHeight: '24px'
        },
        '> div': {
            'h1': {
                fontSize: 'var(--font-size--medium)',
                fontWeight: '500',
                textAlign: 'center'
            }
        },
    },
    '@media (max-width: 425px)': {
        'span': {
            fontSize: 'var(--font-size--smallx)',
            lineHeight: '24px'
        },
        '> div': {
            'h1': {
                fontSize: 'var(--font-size--small)',
                fontWeight: '500',
                textAlign: 'center'
            }
        },
    }
})

export const ButtonGroup = styled('div', {
    position: 'absolute',
    right: '5%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    'button': {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '1rem',
        background: 'rgba(14, 62, 218, 0.6)',
        color: 'rgba(255, 255, 255, 0.95)',
        border: 'none',
        borderRadius: '10px',
        fontSize: 'var(--font-size--default)',
        cursor: 'pointer',
        transition: 'filter 0.2s',
        '&:hover': {
            filter: 'brightness(0.9)'
        }
    },
    '@media (max-width: 768px)': {
        'button': {
            fontSize: 'var(--font-size--small)',
        },
        'span': {
            display: 'none'
        }
    },
    '@media (max-width: 425px)': {
        'button': {
            fontSize: 'var(--font-size--smallx)',
        }
    }
})