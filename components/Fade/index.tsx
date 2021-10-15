import { useState, useEffect, AnimationEventHandler, ReactNode } from 'react';
import clsx from 'clsx';

type FadeProps = {
  in: boolean;
  timeout?: number;
  children: ReactNode;
  onAnimationEnd?: AnimationEventHandler;
};

export function Fade({
  in: show,
  timeout,
  onAnimationEnd,
  children,
}: FadeProps) {
  const [animate, setAnimate] = useState(false);
  const animation = show ? 'in' : 'out';

  const classes = clsx('fade', {
    [`fade--${animation}`]: animate,
  });

  useEffect(() => {
    if (show) {
      setAnimate(true);
    }
  }, [show, animate]);

  return (
    <>
      <div
        className={classes}
        onAnimationEnd={onAnimationEnd}
        style={{ animationDuration: `${timeout}ms` }}
      >
        {children}
      </div>

      <style jsx>{`
        .fade {
          visibility: hidden;

          &--in {
            animation: fadeIn forwards;
          }

          &--out {
            animation: fadeOut forwards;
          }
        }

        @keyframes fadeIn {
          from {
            visibility: visible;
            opacity: 0;
          }

          to {
            visibility: visible;
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            visibility: visible;
            opacity: 1;
          }

          to {
            visibility: hidden;
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}

Fade.defaultProps = {
  timeout: 250,
};
