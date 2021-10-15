import { ReactNode, MouseEventHandler } from 'react';

type OverlayProps = {
  children?: ReactNode;
};

export function Overlay({ children }: OverlayProps) {
  return (
    <>
      <div className="overlay">{children}</div>

      <style jsx>{`
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.25);
          z-index: 1030;
        }
      `}</style>
    </>
  );
}
