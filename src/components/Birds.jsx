function Birds() {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}>
      {[0, 1, 2].map(i => (
        <svg key={i} viewBox="0 0 40 20" style={{
          position: "absolute",
          top: `${10 + i * 8}%`,
          left: `-50px`,
          width: "40px",
          opacity: 0.7,
          animation: `bird-fly ${12 + i * 5}s ${i * 4 + 2}s ease-in-out infinite`,
        }}>
          <path d="M2,10 Q10,2 20,10 Q30,2 38,10" stroke="#2d1b2e" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      ))}
    </div>
  );
}

export default Birds;