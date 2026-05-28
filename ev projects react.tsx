import { useState, useEffect } from "react";

const G = "#7eb89a";
const BLACK = "#080808";
const DARK = "#0e0f11";
const CARD = "#131518";
const BORDER = "rgba(255,255,255,0.07)";
const BORDER2 = "rgba(255,255,255,0.12)";
const WHITE = "#ede9e3";
const MUTED = "rgba(237,233,227,0.45)";
const LIGHT_BG = "#e8e4dc";
const LIGHT_MID = "#c8d4cc";

const EVSceneSVG = () => (
  <svg viewBox="0 0 1400 900" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',position:'absolute',inset:0,display:'block'}}>
    <defs>
      <radialGradient id="evambG" cx="55%" cy="45%" r="55%">
        <stop offset="0%" stopColor="#1a3525" stopOpacity="1"/>
        <stop offset="60%" stopColor="#0a1410" stopOpacity="1"/>
        <stop offset="100%" stopColor="#050808" stopOpacity="1"/>
      </radialGradient>
      <radialGradient id="evfLight" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#7eb89a" stopOpacity="0.14"/>
        <stop offset="100%" stopColor="#7eb89a" stopOpacity="0"/>
      </radialGradient>
      <linearGradient id="evcG1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1a2a1e"/><stop offset="100%" stopColor="#0c1410"/>
      </linearGradient>
      <filter id="evcGlow"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <filter id="evlHalo"><feGaussianBlur stdDeviation="20" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <rect width="1400" height="900" fill="url(#evambG)"/>
    <rect width="1400" height="90" fill="#050808"/>
    {[140,380,620,860,1100,1340].map((x,i)=>(
      <g key={i}>
        <rect x={x-55} y="74" width="110" height="5" rx="2" fill="#dff0e8" opacity="0.95"/>
        <rect x={x-55} y="74" width="110" height="5" rx="2" fill="#7eb89a" filter="url(#evlHalo)" opacity="0.6"/>
        <path d={`M${x-55},79 L${x-155},900 L${x+155},900 L${x+55},79 Z`} fill="#7eb89a" opacity="0.018"/>
      </g>
    ))}
    <rect x="0" y="740" width="1400" height="160" fill="#070d09"/>
    {[-100,100,300,500,700,900,1100,1300,1500].map((x,i)=>(
      <line key={i} x1={700} y1={740} x2={x} y2={900} stroke="#0e1810" strokeWidth="1.5" opacity="0.5"/>
    ))}
    {[180,480,780,1080].map((x,i)=>(<ellipse key={i} cx={x} cy="755" rx="75" ry="16" fill="url(#evfLight)" opacity="0.9"/>))}
    <rect x="0" y="380" width="1400" height="360" fill="#070c09"/>
    {[100,370,640,910,1180].map((x,i)=>(
      <g key={i}>
        <rect x={x-38} y="400" width="76" height="340" rx="6" fill="#0d1912" stroke="#192c1c" strokeWidth="1.5"/>
        <rect x={x-28} y="425" width="56" height="88" rx="3" fill="#070d09" stroke="#1c2e1e" strokeWidth="1"/>
        <rect x={x-26} y="427" width="52" height="84" rx="2" fill="#7eb89a" opacity={i===1||i===3?0.2:0.07} filter="url(#evcGlow)"/>
        <rect x={x-20} y="436" width="40" height="5" rx="1" fill="#9ed4b4" opacity={i===1||i===3?0.6:0.2}/>
        <rect x={x-20} y="464" width="40" height="7" rx="2" fill="#09100a" stroke="#182418" strokeWidth="1"/>
        <rect x={x-20} y="464" width={40*(i===1?0.84:i===3?0.61:i===0?0.43:0.28)} height="7" rx="2" fill="#7eb89a" opacity="0.88"/>
        <circle cx={x+28} cy="420" r="6" fill={i===1||i===3?'#7eb89a':'#192e19'} opacity={i===1||i===3?0.95:0.5} filter={i===1||i===3?"url(#evcGlow)":undefined}/>
        {(i===1||i===3)&&<circle cx={x+28} cy="420" r="13" fill="#7eb89a" opacity="0.18"/>}
        <path d={`M${x+(i%2===0?8:-8)},550 C${x+(i%2===0?32:-32)},605 ${x+(i%2===0?52:-52)},655 ${x+(i%2===0?82:-82)},722`} fill="none" stroke="#0e1910" strokeWidth="5" strokeLinecap="round"/>
        <rect x={x-44} y="736" width="88" height="12" rx="3" fill="#09120a"/>
      </g>
    ))}
    <rect x="12" y="582" width="278" height="156" rx="13" fill="url(#evcG1)" stroke="#192a1e" strokeWidth="1.5"/>
    <rect x="46" y="532" width="208" height="60" rx="11" fill="#101c13"/>
    <rect x="62" y="537" width="86" height="48" rx="5" fill="#0c1810" opacity="0.85"/>
    <rect x="160" y="537" width="76" height="48" rx="5" fill="#0c1810" opacity="0.85"/>
    {[62,228].map((wx,j)=>(<g key={j}><circle cx={wx} cy="736" r="33" fill="#070c08" stroke="#131c12" strokeWidth="3"/><circle cx={wx} cy="736" r="17" fill="#0b1210"/></g>))}
    <rect x="236" y="628" width="36" height="22" rx="4" fill="#7eb89a" opacity="0.28" filter="url(#evcGlow)"/>
    <rect x="482" y="558" width="338" height="178" rx="13" fill="#0c1410" stroke="#152012" strokeWidth="1.5"/>
    <rect x="522" y="498" width="258" height="72" rx="13" fill="#0e1a11"/>
    <rect x="540" y="504" width="104" height="58" rx="6" fill="#0b1810" opacity="0.88"/>
    <rect x="658" y="504" width="98" height="58" rx="6" fill="#0b1810" opacity="0.88"/>
    {[548,702].map((wx,j)=>(<g key={j}><circle cx={wx} cy="736" r="38" fill="#070c08" stroke="#131c12" strokeWidth="3"/><circle cx={wx} cy="736" r="20" fill="#0b1210"/></g>))}
    <rect x="612" y="606" width="42" height="26" rx="5" fill="#7eb89a" opacity="0.38" filter="url(#evcGlow)"/>
    <path d="M650,632 Q695,655 698,685 Q700,715 696,736" fill="none" stroke="#0e1910" strokeWidth="7" strokeLinecap="round"/>
    <path d="M650,632 Q695,655 698,685 Q700,715 696,736" fill="none" stroke="#7eb89a" strokeWidth="2.5" strokeLinecap="round" opacity="0.35"/>
    <circle r="5" fill="#7eb89a" opacity="0.9" filter="url(#evcGlow)">
      <animateMotion path="M650,632 Q695,655 698,685 Q700,715 696,736" dur="1.6s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0;1;1;0" dur="1.6s" repeatCount="indefinite"/>
    </circle>
    <rect x="950" y="0" width="450" height="900" fill="#050808" opacity="0.22"/>
  </svg>
);

const Label = ({children, dark=false}) => (
  <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:'0.16em',textTransform:'uppercase',color:dark?'#4a8a6a':G,marginBottom:14}}>{children}</div>
);

const Title = ({children, dark=false, style={}}) => (
  <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(32px,4vw,54px)',lineHeight:1,letterSpacing:'0.02em',color:dark?'#1a2a20':WHITE,...style}}>{children}</h2>
);

const NavMark = () => (
  <svg width="30" height="26" viewBox="0 0 30 26" style={{flexShrink:0}}>
    {[2,13,24].map((y,i)=>(
      <g key={i}>
        <line x1="0" y1={y} x2="30" y2={y} stroke={G} strokeWidth="1.5" strokeOpacity="0.2"/>
        <circle r="2.2" fill={G}>
          <animateMotion path={`M0,${y} L30,${y}`} dur="1.4s" begin={`${i*0.47}s`} repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;1;1;0" dur="1.4s" begin={`${i*0.47}s`} repeatCount="indefinite"/>
        </circle>
      </g>
    ))}
  </svg>
);

export default function EVProjects() {
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => { window.removeEventListener('resize', check); window.removeEventListener('scroll', onScroll); };
  }, []);

  const inp = {background:CARD, border:`1px solid ${BORDER}`, color:WHITE, padding:'12px 16px', fontFamily:"'DM Sans',sans-serif", fontSize:14, outline:'none', width:'100%'};

  return (
    <div style={{background:BLACK,color:WHITE,fontFamily:"'DM Sans',system-ui,sans-serif",lineHeight:1.6,overflowX:'hidden'}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&family=Nunito:wght@200;300&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        ::-webkit-scrollbar{width:3px;}
        ::-webkit-scrollbar-thumb{background:${G};border-radius:2px;}
        .hbtn:hover{opacity:0.88!important;transform:translateY(-2px)!important;}
        .hghost:hover{border-color:${G}!important;color:${G}!important;}
        .hcard:hover{background:#101410!important;}
        .hcard:hover .bar{transform:scaleX(1)!important;}
        .hstep:hover{border-color:rgba(126,184,154,0.4)!important;}
        .hlight:hover{background:rgba(255,255,255,0.9)!important;}
        .hback:hover{color:${G}!important;}
      `}</style>

      {/* NAV */}
      <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:100,padding:mobile?'0 20px':'0 48px',display:'flex',alignItems:'center',justifyContent:'space-between',height:64,background:scrolled?'rgba(8,8,8,0.98)':'rgba(8,8,8,0.88)',backdropFilter:'blur(20px)',borderBottom:`1px solid ${BORDER}`}}>
        <div style={{display:'flex',alignItems:'center',gap:14}}>
          <a href="#" className="hback" style={{color:MUTED,textDecoration:'none',fontSize:11,fontFamily:"'DM Mono',monospace",letterSpacing:'0.08em',transition:'color 0.2s'}}>← MAIN SITE</a>
          <span style={{color:BORDER2,fontSize:14}}>|</span>
          <a href="#top" style={{textDecoration:'none',display:'flex',alignItems:'center',gap:10}}>
            <NavMark/>
            <div style={{fontFamily:"'Nunito',sans-serif",fontWeight:300,lineHeight:1.2,letterSpacing:'0.06em'}}>
              <div style={{fontSize:mobile?13:15,color:WHITE,whiteSpace:'nowrap'}}>UK POWER CONNECTIONS</div>
              <div style={{fontSize:mobile?10:11,color:G,fontFamily:"'DM Mono',monospace",letterSpacing:'0.1em'}}>{'//'} EV PROJECTS</div>
            </div>
          </a>
        </div>
        {!mobile && (
          <div style={{display:'flex',gap:28,alignItems:'center'}}>
            {['Your EV Needs','How It Works','Why Us'].map(l=>(
              <a key={l} href={`#${l.toLowerCase().replace(/ /g,'-')}`} style={{color:MUTED,textDecoration:'none',fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase'}}>{l}</a>
            ))}
            <a href="#quote" style={{background:G,color:BLACK,padding:'8px 20px',fontSize:11,fontWeight:700,letterSpacing:'0.08em',textTransform:'uppercase',textDecoration:'none'}}>Request a Quote</a>
          </div>
        )}
        {mobile && <a href="#quote" style={{background:G,color:BLACK,padding:'8px 14px',fontSize:10,fontWeight:700,letterSpacing:'0.07em',textTransform:'uppercase',textDecoration:'none'}}>Quote</a>}
      </nav>

      {/* HERO */}
      <section id="top" style={{minHeight:'100vh',position:'relative',display:'flex',alignItems:'center',overflow:'hidden',paddingTop:64}}>
        <div style={{position:'absolute',inset:0,zIndex:0}}>
          <EVSceneSVG/>
          <div style={{position:'absolute',inset:0,background:mobile?'linear-gradient(to bottom, rgba(6,10,8,0.82) 45%, rgba(6,10,8,0.5) 100%)':'linear-gradient(to right, rgba(6,10,8,0.92) 0%, rgba(6,10,8,0.78) 35%, rgba(6,10,8,0.28) 60%, rgba(180,210,192,0.08) 80%, rgba(180,210,192,0.14) 100%)'}}/>
          <div style={{position:'absolute',inset:0,background:'linear-gradient(to top, rgba(6,10,8,0.55) 0%, transparent 50%)'}}/>
        </div>
        <div style={{position:'relative',zIndex:2,padding:mobile?'60px 24px 80px':'80px 80px 100px',maxWidth:mobile?'100%':660}}>
          {/* Call Now */}
          <a href="tel:01727229040" style={{display:'inline-flex',alignItems:'center',gap:0,marginBottom:28,textDecoration:'none',overflow:'hidden',boxShadow:'0 8px 32px rgba(0,0,0,0.4)',borderRadius:50,transition:'transform 0.2s,box-shadow 0.2s'}}
            onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 12px 40px rgba(126,184,154,0.25)';}}
            onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='0 8px 32px rgba(0,0,0,0.4)';}}>
            <div style={{background:G,padding:'14px 18px',display:'flex',alignItems:'center',gap:10,flexShrink:0}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={BLACK} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:18,letterSpacing:'0.08em',color:BLACK,whiteSpace:'nowrap'}}>Call Now</span>
            </div>
            <div style={{background:'rgba(8,8,8,0.75)',backdropFilter:'blur(16px)',border:'1px solid rgba(126,184,154,0.2)',borderLeft:'none',padding:'14px 22px',display:'flex',alignItems:'center',gap:16}}>
              <div>
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'0.14em',textTransform:'uppercase',color:G,marginBottom:2}}>Free consultation</div>
                <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:22,letterSpacing:'0.06em',color:WHITE,lineHeight:1}}>01727 229040</div>
              </div>
              <div style={{width:1,height:32,background:'rgba(126,184,154,0.2)'}}/>
              <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'0.1em',textTransform:'uppercase',color:MUTED,whiteSpace:'nowrap'}}>Mon–Fri<br/>8am–6pm</div>
            </div>
          </a>
          <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(126,184,154,0.12)',border:'1px solid rgba(126,184,154,0.28)',color:G,fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:'0.14em',textTransform:'uppercase',padding:'6px 14px',marginBottom:28,display:'block'}}>
            <span style={{fontSize:7}}>●</span> For All of Your EV Infrastructure Needs
          </div>
          <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:mobile?'clamp(48px,11vw,68px)':'clamp(52px,6.5vw,86px)',lineHeight:0.93,letterSpacing:'0.015em',marginBottom:24}}>
            One Contractor.<br/><span style={{color:G}}>End-to-End.</span><br/>No DNO Delays.
          </h1>
          <p style={{color:MUTED,fontSize:mobile?15:17,fontWeight:300,lineHeight:1.75,maxWidth:500,marginBottom:40}}>
            We design, install and self-connect your EV charging infrastructure and substations — all under one roof. Full NERS accreditation means no waiting on the DNO.
          </p>
          <div style={{display:'flex',gap:12,marginBottom:56,flexWrap:'wrap'}}>
            <a href="#quote" className="hbtn" style={{background:G,color:BLACK,padding:'13px 28px',fontWeight:700,fontSize:13,letterSpacing:'0.08em',textTransform:'uppercase',textDecoration:'none',transition:'all 0.2s'}}>Request a Quote</a>
            <a href="#your-ev-needs" className="hghost" style={{border:`1px solid ${BORDER2}`,color:WHITE,padding:'13px 28px',fontWeight:500,fontSize:13,letterSpacing:'0.08em',textTransform:'uppercase',textDecoration:'none',transition:'all 0.2s'}}>Our Services</a>
          </div>
          <div style={{display:'flex',flexWrap:'wrap',gap:0,borderTop:`1px solid ${BORDER}`,paddingTop:36}}>
            {[['4-6 Weeks','Faster Than DNO'],['Full Scopes','NERS Accredited'],['End-to-End','One Contractor']].map(([n,l],i)=>(
              <div key={i} style={{paddingRight:mobile?18:32,marginRight:mobile?18:32,borderRight:i<2?`1px solid ${BORDER}`:'none',marginBottom:8}}>
                <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:mobile?28:36,color:G,lineHeight:1}}>{n}</div>
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:MUTED,letterSpacing:'0.1em',textTransform:'uppercase',marginTop:4}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        {!mobile && (
          <div style={{position:'absolute',right:48,top:'50%',transform:'translateY(-50%)',display:'flex',flexDirection:'column',gap:8,zIndex:3}}>
            {['NERS Full Scopes','ICP Accredited','Self-Connection','No DNO Queue'].map((t,i)=>(
              <div key={i} style={{background:'rgba(8,8,8,0.75)',border:`1px solid ${BORDER2}`,backdropFilter:'blur(12px)',fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:'0.1em',textTransform:'uppercase',padding:'8px 16px',color:MUTED,whiteSpace:'nowrap'}}>
                <span style={{color:G,marginRight:6}}>✓</span>{t}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CHALLENGE */}
      <section style={{padding:mobile?'60px 24px':'80px 80px',background:`linear-gradient(to bottom, ${BLACK} 0%, #0f1a14 100%)`,position:'relative',overflow:'hidden'}}>
        <div style={{position:'relative',display:'grid',gridTemplateColumns:mobile?'1fr':'1fr 1fr',gap:mobile?48:80,alignItems:'start'}}>
          <div>
            <Label>The Challenge</Label>
            <Title style={{marginBottom:20}}>Most EV providers can't deliver the full picture</Title>
            <p style={{color:MUTED,fontSize:15,fontWeight:300,lineHeight:1.8}}>Typical chargepoint operators provide hardware — but for electrical infrastructure they rely on the DNO, adding weeks of delay and a second contractor you can't control.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:2,background:BORDER}}>
            {[
              {title:'Typical EV Providers',bad:true,points:['Must go through DNO — weeks of delay','Cannot perform contestable works','Multiple contractors, multiple failures','No control over substation design']},
              {title:'UK Power Connections',bad:false,points:['NERS accredited — self-connect','Full contestable + non-contestable works','One contractor, design to energisation','Substations built by our own team']},
            ].map(({title,bad,points})=>(
              <div key={title} style={{background:bad?'#0d0a0a':CARD,padding:'28px 24px'}}>
                <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:18,letterSpacing:'0.03em',marginBottom:16,color:bad?'rgba(237,233,227,0.4)':WHITE}}>{title}</div>
                {points.map((p,i)=>(
                  <div key={i} style={{display:'flex',gap:10,alignItems:'flex-start',marginBottom:10}}>
                    <span style={{color:bad?'rgba(200,80,80,0.5)':G,fontSize:14,lineHeight:1.4,flexShrink:0}}>{bad?'✗':'✓'}</span>
                    <span style={{color:bad?MUTED:WHITE,fontSize:13,fontWeight:300,lineHeight:1.6}}>{p}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCREDITATION */}
      <section style={{padding:mobile?'60px 24px':'80px 80px',background:'linear-gradient(to bottom, #0f1a14 0%, #162010 100%)'}}>
        <div style={{textAlign:'center',marginBottom:mobile?40:56}}>
          <Label>Our Accreditation</Label>
          <Title style={{marginBottom:16}}>Full Scopes NERS + ICP Certified</Title>
          <p style={{color:MUTED,fontSize:15,fontWeight:300,lineHeight:1.8,maxWidth:600,margin:'0 auto'}}>Administered by Lloyd's Register on behalf of all UK DNOs — our full NERS accreditation certifies us to deliver the complete range of electrical connection works.</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:mobile?'1fr':'repeat(3,1fr)',gap:2,background:BORDER}}>
          {[
            {icon:'◈',title:'NERS — Full Scopes',desc:"National Electricity Registration Scheme, administered by Lloyd's Register"},
            {icon:'⚡',title:'ICP Status',desc:'Authorised to connect directly to the UK distribution network without DNO'},
            {icon:'◎',title:'Contestable Works',desc:'The only accreditation covering both — design, install and self-connect'},
          ].map(({icon,title,desc})=>(
            <div key={title} className="hcard" style={{background:DARK,padding:'36px 32px',position:'relative',overflow:'hidden',transition:'background 0.3s',textAlign:'center'}}>
              <div className="bar" style={{position:'absolute',bottom:0,left:0,right:0,height:2,background:G,transform:'scaleX(0)',transformOrigin:'left',transition:'transform 0.4s'}}/>
              <div style={{width:52,height:52,background:'rgba(126,184,154,0.12)',border:'1px solid rgba(126,184,154,0.28)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,margin:'0 auto 20px'}}>{icon}</div>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:22,letterSpacing:'0.03em',marginBottom:10}}>{title}</div>
              <p style={{color:MUTED,fontSize:13,fontWeight:300,lineHeight:1.75}}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* YOUR EV NEEDS */}
      <section id="your-ev-needs" style={{padding:mobile?'60px 24px':'100px 80px',background:'linear-gradient(to bottom, #162010 0%, #1e2a1a 60%, #283822 100%)'}}>
        <div style={{marginBottom:mobile?40:56}}>
          <Label>EV Projects + Installs</Label>
          <Title style={{marginBottom:16}}>Built for Commercial Scale</Title>
          <p style={{color:MUTED,fontSize:15,fontWeight:300,lineHeight:1.8,maxWidth:520}}>From underground car parks to multi-storey retail destinations — we build the electrical backbone that makes large-scale EV charging possible.</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:mobile?'1fr':'repeat(3,1fr)',gap:2,background:BORDER,marginBottom:2}}>
          {[
            {title:'Commercial Car Parks',desc:'End-to-end EV charging for retail and office destinations at any scale.'},
            {title:'Public Chargepoints',desc:'On-street and destination charging for councils and public sector bodies.'},
            {title:'Urban Charging Hubs',desc:'Designed for high-footfall areas — future-proofed capacity planning.'},
          ].map(({title,desc},i)=>(
            <div key={i} style={{background:'rgba(14,21,12,0.9)',padding:mobile?'28px 24px':'36px 32px',position:'relative',overflow:'hidden'}}>
              <div style={{position:'absolute',bottom:0,left:0,right:0,height:2,background:G,opacity:0.5}}/>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:22,letterSpacing:'0.03em',marginBottom:12}}>{title}</div>
              <p style={{color:MUTED,fontSize:14,fontWeight:300,lineHeight:1.75}}>{desc}</p>
            </div>
          ))}
        </div>
        <div style={{display:'grid',gridTemplateColumns:mobile?'1fr':'repeat(3,1fr)',gap:2,background:BORDER}}>
          {[
            {title:'Workplace + Fleet',desc:'Depot and fleet infrastructure for commercial operators and councils.'},
            {title:'Council + Public Sector',desc:'Borough-wide rollout capability with single fixed-price contracts.'},
            {title:'Substation Build',desc:'Ground-mounted to indoor units — civil works, switchgear and commissioning.'},
          ].map(({title,desc},i)=>(
            <div key={i} style={{background:'rgba(14,21,12,0.9)',padding:mobile?'28px 24px':'36px 32px',position:'relative',overflow:'hidden'}}>
              <div style={{position:'absolute',bottom:0,left:0,right:0,height:2,background:G,opacity:0.3}}/>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:22,letterSpacing:'0.03em',marginBottom:12}}>{title}</div>
              <p style={{color:MUTED,fontSize:14,fontWeight:300,lineHeight:1.75}}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section style={{padding:mobile?'60px 24px':'100px 80px',background:'linear-gradient(to bottom, #283822 0%, #3a4e30 50%, #4a6040 100%)'}}>
        <div style={{marginBottom:mobile?40:56}}>
          <Label>Our Capabilities</Label>
          <Title style={{marginBottom:16}}>Everything Your EV Infrastructure Needs</Title>
          <p style={{color:'rgba(237,233,227,0.6)',fontSize:15,fontWeight:300,lineHeight:1.8,maxWidth:520}}>From feasibility to final energisation — the complete electrical backbone for your charging network, delivered by a single accredited team.</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:mobile?'1fr':'repeat(2,1fr)',gap:2,background:'rgba(255,255,255,0.06)'}}>
          {[
            ['01','Network Design','Bespoke electrical network design for EV charging hubs, on-street infrastructure and commercial installations — engineered to your exact capacity requirements.'],
            ['02','Substation Build + Install','Complete substation solutions from ground-mounted to indoor units. Civil works, switchgear, transformers and commissioning as a single package.'],
            ['03','HV + LV Cable Networks','High and low voltage cable installation, jointing and testing. Coordinated civil engineering for trenching and duct routes.'],
            ['04','Self-Connection + Energisation','As an ICP we perform our own grid connections — bypassing DNO queues entirely. Your project goes live weeks sooner.'],
            ['05','Contestable Works','Cable laying, jointing, civil works and substation installation — all contestable elements delivered directly by us, not outsourced.'],
            ['06','Project Management','Dedicated project management for local authority contracts. Compliance, wayleaves, permits and multi-site coordination handled as standard.'],
          ].map(([n,title,desc])=>(
            <div key={n} className="hcard" style={{background:'rgba(20,30,16,0.85)',padding:mobile?'28px 24px':'36px 40px',position:'relative',overflow:'hidden',transition:'background 0.3s'}}>
              <div className="bar" style={{position:'absolute',bottom:0,left:0,right:0,height:2,background:G,transform:'scaleX(0)',transformOrigin:'left',transition:'transform 0.4s'}}/>
              <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:G,letterSpacing:'0.12em',marginBottom:16,opacity:0.8}}>— {n}</div>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:22,letterSpacing:'0.03em',marginBottom:12}}>{title}</div>
              <p style={{color:'rgba(237,233,227,0.55)',fontSize:14,fontWeight:300,lineHeight:1.75}}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{padding:mobile?'60px 24px':'100px 80px',background:`linear-gradient(to bottom, #4a6040 0%, ${LIGHT_MID} 40%, ${LIGHT_BG} 100%)`}}>
        <div style={{marginBottom:mobile?40:56}}>
          <Label dark>How It Works</Label>
          <Title dark style={{marginBottom:16}}>From Brief to Live Chargers in Four Steps</Title>
          <p style={{color:'rgba(26,42,32,0.65)',fontSize:15,fontWeight:300,lineHeight:1.8,maxWidth:520}}>One point of contact. One programme. No waiting on the DNO.</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:mobile?'1fr':'repeat(4,1fr)',gap:mobile?16:3,background:mobile?'transparent':'rgba(26,42,32,0.1)'}}>
          {[
            ['1','Feasibility + Design','We assess your sites, model capacity requirements and produce a full network design — including substation specification and cable routes.'],
            ['2','Civil + Electrical Build','Our in-house teams deliver all civil works, cable installation, jointing and substation construction. One contractor, fewer interfaces.'],
            ['3','Self-Connection','As a NERS-accredited ICP, we connect directly to the distribution network. No DNO queue. No waiting. On your timeline.'],
            ['4','Commissioning + Handover','Full testing, commissioning and documentation. We hand over a live, certified installation ready for your chargepoint operator.'],
          ].map(([n,title,desc])=>(
            <div key={n} className="hstep" style={{background:'rgba(255,255,255,0.65)',border:'1px solid rgba(26,42,32,0.12)',padding:mobile?'28px 24px':'32px 28px',transition:'border-color 0.3s'}}>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:52,color:G,lineHeight:1,marginBottom:16,opacity:0.7}}>{n}</div>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:20,letterSpacing:'0.03em',color:'#1a2a14',marginBottom:10}}>{title}</div>
              <p style={{color:'rgba(26,42,20,0.65)',fontSize:13,fontWeight:300,lineHeight:1.75}}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" style={{padding:mobile?'60px 24px':'100px 80px',background:LIGHT_BG}}>
        <div style={{display:'grid',gridTemplateColumns:mobile?'1fr':'1fr 1fr',gap:mobile?40:80,alignItems:'start'}}>
          <div>
            <Label dark>For Local Authorities</Label>
            <Title dark style={{marginBottom:20}}>Deliver Your EV Programme Faster + at Lower Cost</Title>
            <p style={{color:'rgba(26,42,20,0.65)',fontSize:15,fontWeight:300,lineHeight:1.8,marginBottom:32}}>Whether deploying on-street chargers, building out depot charging, or planning a borough-wide rollout — our end-to-end capability means fewer contracts, fewer delays, and one accountable partner.</p>
            <a href="#quote" className="hbtn" style={{background:'#1a2a14',color:WHITE,padding:'13px 28px',fontWeight:700,fontSize:13,letterSpacing:'0.08em',textTransform:'uppercase',textDecoration:'none',display:'inline-block',transition:'all 0.2s'}}>Get Free Infrastructure Assessment</a>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
            {[
              {icon:'⚡',title:'Faster Timelines',desc:'Skip the DNO queue and cut 4-6 weeks from your programme'},
              {icon:'£',title:'Cost Certainty',desc:'One fixed-price contract covering design through to energisation'},
              {icon:'◎',title:'Single Contact',desc:'One team, one programme, one accountable partner throughout'},
              {icon:'◈',title:'Proven at Scale',desc:'500+ connections delivered across residential, commercial and public sector'},
            ].map(({icon,title,desc})=>(
              <div key={title} className="hlight" style={{background:'rgba(255,255,255,0.6)',border:'1px solid rgba(26,42,20,0.1)',padding:'24px 20px',transition:'all 0.2s'}}>
                <div style={{width:40,height:40,background:'rgba(126,184,154,0.2)',border:'1px solid rgba(126,184,154,0.3)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:16,marginBottom:14}}>{icon}</div>
                <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:18,letterSpacing:'0.03em',color:'#1a2a14',marginBottom:6}}>{title}</div>
                <p style={{color:'rgba(26,42,20,0.6)',fontSize:13,fontWeight:300,lineHeight:1.7}}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section id="quote" style={{padding:mobile?'60px 24px':'100px 80px',background:`linear-gradient(to bottom, ${LIGHT_BG} 0%, #3a4e30 35%, ${DARK} 70%, ${BLACK} 100%)`}}>
        <div style={{maxWidth:760,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:48}}>
            <Label>Get In Touch</Label>
            <Title style={{marginBottom:14}}>Request a Quote</Title>
            <p style={{color:MUTED,fontSize:15,fontWeight:300,lineHeight:1.8}}>Tell us about your project and we will come back with a tailored proposal — typically within 48 hours.</p>
          </div>
          <form onSubmit={e=>{e.preventDefault();setSubmitted(true);setTimeout(()=>setSubmitted(false),3000);}}
            style={{display:'flex',flexDirection:'column',gap:14,background:'rgba(14,21,12,0.85)',border:`1px solid ${BORDER2}`,padding:mobile?'32px 24px':'44px 48px',backdropFilter:'blur(12px)'}}>
            <div style={{display:'grid',gridTemplateColumns:mobile?'1fr':'1fr 1fr',gap:14}}>
              {[['First Name','text','Jane'],['Last Name','text','Smith']].map(([l,t,p])=>(
                <div key={l} style={{display:'flex',flexDirection:'column',gap:7}}>
                  <label style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'0.12em',textTransform:'uppercase',color:MUTED}}>{l}</label>
                  <input type={t} placeholder={p} required style={inp}/>
                </div>
              ))}
            </div>
            <div style={{display:'grid',gridTemplateColumns:mobile?'1fr':'1fr 1fr',gap:14}}>
              {[['Email Address','email','jane@council.gov.uk'],['Organisation','text','e.g. City Council']].map(([l,t,p])=>(
                <div key={l} style={{display:'flex',flexDirection:'column',gap:7}}>
                  <label style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'0.12em',textTransform:'uppercase',color:MUTED}}>{l}</label>
                  <input type={t} placeholder={p} required style={inp}/>
                </div>
              ))}
            </div>
            <div style={{display:'grid',gridTemplateColumns:mobile?'1fr':'1fr 1fr',gap:14}}>
              <div style={{display:'flex',flexDirection:'column',gap:7}}>
                <label style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'0.12em',textTransform:'uppercase',color:MUTED}}>Project Type</label>
                <select required style={inp}>
                  <option value="">Select...</option>
                  {['On-street EV Charging','Car Park / Hub Charging','Depot / Fleet Charging','Substation Only','Full Network Design + Build','Other'].map(o=><option key={o}>{o}</option>)}
                </select>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:7}}>
                <label style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'0.12em',textTransform:'uppercase',color:MUTED}}>Est. Chargepoints</label>
                <select required style={inp}>
                  <option value="">Select...</option>
                  {['1-25','26-100','101-500','500+','Not sure yet'].map(o=><option key={o}>{o}</option>)}
                </select>
              </div>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:7}}>
              <label style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'0.12em',textTransform:'uppercase',color:MUTED}}>Project Details</label>
              <textarea rows={5} placeholder="Tell us about your project, site locations, timeline..." style={{...inp,resize:'vertical'}}/>
            </div>
            <div style={{display:'flex',flexDirection:mobile?'column':'row',alignItems:mobile?'stretch':'center',justifyContent:'space-between',gap:16,marginTop:8}}>
              <button type="submit" className="hbtn" style={{background:submitted?'#1a6e42':G,color:submitted?WHITE:BLACK,border:'none',padding:'14px 32px',fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:13,letterSpacing:'0.08em',textTransform:'uppercase',cursor:'pointer',transition:'all 0.2s'}}>
                {submitted?'Quote Request Sent':'Submit + Get Your Quote'}
              </button>
              <span style={{color:MUTED,fontSize:13,fontWeight:300}}>
                Or call us: <a href="tel:01727229040" style={{color:G,textDecoration:'none',fontWeight:500}}>01727 229040</a>
              </span>
            </div>
            <p style={{color:MUTED,fontSize:12,fontWeight:300,marginTop:4}}>We will respond within 48 hours. No obligation, no hard sell.</p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background:BLACK,borderTop:`1px solid ${BORDER}`,padding:mobile?'48px 24px 32px':'56px 80px 36px'}}>
        <div style={{display:'grid',gridTemplateColumns:mobile?'1fr':'2fr 1fr 1fr',gap:mobile?32:60,marginBottom:36}}>
          <div>
            <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:20,letterSpacing:'0.07em',marginBottom:6}}>UK <span style={{color:G}}>POWER</span> CONNECTIONS</div>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:G,letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:14}}>EV Infrastructure Division</div>
            <p style={{color:MUTED,fontSize:13,lineHeight:1.75,maxWidth:280,marginBottom:16}}>NERS-accredited ICP delivering end-to-end EV charging infrastructure for local authorities and commercial sites.</p>
            {['4-6 Spicer Street, St Albans, AL3 4PQ','01727 229040','projects@ukpowerconnections.com'].map((c,i)=>(
              <div key={i} style={{color:MUTED,fontSize:12,marginBottom:4}}>{c}</div>
            ))}
          </div>
          <div>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'0.14em',textTransform:'uppercase',color:G,marginBottom:16}}>EV Services</div>
            <div style={{display:'flex',flexDirection:'column',gap:10}}>
              {['On-Street Charging','Car Park Hubs','Depot + Fleet','Substation Build','Network Design'].map(l=>(
                <a key={l} href="#your-ev-needs" style={{color:MUTED,textDecoration:'none',fontSize:13}}>{l}</a>
              ))}
            </div>
          </div>
          <div>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'0.14em',textTransform:'uppercase',color:G,marginBottom:16}}>Quick Links</div>
            <div style={{display:'flex',flexDirection:'column',gap:10}}>
              {['How It Works','Why Us','Request a Quote','Main Site'].map((l,i)=>(
                <a key={l} href={i===3?'#':'#'+l.toLowerCase().replace(/ /g,'-')} style={{color:MUTED,textDecoration:'none',fontSize:13}}>{l}</a>
              ))}
            </div>
          </div>
        </div>
        <div style={{paddingTop:24,borderTop:`1px solid ${BORDER}`,display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems:'center',gap:12}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:MUTED,letterSpacing:'0.08em'}}>2025 UK Power Connections Ltd. All rights reserved.</div>
          <div style={{display:'flex',gap:20}}>
            {['Privacy Policy','Terms','Main Site'].map(l=><a key={l} href="#" style={{fontSize:11,color:MUTED,textDecoration:'none'}}>{l}</a>)}
          </div>
        </div>
      </footer>
    </div>
  );
}
