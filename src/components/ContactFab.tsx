import { useEffect, useRef, useState } from 'react';
import { contact } from '../content/site';
import { whatsappUrl } from './primitives';

const message = 'Merhaba Berfin, web sitenden ulaşıyorum.';

/** Sayfayı takip eden iletişim ikonu: tıklayınca arama ve WhatsApp seçenekleri açılır. */
export function ContactFab() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        ref.current?.querySelector<HTMLButtonElement>('.fab__toggle')?.focus();
      }
    };
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onDown);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onDown);
    };
  }, [open]);

  return (
    <div className={`fab ${open ? 'is-open' : ''}`} ref={ref}>
      <ul className="fab__menu" id="fab-menu" hidden={!open}>
        <li>
          <a className="fab__item" href={`tel:${contact.phone}`} onClick={() => setOpen(false)}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
            </svg>
            <span>Ara</span>
          </a>
        </li>
        {contact.whatsapp && (
          <li>
            <a className="fab__item" href={whatsappUrl(contact.whatsapp, message)} target="_blank" rel="noopener" onClick={() => setOpen(false)}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.3z" />
              </svg>
              <span>WhatsApp’tan yaz</span>
            </a>
          </li>
        )}
      </ul>
      <button
        type="button"
        className="fab__toggle"
        aria-expanded={open}
        aria-controls="fab-menu"
        aria-label={open ? 'İletişim seçeneklerini kapat' : 'İletişim: ara ya da WhatsApp’tan yaz'}
        onClick={() => setOpen((o) => !o)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="fab__icon fab__icon--chat">
          <path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
        </svg>
        <svg viewBox="0 0 24 24" aria-hidden="true" className="fab__icon fab__icon--close">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>
  );
}
