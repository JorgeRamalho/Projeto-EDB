import { useState } from 'react';
import BrandLogo from './BrandLogo';
import { BRAND } from '../constants/brand';
import './RegistrationForm.css';

const INITIAL = {
  nome: '',
  dataNascimento: '',
  cidade: '',
  telefone: '',
  email: '',
  endereco: '',
};

function validate(values) {
  const errors = {};

  if (!values.nome.trim()) {
    errors.nome = 'Informe seu nome completo.';
  } else if (values.nome.trim().length < 3) {
    errors.nome = 'Nome deve ter pelo menos 3 caracteres.';
  }

  if (!values.dataNascimento) {
    errors.dataNascimento = 'Informe sua data de nascimento.';
  } else {
    const birth = new Date(values.dataNascimento);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age -= 1;
    if (age < 16) errors.dataNascimento = 'É necessário ter pelo menos 16 anos.';
    if (age > 120) errors.dataNascimento = 'Data de nascimento inválida.';
  }

  if (!values.cidade.trim()) {
    errors.cidade = 'Informe sua cidade.';
  }

  const phoneDigits = values.telefone.replace(/\D/g, '');
  if (!phoneDigits) {
    errors.telefone = 'Informe seu telefone.';
  } else if (phoneDigits.length < 10 || phoneDigits.length > 11) {
    errors.telefone = 'Telefone deve ter 10 ou 11 dígitos (com DDD).';
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!values.email.trim()) {
    errors.email = 'Informe seu e-mail.';
  } else if (!emailRe.test(values.email.trim())) {
    errors.email = 'E-mail inválido.';
  }

  if (!values.endereco.trim()) {
    errors.endereco = 'Informe seu endereço completo.';
  } else if (values.endereco.trim().length < 8) {
    errors.endereco = 'Endereço muito curto. Inclua rua, número e bairro.';
  }

  return errors;
}

function formatPhone(value) {
  const d = value.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d ? `(${d}` : '';
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export default function RegistrationForm() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const next = name === 'telefone' ? formatPhone(value) : value;
    setValues((prev) => {
      const updated = { ...prev, [name]: next };
      if (touched[name]) {
        const nextErrors = validate(updated);
        setErrors((errs) => {
          const copy = { ...errs };
          delete copy[name];
          if (nextErrors[name]) copy[name] = nextErrors[name];
          return copy;
        });
      }
      return updated;
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const allErrors = validate(values);
    if (allErrors[name]) {
      setErrors((prev) => ({ ...prev, [name]: allErrors[name] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allErrors = validate(values);
    setErrors(allErrors);
    setTouched({
      nome: true,
      dataNascimento: true,
      cidade: true,
      telefone: true,
      email: true,
      endereco: true,
    });

    if (Object.keys(allErrors).length > 0) return;

    setLoading(true);

    const payload = {
      ...values,
      telefone: values.telefone.replace(/\D/g, ''),
      cadastradoEm: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem('edb-cadastros') || '[]');
      existing.push(payload);
      localStorage.setItem('edb-cadastros', JSON.stringify(existing));
    } catch {
      /* storage indisponível */
    }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setValues(INITIAL);
      setTouched({});
      setErrors({});
    }, 800);
  };

  if (submitted) {
    return (
      <section id="cadastro" className="register register--success">
        <div className="register__success-card" data-reveal>
          <BrandLogo size="lg" className="register__success-logo" />
          <h2>Cadastro realizado!</h2>
          <p>
            Você está concorrendo aos <strong>ingressos gratuitos</strong> do lançamento{' '}
            {BRAND.name}. Em breve entraremos em contato pelo e-mail informado.
          </p>
          <button
            type="button"
            className="register__btn"
            onClick={() => setSubmitted(false)}
          >
            Novo cadastro
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="cadastro" className="register" aria-labelledby="register-title">
      <div className="register__inner">
        <div className="register__info" data-reveal="left">
          <span className="section-label section-label--light">Ingressos free</span>
          <h2 id="register-title" className="register__title">
            Cadastre-se e concorra
          </h2>
          <p>
            Preencha o formulário com seus dados. Os <strong>50 primeiros cadastros
            válidos</strong> participam do sorteio de ingressos para a noite de
            lançamento.
          </p>
          <ul className="register__perks">
            <li>Entrada gratuita no evento</li>
            <li>Kit boas-vindas English de Boteco</li>
            <li>Acesso antecipado às turmas</li>
          </ul>
        </div>

        <form
          className="register__form"
          onSubmit={handleSubmit}
          noValidate
          data-reveal
        >
          <div className="form-row">
            <div className={`form-field ${errors.nome && touched.nome ? 'form-field--error' : ''}`}>
              <label htmlFor="nome">Nome completo</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={values.nome}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Seu nome"
                autoComplete="name"
                aria-invalid={!!errors.nome && touched.nome}
                aria-describedby={errors.nome ? 'nome-error' : undefined}
              />
              {errors.nome && touched.nome && (
                <span id="nome-error" className="form-error" role="alert">
                  {errors.nome}
                </span>
              )}
            </div>
          </div>

          <div className="form-row form-row--2">
            <div
              className={`form-field ${errors.dataNascimento && touched.dataNascimento ? 'form-field--error' : ''}`}
            >
              <label htmlFor="dataNascimento">Data de nascimento</label>
              <input
                type="date"
                id="dataNascimento"
                name="dataNascimento"
                value={values.dataNascimento}
                onChange={handleChange}
                onBlur={handleBlur}
                max={new Date().toISOString().split('T')[0]}
                aria-invalid={!!errors.dataNascimento && touched.dataNascimento}
                aria-describedby={errors.dataNascimento ? 'data-error' : undefined}
              />
              {errors.dataNascimento && touched.dataNascimento && (
                <span id="data-error" className="form-error" role="alert">
                  {errors.dataNascimento}
                </span>
              )}
            </div>

            <div className={`form-field ${errors.cidade && touched.cidade ? 'form-field--error' : ''}`}>
              <label htmlFor="cidade">Cidade</label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                value={values.cidade}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Sua cidade"
                autoComplete="address-level2"
                aria-invalid={!!errors.cidade && touched.cidade}
                aria-describedby={errors.cidade ? 'cidade-error' : undefined}
              />
              {errors.cidade && touched.cidade && (
                <span id="cidade-error" className="form-error" role="alert">
                  {errors.cidade}
                </span>
              )}
            </div>
          </div>

          <div className="form-row form-row--2">
            <div
              className={`form-field ${errors.telefone && touched.telefone ? 'form-field--error' : ''}`}
            >
              <label htmlFor="telefone">Telefone</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={values.telefone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="(00) 00000-0000"
                autoComplete="tel"
                inputMode="numeric"
                aria-invalid={!!errors.telefone && touched.telefone}
                aria-describedby={errors.telefone ? 'tel-error' : undefined}
              />
              {errors.telefone && touched.telefone && (
                <span id="tel-error" className="form-error" role="alert">
                  {errors.telefone}
                </span>
              )}
            </div>

            <div className={`form-field ${errors.email && touched.email ? 'form-field--error' : ''}`}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="seu@email.com"
                autoComplete="email"
                aria-invalid={!!errors.email && touched.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && touched.email && (
                <span id="email-error" className="form-error" role="alert">
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div
              className={`form-field ${errors.endereco && touched.endereco ? 'form-field--error' : ''}`}
            >
              <label htmlFor="endereco">Endereço</label>
              <input
                type="text"
                id="endereco"
                name="endereco"
                value={values.endereco}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Rua, número, bairro, CEP"
                autoComplete="street-address"
                aria-invalid={!!errors.endereco && touched.endereco}
                aria-describedby={errors.endereco ? 'endereco-error' : undefined}
              />
              {errors.endereco && touched.endereco && (
                <span id="endereco-error" className="form-error" role="alert">
                  {errors.endereco}
                </span>
              )}
            </div>
          </div>

          <p className="register__legal">
            Ao enviar, você concorda em receber comunicações sobre o evento English de
            Boteco. Seus dados são usados apenas para o sorteio de ingressos.
          </p>

          <button type="submit" className="register__btn" disabled={loading}>
            {loading ? 'Enviando...' : 'Quero concorrer ao ingresso free'}
          </button>
        </form>
      </div>
    </section>
  );
}
