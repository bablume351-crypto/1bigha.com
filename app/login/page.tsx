'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, LockKeyhole, ShieldCheck } from 'lucide-react';

export default function LoginPage(){
 const [sent,setSent]=useState(false);
 const [done,setDone]=useState(false);
 const [mobile,setMobile]=useState('');
 const [otp,setOtp]=useState('');
 const send=()=>{if(/^\d{10}$/.test(mobile)) setSent(true);};
 const verify=()=>{if(/^\d{6}$/.test(otp)) setDone(true);};
 return <main className="login-page"><div className="login-shell"><Link href="/" className="login-brand"><img src="/1bigha-logo.png" alt="1Bigha"/></Link><div className="login-card"><div className="login-icon"><ShieldCheck size={24}/></div><h1>{done?'Welcome to 1Bigha':'Login / Sign up'}</h1><p className="muted">{done?'Your mobile verification screen is ready.':'Use your mobile number to continue.'}</p>{done?<div className="login-success"><b>✓ Mobile verified</b><span>{mobile.replace(/(\d{2})\d{6}(\d{2})/,'$1******$2')}</span><Link href="/" className="login-button">Continue <ArrowRight size={17}/></Link></div>:!sent?<div className="login-form"><label>Mobile number</label><div className="mobile-input"><span>+91</span><input value={mobile} onChange={e=>setMobile(e.target.value.replace(/\D/g,'').slice(0,10))} inputMode="numeric" placeholder="10-digit mobile number"/></div><button type="button" className="login-button" onClick={send} disabled={mobile.length!==10}>Send OTP <ArrowRight size={17}/></button></div>:<div className="login-form"><label>Enter OTP</label><div className="mobile-input"><LockKeyhole size={18}/><input value={otp} onChange={e=>setOtp(e.target.value.replace(/\D/g,'').slice(0,6))} inputMode="numeric" placeholder="6-digit OTP" autoFocus/></div><button type="button" className="login-button" onClick={verify} disabled={otp.length!==6}>Verify & Continue <ArrowRight size={17}/></button><button type="button" className="resend" onClick={()=>setSent(false)}>Change mobile number</button></div>}<p className="login-note">Production SMS/OTP provider will be connected before launch.</p></div></div></main>
}
