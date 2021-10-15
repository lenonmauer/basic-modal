import { useState, MouseEvent, useRef, useEffect } from 'react';

import { Overlay } from '@app/Overlay';
import { Fade } from '@app/Fade';

type ModalProps = {
  open: boolean;
  onClose(): void;
};

export function Modal({ open, onClose }: ModalProps) {
  const [mounted, setMounted] = useState(open);
  const dialogRef = useRef<HTMLDivElement>(null);

  function handleAnimationEnd() {
    if (!open) {
      setMounted(false);
    }
  }

  function handleClick(event: MouseEvent) {
    if (!dialogRef.current!.contains(event.target)) {
      onClose();
    }
  }

  useEffect(() => {
    if (open && !mounted) {
      setMounted(true);
    }
  }, [open, mounted]);

  return (
    <>
      <If condition={mounted || open}>
        <Fade in={open} onAnimationEnd={handleAnimationEnd}>
          <Overlay />

          <div
            className="modal"
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            onClick={handleClick}
          >
            <div className="modal__dialog" ref={dialogRef}>
              <div className="modal__header">
                <h1 className="modal__title">Modal title</h1>
                <button className="modal__close-button" onClick={onClose}>
                  X
                </button>
              </div>

              <div className="modal__body">
                Ex quis aute duis id cupidatat. Fugiat pariatur sit consequat et
                reprehenderit commodo. Sint consequat consequat ex non eiusmod
                cillum excepteur ullamco eu excepteur mollit.
              </div>
            </div>
          </div>
        </Fade>
      </If>

      <style jsx>{`
        .modal {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1031;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;

          &__dialog {
            display: flex;
            position: relative;
            flex-direction: column;
            max-width: 400px;
            height: auto;
            padding: 1rem;
            background-color: white;
          }

          &__header {
            display: flex;
            margin-bottom: 1rem;
          }

          &__title {
            font-size: 1.5rem;
          }

          &__close-button {
            position: absolute;
            right: 0.5rem;
            top: 0.5rem;
            border: none;
            background-color: transparent;
            padding: 0.5rem;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
}
