import { theme } from "../styles/theme";
import type { ConfirmModalState } from "../types";

type ConfirmModalProps = {
  confirmModal: ConfirmModalState | null;
  onClose: () => void;
};

export function ConfirmModal({ confirmModal, onClose }: ConfirmModalProps) {
  if (!confirmModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/70 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-neutral-300 bg-stone-50 p-6 shadow-[0_25px_80px_rgba(23,23,23,0.35)]">
        <p className={theme.eyebrow}>Confirm action</p>

        <h3 className={`${theme.sectionTitle} ${theme.brushUnderline} mt-2`}>
          {confirmModal.title}
        </h3>

        <p className="mt-5 text-sm leading-6 text-neutral-600">
          {confirmModal.message}
        </p>

        <div className="mt-6 flex justify-end gap-3">
          {confirmModal.cancelText && (
            <button
              type="button"
              onClick={onClose}
              className={theme.secondaryButton}
            >
              {confirmModal.cancelText}
            </button>
          )}

          <button
            type="button"
            onClick={async () => {
              await confirmModal.onConfirm();
              onClose();
            }}
            className={
              confirmModal.danger
                ? "rounded-xl border border-neutral-950 bg-neutral-950 px-5 py-3 text-sm font-bold text-stone-50 transition hover:bg-neutral-800"
                : theme.primaryButton
            }
          >
            {confirmModal.confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}