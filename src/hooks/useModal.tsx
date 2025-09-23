import React, { useState, type ReactNode, type ReactElement } from 'react';
import { Modal } from '../components/modal/modal';

interface UseModalResult {
  open: (title: string, children: ReactNode) => void;
  close: () => void;
  modal: ReactElement | null;
}

export function useModal(): UseModalResult {
  const [isOpen, setOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);
  const [title, setTitle] = useState<string>('');

  const open = (newTitle: string, newContent: ReactNode) => {
    setTitle(newTitle);
    setContent(newContent);
    setOpen(true);
  };

  const close = () => setOpen(false);

  const modal = (
    <Modal isOpen={isOpen} onClose={close} title={title}>
      {content}
    </Modal>
  );

  return { open, close, modal };
}
