export const OPEN = 'OPEN';
export const CLOSE = 'CLOSE';

// {type: OPEN, payload: cName}

export function openDialog(isOpen) {
  return {
    type: OPEN, payload: isOpen
  };
}

export function closeDialog(isOpen) {
  return {
    type: CLOSE, payload: isOpen
  };
}
