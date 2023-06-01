import React, { useRef } from "react";

const PrintButton = () => {
  const contentRef = useRef(null);
  const originalContentsRef = useRef(null);

  const handlePrint = () => {
    setTimeout(() => {
      const printContents = contentRef.current.innerHTML;
      originalContentsRef.current = document.body.innerHTML;

      document.body.innerHTML = printContents;

      window.scrollTo(0, 0);
      window.print();
      document.body.innerHTML = originalContentsRef.current;
    }, 100);
  };

  return (
    <div>
      <button
        onClick={handlePrint}
        className="print-hidden mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-greensas hover:bg-greensas hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-greensas sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
      >
        Imprimir
      </button>
    </div>
  );
};

export default PrintButton;
