import React, { useEffect, useState } from 'react';
import { faDate, faNumber, normalizeName, parseNumber, type Customer } from './domain';
import { listCustomers, saveCustomer } from './storage';
import './style.css';

export function App() {
  const [name, setName] = useState('');
  const [bust, setBust] = useState('');
  const [waist, setWaist] = useState('');
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selected, setSelected] = useState<Customer | null>(null);
  const [message, setMessage] = useState('');
  const [saving, setSaving] = useState(false);
  useEffect(() => { listCustomers().then(setCustomers).catch(() => setMessage('باز کردن اطلاعات ممکن نشد. فضای ذخیره‌سازی دستگاه را بررسی کنید.')); }, []);
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const b = parseNumber(bust), w = parseNumber(waist), n = normalizeName(name);
    if (!n || b === null || w === null) { setMessage('نام و دو اندازه را با عدد بزرگ‌تر از صفر و حداکثر ۱۰۰۰ وارد کنید.'); return; }
    const customer = { id: crypto.randomUUID(), name: n, bust: b, waist: w, createdAt: new Date().toISOString() };
    setSaving(true);
    try {
      await saveCustomer(customer); setCustomers(await listCustomers()); setSelected(customer);
      setName(''); setBust(''); setWaist(''); setMessage('اطلاعات نمونه در همین دستگاه ذخیره شد.');
    } catch { setMessage('ذخیره نشد. فضای ذخیره‌سازی دستگاه را بررسی کنید.'); }
    finally { setSaving(false); }
  }
  return <div className="shell"><header><div className="brand">✂ <span>TailorCore</span></div><span className="badge">نسخه آزمایشی</span></header>
    <main><section className="hero"><p className="eyebrow">دفتر ساده خیاطی</p><h1>از یک اندازه خوب<br/>شروع می‌شود.</h1><p>اطلاعات نمونه را وارد کنید و خلاصه اندازه‌ها را ببینید.</p></section>
      <div className="notice"><strong>فقط برای آزمایش</strong><p>اطلاعات در همین دستگاه و بدون رمزگذاری ذخیره می‌شود. لطفاً اطلاعات واقعی مشتریان را وارد نکنید. این خلاصه، الگوی برش نیست.</p></div>
      <div className="grid"><section className="card"><div className="section-head"><div><span className="step">۰۱</span><h2>ثبت مشتری نمونه</h2></div><p>اندازه‌ها به سانتی‌متر</p></div>
        <form onSubmit={submit}><label>نام مشتری<input value={name} onChange={e => setName(e.target.value)} placeholder="مثلاً مشتری نمونه" maxLength={120} /></label>
        <div className="fields"><label>دور سینه<input inputMode="decimal" value={bust} onChange={e => setBust(e.target.value)} placeholder="مثلاً ۹۲" /></label><label>دور کمر<input inputMode="decimal" value={waist} onChange={e => setWaist(e.target.value)} placeholder="مثلاً ۷۴" /></label></div>
        <button disabled={saving} type="submit">ذخیره و نمایش خلاصه <span>←</span></button></form>{message && <p className="message" role="status">{message}</p>}</section>
      <section className="card"><div className="section-head"><div><span className="step">۰۲</span><h2>خلاصه اندازه‌ها</h2></div><p>آماده برای مرور</p></div>
        {selected ? <div className="summary"><div className="summary-title"><div><small>مشتری</small><h3>{selected.name}</h3></div><span className="avatar">✳</span></div><div className="measure"><span>دور سینه</span><b>{faNumber(selected.bust)} <small>سانتی‌متر</small></b></div><div className="measure"><span>دور کمر</span><b>{faNumber(selected.waist)} <small>سانتی‌متر</small></b></div><p>تاریخ ثبت: {faDate(selected.createdAt)}</p><button className="secondary" onClick={() => window.print()}>چاپ خلاصه</button></div> : <div className="empty"><div className="empty-icon">✳</div><h3>هنوز خلاصه‌ای ندارید</h3><p>یک مشتری نمونه ثبت کنید یا از فهرست پایین انتخاب کنید.</p></div>}</section></div>
      <section className="card list"><div className="section-head"><div><span className="step">۰۳</span><h2>مشتریان نمونه</h2></div><p>{faNumber(customers.length)} مورد</p></div>{customers.length === 0 ? <p className="muted">هنوز مشتری نمونه‌ای ثبت نشده است.</p> : <ul>{[...customers].reverse().map(c => <li key={c.id}><button className="row" onClick={() => setSelected(c)}><span><b>{c.name}</b><small>{faDate(c.createdAt)}</small></span><span>مشاهده ←</span></button></li>)}</ul>}</section>
    </main><footer>TailorCore · ساخته شده برای شروعی دقیق‌تر</footer></div>;
}

