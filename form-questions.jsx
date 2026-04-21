// Individual question renderers
const { useState } = React;

function QuestionBlock({ q, idx, value, onChange, error }) {
  return (
    <div className={`q ${error ? 'nudge' : ''}`}>
      <div className="q-head">
        <div className="q-num">{String(idx + 1).padStart(2, '0')}</div>
        <div className="q-body">
          <div className="q-prompt">{q.prompt}</div>
          {q.help && <div className="q-help">{q.help}</div>}
          <div className="q-input">
            <QuestionInput q={q} value={value} onChange={onChange} />
          </div>
          {error && <div className="error-note">{error}</div>}
        </div>
      </div>
    </div>
  );
}

function QuestionInput({ q, value, onChange }) {
  if (q.kind === 'single') {
    return (
      <div className="choices" role="radiogroup">
        {q.options.map(opt => (
          <button
            key={opt}
            type="button"
            role="radio"
            aria-checked={value === opt}
            className={`choice ${value === opt ? 'selected' : ''}`}
            onClick={() => onChange(opt)}
          >
            <span className="marker" aria-hidden="true"></span>
            <span className="label">{opt}</span>
          </button>
        ))}
      </div>
    );
  }

  if (q.kind === 'multi') {
    const arr = Array.isArray(value) ? value : [];
    const toggle = (opt) => {
      if (opt === 'None of the above') {
        onChange(arr.includes(opt) ? [] : [opt]);
        return;
      }
      const without = arr.filter(x => x !== 'None of the above');
      onChange(without.includes(opt) ? without.filter(x => x !== opt) : [...without, opt]);
    };
    return (
      <div className="choices">
        {q.options.map(opt => (
          <button
            key={opt}
            type="button"
            role="checkbox"
            aria-checked={arr.includes(opt)}
            className={`choice multi ${arr.includes(opt) ? 'selected' : ''}`}
            onClick={() => toggle(opt)}
          >
            <span className="marker" aria-hidden="true"></span>
            <span className="label">{opt}</span>
          </button>
        ))}
      </div>
    );
  }

  if (q.kind === 'text') {
    const v = value || '';
    return (
      <>
        <textarea
          className="text-area"
          rows={q.rows || 4}
          placeholder={q.placeholder || ''}
          maxLength={q.maxLength || 2000}
          value={v}
          onChange={e => onChange(e.target.value)}
        />
        {q.maxLength && (
          <div className="char-count">{v.length} / {q.maxLength}</div>
        )}
      </>
    );
  }

  if (q.kind === 'url') {
    return (
      <input
        type="url"
        className="text-input"
        placeholder={q.placeholder || ''}
        value={value || ''}
        onChange={e => onChange(e.target.value)}
      />
    );
  }

  return null;
}

// Contact fields section
function ContactFields({ answers, onChange, errors }) {
  const fields = [
    { id: 'fullName', label: 'Full name', type: 'text', placeholder: 'First and last', required: true },
    { id: 'phone', label: 'Phone number', type: 'tel', placeholder: '(555) 555-5555', required: true },
    { id: 'email', label: 'Email address', type: 'email', placeholder: 'you@example.com', required: true },
    { id: 'years', label: 'Years of experience', type: 'number', placeholder: 'e.g. 7', required: true, min: 0, max: 60 }
  ];
  return (
    <div className="contact-grid">
      {fields.map(f => (
        <div className="field" key={f.id}>
          <label>
            {f.label}
            {f.required && <span className="required-star">*</span>}
          </label>
          <input
            type={f.type}
            className={`text-input ${errors[f.id] ? 'nudge' : ''}`}
            placeholder={f.placeholder}
            value={answers[f.id] || ''}
            min={f.min}
            max={f.max}
            onChange={e => onChange(f.id, e.target.value)}
          />
          {errors[f.id] && <div className="error-note">{errors[f.id]}</div>}
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { QuestionBlock, ContactFields });
