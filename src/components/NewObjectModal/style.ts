import { styled } from "@stitches/react";
import Modal from 'react-modal';

export const Container = styled(Modal, {
    
})

export const Content = styled('form', {
    'h2': {
        color: '#fff',
        fontSize: '2.4rem',
        marginBottom: '2rem'
      },
      'label': {
        color: '#fff',
        fontSize: 'var(--font-size--medium)',
        fontWeight: '300',
        marginTop: '1rem'
      },
      'input': {
        width: '100%',
        padding: '0 1.5rem',
        height: '4rem',
        borderRadius: '0.25rem',
    
        border: '1px solid #D7D7D7',
        background: '#E7E9EE',
    
        fontWeight: '400',
        fontSize: '1.6rem',
    
        '&::placeholder': {
          color: 'rgba(12,12,12,0.4)',
        },
    
        '& + input': {
          marginTop: '1rem',
        }
      },
      'select': {
        width: '100%',
        padding: '0 1.5rem',
        height: '4rem',
        borderRadius: '0.25rem',
        marginTop: '0.5rem',
        border: '1px solid #D7D7D7',
        background: '#E7E9EE',    
        fontWeight: '400',
        fontSize: '1.6rem',
        '&::placeholder': {
          color: '#121212',
        }
      },
      'button[type="submit"]': {
        width: '100%',
        padding: '0 1.5rem',
        height: '4rem',
        background: 'green',
        color: '#FFF',
        borderRadius: '0.25rem',
        border: '0',
        fontSize: '1.6rem',
        fontWeight: '600',
        marginTop: '1.25rem',
    
        transition: 'filter 0.2s',
    
        '&:hover': {
          'filter': 'brightness(0.9)',
        }
      }
})