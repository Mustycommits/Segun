import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, onClose, data }) => {
  const closeRef = useRef(null);

  // Close on Escape, lock page scroll while open, and put focus in the dialog
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && data && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="role-dialog-title"
            onClick={(event) => event.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white w-full max-w-3xl rounded-2xl shadow-xl p-6 relative max-h-[85vh] overflow-y-auto"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-3 right-3 w-10 h-10 rounded-full text-gray-500 hover:text-black hover:bg-gray-100 text-3xl cursor-pointer leading-none"
            >
              ×
            </button>

            <div className="h-24 flex items-center mb-4 pe-10">
              <img
                src={data.image}
                alt={`${data.title} logo`}
                className="max-h-full max-w-[60%] object-contain"
              />
            </div>

            <h2
              id="role-dialog-title"
              className="text-xl font-semibold text-gray-800"
            >
              {data.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">{data.category}</p>

            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {data.description
                .split("•")
                .filter((item) => item.trim() !== "")
                .map((item, i) => (
                  <li key={i}>{item.replace(/\s+/g, " ").trim()}</li>
                ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
