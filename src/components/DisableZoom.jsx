import { useEffect } from "react";


const DisableZoom = () => {
  // useEffect(() => {
  //   // Prevent zooming with mouse wheel (desktop)
  //   const preventZoom = (e) => {
  //     e.preventDefault();
  //   };

  //   // Prevent zooming with touch events (mobile)
  //   const preventPinchZoom = (e) => {
  //     if (e.touches.length > 1) {
  //       e.preventDefault();
  //     }
  //   };

  //   // Add event listeners for zoom prevention
  //   window.addEventListener('wheel', preventZoom, { passive: false });
  //   window.addEventListener('touchstart', preventPinchZoom, { passive: false });
  //   window.addEventListener('touchmove', preventPinchZoom, { passive: false });

  //   // Cleanup event listeners when component unmounts
  //   return () => {
  //     window.removeEventListener('wheel', preventZoom);
  //     window.removeEventListener('touchstart', preventPinchZoom);
  //     window.removeEventListener('touchmove', preventPinchZoom);
  //   };
  // }, []);


  useEffect(() => {
    // শুধু zoom ব্লক করা (scroll নয়)
    const handleWheel = (e) => {
      // শুধুমাত্র Ctrl বা Meta কী (Mac-এ Command) + scroll ব্লক করবে
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    // Multi-touch দিয়ে zoom বন্ধ (scroll নয়)
    const handleTouch = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    // Event listener যোগ করা
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouch, { passive: false });
    window.addEventListener("touchmove", handleTouch, { passive: false });

    // Cleanup function (কম্পোনেন্ট আনমাউন্ট হলে event listener মুছে ফেলা)
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("touchmove", handleTouch);
    };
  }, []);
      return null;
};

export default DisableZoom;