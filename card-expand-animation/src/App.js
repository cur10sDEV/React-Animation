import "./App.css";
import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <motion.div
        transition={{ layout: { duration: 0.75, type: "spring" } }}
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="card"
        style={{
          borderRadius: "1rem",
          boxShadow: "0px 7px 20px rgba(0,0,0,0.5)",
        }}
      >
        <motion.h2 layout="position">Framer Motion 🚀</motion.h2>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              necessitatibus magnam voluptas voluptatum tenetur pariatur cumque
              commodi neque vero esse?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, eius!
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
