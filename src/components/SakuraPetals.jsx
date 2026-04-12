function SakuraPetals({ count = 16 }) {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
      {[...Array(count)].map((_, i) => {
        const size = 8 + Math.random() * 10;
        return (
          <div key={i} style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top: `-${size}px`,
            width: `${size}px`,
            height: `${size}px`,
            animation: `sakura-fall ${4 + Math.random() * 6}s ${Math.random() * 8}s ease-in-out infinite`,
          }}>
            <svg viewBox="0 0 20 20" style={{ width: "100%", height: "100%", animation: `petal-spin ${3 + Math.random() * 4}s linear infinite` }}>
              <path d="M10,2 C14,2 18,6 18,10 C14,12 10,18 10,18 C10,18 6,12 2,10 C2,6 6,2 10,2Z"
                fill={`hsla(${330 + Math.random() * 30},${80 + Math.random() * 20}%,${75 + Math.random() * 15}%,0.85)`} />
            </svg>
          </div>
        );
      })}
    </div>
  );
}

export default SakuraPetals;