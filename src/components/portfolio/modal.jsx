import { motion, AnimatePresence } from "framer-motion";
const Modal = ({ isOpen, onClose, data }) => {
  return (
    <AnimatePresence>
      {isOpen && data && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white w-full max-w-3xl rounded-2xl shadow-xl p-6 relative
             max-h-[85vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-4xl font-bold cursor-pointer leading-none"
            >
              ×
            </button>

            {/* Image */}
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-44 object-cover rounded-xl mb-5 shadow-sm"
            />

            {/* Title */}
            <h2 className="text-xl font-semibold mb-1 text-gray-800">
              {data.title}
            </h2>

            {/* Description */}
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {data.description
                .split("•")
                .filter((item) => item.trim() !== "")
                .map((item, i) => (
                  <li key={i}>{item.trim()}</li>
                ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
