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

  const inputClass = 'w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/24 focus:border-cyan/45 focus:bg-black/30';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-semibold text-white/58">Your name</span>
          <input className={inputClass} type="text" name="name" autoComplete="name" placeholder="Gokul Kartha" required />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-semibold text-white/58">Work email</span>
          <input className={inputClass} type="email" name="email" autoComplete="email" placeholder="you@company.com" required />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-semibold text-white/58">Company or project</span>
          <input className={inputClass} type="text" name="company" placeholder="Project name" />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-semibold text-white/58">Area of interest</span>
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
        <span className="mb-2 block text-xs font-semibold text-white/58">What are you trying to build or improve?</span>
        <textarea
          className={`${inputClass} min-h-36 resize-y`}
          name="message"
          placeholder="A few honest sentences are enough. Tell us about the problem, the users and where things currently stand."
          required
        />
      </label>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#dffdf8]"
      >
        Prepare email <ArrowUpRight className="h-4 w-4" />
      </button>

      {submitted && (
        <p className="flex items-center gap-2 text-xs text-cyan/80">
          <CheckCircle2 className="h-4 w-4" /> Your email app should open with the message prepared.
        </p>
      )}
      <p className="text-[11px] leading-5 text-white/30">
        This form opens a prefilled email in your mail app. Third Leap Labs will never ask for seed phrases, private keys or wallet recovery phrases.
      </p>
    </form>
  );
};
