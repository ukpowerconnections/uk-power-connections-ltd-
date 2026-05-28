export default function LogoShowcase() {
  const G = "#7eb89a";

  // Animated 3-phase electricity mark
  const Mark = ({ scale = 1, color = G }) => {
    const w = scale * 52;
    const h = scale * 2.5;
    const totalH = scale * 64;
    return (
      <>
        <style>{`
          @keyframes ph1{0%{stroke-dashoffset:${scale*52}}100%{stroke-dashoffset:${-scale*52}}}
          @keyframes ph2{0%{stroke-dashoffset:${scale*52}}100%{stroke-dashoffset:${-scale*52}}}
          @keyframes ph3{0%{stroke-dashoffset:${scale*52}}100%{stroke-dashoffset:${-scale*52}}}
        `}</style>
        <svg width={w} height={totalH} viewBox={`0 0 ${w} ${totalH}`} style={{flexShrink:0,overflow:'visible'}}>
          <defs>
            <filter id={`mg${scale}`}>
              <feGaussianBlur stdDeviation="2" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          {/* Phase 1 — top */}
          <line x1="0" y1={h/2} x2={w} y2={h/2} stroke={color} strokeWidth={h} strokeOpacity="0.2"/>
          <line x1="0" y1={h/2} x2={w} y2={h/2} stroke={color} strokeWidth={h}
            strokeDasharray={`${w*0.35} ${w*0.65}`} strokeLinecap="round"
            filter={`url(#mg${scale})`}
            style={{animation:`ph1 1.4s linear infinite`,animationDelay:'0s'}}/>
          {/* Phase 2 — middle */}
          <line x1="0" y1={totalH/2} x2={w} y2={totalH/2} stroke={color} strokeWidth={h} strokeOpacity="0.2"/>
          <line x1="0" y1={totalH/2} x2={w} y2={totalH/2} stroke={color} strokeWidth={h}
            strokeDasharray={`${w*0.35} ${w*0.65}`} strokeLinecap="round"
            filter={`url(#mg${scale})`}
            style={{animation:`ph2 1.4s linear infinite`,animationDelay:'0.47s'}}/>
          {/* Phase 3 — bottom */}
          <line x1="0" y1={totalH-h/2} x2={w} y2={totalH-h/2} stroke={color} strokeWidth={h} strokeOpacity="0.2"/>
          <line x1="0" y1={totalH-h/2} x2={w} y2={totalH-h/2} stroke={color} strokeWidth={h}
            strokeDasharray={`${w*0.35} ${w*0.65}`} strokeLinecap="round"
            filter={`url(#mg${scale})`}
            style={{animation:`ph3 1.4s linear infinite`,animationDelay:'0.93s'}}/>
        </svg>
      </>
    );
  };

  // E replacement — 3 lines at top, middle, bottom of the letter height
  // height matches the cap height of the font
  const E = ({ capHeight = 60, scale = 1, color = G }) => {
    const h = capHeight * scale;
    const w = h * 0.58; // roughly how wide an E is relative to cap height
    return (
      <span style={{
        display: "inline-block",
        width: w,
        height: h,
        position: "relative",
        verticalAlign: "middle",
        margin: `0 ${scale * 2}px`,
      }}>
        {/* Top bar */}
        <span style={{ position: "absolute", top: 0, left: 0, right: 0, height: scale * 2.5, background: color, borderRadius: 1 }} />
        {/* Middle bar */}
        <span style={{ position: "absolute", top: "50%", left: 0, right: 0, height: scale * 2.5, background: color, borderRadius: 1, transform: "translateY(-50%)" }} />
        {/* Bottom bar */}
        <span style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: scale * 2.5, background: color, borderRadius: 1 }} />
      </span>
    );
  };

  const font = {
    fontFamily: "'Nunito', 'Comfortaa', 'Trebuchet MS', Arial, sans-serif",
    fontWeight: 300,
    letterSpacing: "0.08em",
    lineHeight: 1.15,
  };

  const Logo = ({ dark = false, scale = 1, showTag = true }) => {
    const text = dark ? "#ede9e3" : "#111111";
    const tag = dark ? "rgba(237,233,227,0.45)" : "#999";
    const fs = scale * 62;
    return (
      <div style={{ display: "flex", alignItems: "flex-start", gap: scale * 28 }}>
        <div style={{ display: "flex", alignItems: "center", height: fs * 2.3 }}>
          <Mark scale={scale * 1.1} color={G} />
        </div>
        <div>
          <div style={{ ...font, fontSize: fs, color: text, whiteSpace: "nowrap", display: "flex", alignItems: "center" }}>
            UK POW<E capHeight={46} scale={scale} color={G} />R
          </div>
          <div style={{ ...font, fontSize: fs, color: text, whiteSpace: "nowrap", display: "flex", alignItems: "center" }}>
            CONN<E capHeight={46} scale={scale} color={G} />CTIONS
          </div>
          {showTag && (
            <div style={{
              fontFamily: "'Nunito', Arial, sans-serif",
              fontWeight: 300,
              fontSize: scale * 13,
              letterSpacing: "0.48em",
              color: tag,
              marginTop: scale * 18,
            }}>
              MULTI UTILITY PROVIDER
            </div>
          )}
        </div>
      </div>
    );
  };

  const NavLogo = ({ dark = false }) => {
    const text = dark ? "#ede9e3" : "#111111";
    const fs = 18;
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Mark scale={0.38} color={G} />
        <div style={{ ...font, fontSize: fs, color: text, lineHeight: 1.25, letterSpacing: "0.06em" }}>
          <div style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
            UK POW<E capHeight={13} scale={1} color={G} />R
          </div>
          <div style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
            CONN<E capHeight={13} scale={1} color={G} />CTIONS
          </div>
        </div>
      </div>
    );
  };

  const Box = ({ children, bg, pad = "44px 52px", shadow }) => (
    <div style={{ background: bg, padding: pad, display: "inline-flex", boxShadow: shadow || "0 4px 24px rgba(0,0,0,0.1)" }}>
      {children}
    </div>
  );

  const Label = ({ children }) => (
    <div style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#999", marginBottom: 20 }}>
      {children}
    </div>
  );

  return (
    <div style={{ background: "#f5f2ed", minHeight: "100vh" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400&display=swap'); *{box-sizing:border-box;margin:0;padding:0;}`}</style>

      {/* Live nav */}
      <div style={{ background: "#080808", padding: "0 40px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <NavLogo dark />
        <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.12em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase" }}>Logo System</span>
      </div>

      <div style={{ padding: "56px 40px", display: "flex", flexDirection: "column", gap: 56 }}>

        <div>
          <Label>01 — Light Version</Label>
          <Box bg="#ffffff"><Logo dark={false} scale={1} showTag /></Box>
        </div>

        <div>
          <Label>02 — Dark Version</Label>
          <Box bg="#080808" shadow="0 4px 28px rgba(0,0,0,0.5)"><Logo dark={true} scale={1} showTag /></Box>
        </div>

        <div>
          <Label>03 — Green Background</Label>
          <Box bg={G} shadow="0 4px 28px rgba(126,184,154,0.4)">
          <div style={{ display: "flex", alignItems: "flex-start", gap: 28 }}>
              <div style={{ display: "flex", alignItems: "center", height: 62 * 2.3 }}>
                <Mark scale={1.1} color="rgba(255,255,255,0.8)" />
              </div>
              <div>
                <div style={{ ...font, fontSize: 62, color: "#fff", whiteSpace: "nowrap", display: "flex", alignItems: "center" }}>
                  UK POW<E capHeight={46} scale={1} color="rgba(255,255,255,0.75)" />R
                </div>
                <div style={{ ...font, fontSize: 62, color: "#fff", whiteSpace: "nowrap", display: "flex", alignItems: "center" }}>
                  CONN<E capHeight={46} scale={1} color="rgba(255,255,255,0.75)" />CTIONS
                </div>
                <div style={{ fontFamily: "'Nunito',Arial,sans-serif", fontWeight: 300, fontSize: 13, letterSpacing: "0.48em", color: "rgba(255,255,255,0.6)", marginTop: 18 }}>
                  MULTI UTILITY PROVIDER
                </div>
              </div>
            </div>
          </Box>
        </div>

        <div>
          <Label>04 — Nav / Compact</Label>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Box bg="#fff" pad="16px 28px" shadow="0 2px 12px rgba(0,0,0,0.07)"><NavLogo dark={false} /></Box>
            <Box bg="#080808" pad="16px 28px" shadow="0 2px 12px rgba(0,0,0,0.4)"><NavLogo dark={true} /></Box>
          </div>
        </div>

        <div>
          <Label>05 — Mark Only</Label>
          <div style={{ display: "flex", gap: 20, alignItems: "flex-end", flexWrap: "wrap" }}>
            <Box bg="#fff" pad="28px" shadow="0 2px 12px rgba(0,0,0,0.07)"><Mark scale={1.3} color={G} /></Box>
            <Box bg="#080808" pad="28px" shadow="0 2px 12px rgba(0,0,0,0.4)"><Mark scale={1.3} color={G} /></Box>
            <div style={{ width: 80, height: 80, background: "#080808", borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.35)" }}>
              <Mark scale={0.6} color={G} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <div style={{ width: 32, height: 32, background: "#080808", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Mark scale={0.26} color={G} />
              </div>
              <span style={{ fontFamily: "monospace", fontSize: 10, color: "#999" }}>favicon</span>
            </div>
          </div>
        </div>

        <div>
          <Label>06 — Brand Colours</Label>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {[
              { name: "Pastel Green", hex: "#7eb89a", bg: G },
              { name: "Black", hex: "#080808", bg: "#080808" },
              { name: "Off White", hex: "#ede9e3", bg: "#ede9e3" },
              { name: "Green Tint", hex: "rgba(126,184,154,0.15)", bg: "rgba(126,184,154,0.15)" },
            ].map(({ name, hex, bg }) => (
              <div key={name} style={{ width: 130 }}>
                <div style={{ height: 72, background: bg, border: "1px solid rgba(0,0,0,0.1)", borderRadius: 4 }} />
                <div style={{ paddingTop: 10 }}>
                  <div style={{ fontFamily: "monospace", fontSize: 12, fontWeight: 600, color: "#1a1a1a" }}>{name}</div>
                  <div style={{ fontFamily: "monospace", fontSize: 10, color: "#888", marginTop: 2 }}>{hex}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
