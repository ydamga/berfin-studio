import { useEffect, useRef, type ReactNode } from 'react';

export const asset = (path: string) => (/^(https?:|data:|blob:)/.test(path) ? path : import.meta.env.BASE_URL + path.replace(/^\//, ''));

/** <dialog> tabanlı modal: odak içeride kalır, Esc kapatır, odak açan öğeye döner. */
export function Dialog({
  open,
  onClose,
  label,
  children,
}: {
  open: boolean;
  onClose: () => void;
  label: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) {
      d.showModal();
      document.documentElement.classList.add('is-locked');
    }
    if (!open && d.open) d.close();
    return () => document.documentElement.classList.remove('is-locked');
  }, [open]);
  return (
    <dialog
      ref={ref}
      className="dialog"
      aria-label={label}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      {open && (
        <>
          <button type="button" className="dialog__close" onClick={onClose}>
            Kapat
          </button>
          {children}
        </>
      )}
    </dialog>
  );
}

const tl = new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 0 });
/** 9900 → "9.900 TL" */
export const formatTL = (n: number) => `${tl.format(n)} TL`;

export const whatsappUrl = (phone: string, text: string) => `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
