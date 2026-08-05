import { useState, type FormEvent } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const company = String(data.get('company') || '');
    const interest = String(data.get('interest') || '');
    const message = String(data.get('message') || '');

    const subject = encodeURIComponent(`Third Leap Labs enquiry — ${interest || 'New project'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany / project: ${company}\nArea of interest: ${interest}\n\n${message}`,
    );

    setSubmitted(true);
    window.location.href = `mailto:info@thirdleaplabs.com?subject=${subject}&body=${body}`;
  };

  const inputClass = 'w-full rounded-xl border border-black/10 bg-[#f7f9fb] px-4 py-3.5 text-sm text-[#07111f] outline-none transition placeholder:text-[#9ca3af] focus:border-[#1d9bf0] focus:bg-white focus:shadow-[0_0_0_4px_rgba(29,155,240,.08)]';
  const labelClass = 'mb-2 block text-xs font-semibold text-[#4b5563]';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>Your name</span>
          <input className={inputClass} type="text" name="name" autoComplete="name" placeholder="Your name" required />
        </label>
        <label className="block">
          <span className={labelClass}>Work email</span>
          <input className={inputClass} type="email" name="email" autoComplete="email" placeholder="you@company.com" required />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>Company or project</span>
          <input className={inputClass} type="text" name="company" placeholder="Project name" />
        </label>
        <label className="block">
          <span className={labelClass}>Area of interest</span>
          <select className={inputClass} name="interest" defaultValue="Product engineering">
            <option>Artificial intelligence</option>
            <option>Computer vision</option>
            <option>Web3</option>
            <option>Open source</option>
            <option>Product engineering</option>
            <option>Partnership</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <label className="block">
        <span className={labelClass}>What are you trying to build or improve?</span>
        <textarea
          className={`${inputClass} min-h-40 resize-y`}
          name="message"
          placeholder="Tell us about the users, the problem, what already exists and where the work is getting difficult."
          required
        />
      </label>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#07111f] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#1d9bf0]"
      >
        Prepare email <ArrowUpRight className="h-4 w-4" />
      </button>

      {submitted && (
        <p className="flex items-center gap-2 text-xs text-[#0b7dbd]">
          <CheckCircle2 className="h-4 w-4" /> Your email app should open with the message prepared.
        </p>
      )}
      <p className="text-[11px] leading-5 text-[#9ca3af]">
        This form opens a prefilled email in your mail app. Third Leap Labs will never ask for seed phrases, private keys or wallet recovery phrases.
      </p>
    </form>
  );
};
