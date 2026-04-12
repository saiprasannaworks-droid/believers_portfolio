function AmbientBackground() {
  return (
    <div className="ambient-background" aria-hidden="true">
      <div className="ambient-background__orb ambient-background__orb--one" />
      <div className="ambient-background__orb ambient-background__orb--two" />
      <div className="ambient-background__orb ambient-background__orb--three" />
      <div className="ambient-background__grid" />
      <div className="ambient-background__glow-line ambient-background__glow-line--one" />
      <div className="ambient-background__glow-line ambient-background__glow-line--two" />
    </div>
  );
}

export default AmbientBackground;