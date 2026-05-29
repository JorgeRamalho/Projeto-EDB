/**
 * English de Boteco — script principal
 * Menu, scroll, animações, formulário de cadastro
 */

(function () {
  'use strict';

  const BRAND_NAME = 'English de Boteco';
  const STORAGE_KEY = 'edb-cadastros';

  /* —— Header —— */
  const header = document.querySelector('.header');
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');

  function initHeader() {
    if (!header) return;

    window.addEventListener(
      'scroll',
      () => {
        header.classList.toggle('header--scrolled', window.scrollY > 48);
      },
      { passive: true }
    );

    if (burger && nav) {
      burger.addEventListener('click', () => {
        const open = nav.classList.toggle('header__nav--open');
        burger.classList.toggle('is-active', open);
        burger.setAttribute('aria-expanded', String(open));
        burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
      });

      nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
      });
    }
  }

  function closeMenu() {
    if (!nav || !burger) return;
    nav.classList.remove('header__nav--open');
    burger.classList.remove('is-active');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Abrir menu');
  }

  /* —— Animações ao rolar —— */
  function initReveal() {
    const items = document.querySelectorAll('[data-reveal]');
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    items.forEach((el) => observer.observe(el));
  }

  /* —— Validação do formulário —— */
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

  function getFormValues(form) {
    return {
      nome: form.nome.value,
      dataNascimento: form.dataNascimento.value,
      cidade: form.cidade.value,
      telefone: form.telefone.value,
      email: form.email.value,
      endereco: form.endereco.value,
    };
  }

  function showFieldError(form, name, message) {
    const field = form.querySelector(`[data-field="${name}"]`);
    if (!field) return;
    const errorEl = field.querySelector('.form-error');
    field.classList.toggle('form-field--error', Boolean(message));
    if (errorEl) {
      errorEl.textContent = message || '';
      errorEl.hidden = !message;
    }
  }

  function clearErrors(form) {
    form.querySelectorAll('[data-field]').forEach((field) => {
      field.classList.remove('form-field--error');
      const errorEl = field.querySelector('.form-error');
      if (errorEl) {
        errorEl.textContent = '';
        errorEl.hidden = true;
      }
    });
  }

  function showSuccess() {
    const section = document.getElementById('cadastro');
    const formWrap = section?.querySelector('.register__inner');
    const success = section?.querySelector('.register__success');
    section?.classList.add('register--success');
    if (formWrap) formWrap.hidden = true;
    if (success) success.hidden = false;
    success?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function resetFormView() {
    const section = document.getElementById('cadastro');
    const formWrap = section?.querySelector('.register__inner');
    const success = section?.querySelector('.register__success');
    const form = document.getElementById('form-cadastro');
    section?.classList.remove('register--success');
    if (formWrap) formWrap.hidden = false;
    if (success) success.hidden = true;
    if (form) {
      form.reset();
      clearErrors(form);
    }
  }

  function initForm() {
    const form = document.getElementById('form-cadastro');
    if (!form) return;

    const telefoneInput = form.telefone;

    telefoneInput?.addEventListener('input', (e) => {
      e.target.value = formatPhone(e.target.value);
    });

    form.querySelectorAll('input').forEach((input) => {
      input.addEventListener('blur', () => {
        const values = getFormValues(form);
        const errors = validate(values);
        showFieldError(form, input.name, errors[input.name] || '');
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const values = getFormValues(form);
      const errors = validate(values);
      const names = ['nome', 'dataNascimento', 'cidade', 'telefone', 'email', 'endereco'];

      clearErrors(form);
      names.forEach((name) => showFieldError(form, name, errors[name] || ''));

      if (Object.keys(errors).length > 0) return;

      const btn = form.querySelector('.register__btn');
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Enviando...';
      }

      const payload = {
        ...values,
        telefone: values.telefone.replace(/\D/g, ''),
        cadastradoEm: new Date().toISOString(),
      };

      try {
        const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        existing.push(payload);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
      } catch {
        /* storage indisponível */
      }

      setTimeout(() => {
        if (btn) {
          btn.disabled = false;
          btn.textContent = 'Quero concorrer ao ingresso free';
        }
        showSuccess();
      }, 800);
    });

    document.getElementById('btn-novo-cadastro')?.addEventListener('click', resetFormView);
  }

  /* —— Inicialização —— */
  document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initReveal();
    initForm();
    document.title = document.title || `${BRAND_NAME} | Lançamento Oficial`;
  });
})();
