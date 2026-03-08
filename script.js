document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.querySelector('[data-theme-icon]');
    const nav = document.querySelector('.navbar');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelectorAll('.nav-links a');
    const heroBadgeText = document.querySelector('.hero-badge-text');

    const applyTheme = (theme) => {
        const isDark = theme !== 'light';
        root.classList.toggle('dark', isDark);
        if (themeIcon) {
            themeIcon.textContent = isDark ? '☀' : '🌙';
        }
    };

    const storedTheme = localStorage.getItem('syntax-theme');
    if (storedTheme) {
        applyTheme(storedTheme);
    } else {
        applyTheme('dark');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const nextTheme = root.classList.contains('dark') ? 'light' : 'dark';
            localStorage.setItem('syntax-theme', nextTheme);
            applyTheme(nextTheme);
        });
    }

    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('mobile-open');
        });

        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                nav.classList.remove('mobile-open');
            });
        });
    }

    // Reveal animations
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px',
        }
    );

    document
        .querySelectorAll('.cap-card, .project-card, .team-card, .process-panel')
        .forEach((el) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(18px)';
            el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
            observer.observe(el);
        });

    // Navbar scroll state
    const syncNavState = () => {
        nav.classList.toggle('scrolled', window.scrollY > 48);
    };
    window.addEventListener('scroll', syncNavState, { passive: true });
    syncNavState();

    if (heroBadgeText) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const fullText = (heroBadgeText.dataset.text || heroBadgeText.textContent || '').trim();

        if (!prefersReducedMotion && fullText) {
            let charIndex = 0;
            let isDeleting = false;

            const typeSpeed = 75;
            const deleteSpeed = 45;
            const holdAtEnd = 1300;
            const holdAtStart = 450;

            const tick = () => {
                if (!isDeleting) {
                    charIndex = Math.min(charIndex + 1, fullText.length);
                    heroBadgeText.textContent = fullText.slice(0, charIndex);

                    if (charIndex === fullText.length) {
                        isDeleting = true;
                        window.setTimeout(tick, holdAtEnd);
                        return;
                    }

                    window.setTimeout(tick, typeSpeed);
                    return;
                }

                charIndex = Math.max(charIndex - 1, 0);
                heroBadgeText.textContent = fullText.slice(0, charIndex);

                if (charIndex === 0) {
                    isDeleting = false;
                    window.setTimeout(tick, holdAtStart);
                    return;
                }

                window.setTimeout(tick, deleteSpeed);
            };

            heroBadgeText.textContent = '';
            window.setTimeout(tick, 500);
        } else {
            heroBadgeText.textContent = fullText;
        }
    }

    // Interactive Process Steps
    const processFile = document.getElementById('processFile');
    const processCode = document.getElementById('processCode');
    const processSteps = Array.from(document.querySelectorAll('.process-step[data-step]'));

    const processSnippets = {
        1: {
            file: 'audit.ts',
            code: `<span class="code-accent">const</span> discovery = <span class="code-accent">async</span> () =&gt; {\n  <span class="code-muted">// Review requirements + constraints</span>\n  await product.audit();\n  await infra.review();\n\n  <span class="code-muted">// Output: implementation blueprint</span>\n  <span class="code-accent">return</span> architecture.plan;\n};`
        },
        2: {
            file: 'sprint.ts',
            code: `<span class="code-accent">const</span> sprintCycle = <span class="code-accent">async</span> () =&gt; {\n  <span class="code-muted">// Build in 2-week milestones</span>\n  await features.implement();\n  await qa.verify();\n\n  <span class="code-muted">// Ship demo-ready increment</span>\n  <span class="code-accent">return</span> release.candidate;\n};`
        },
        3: {
            file: 'deploy.ts',
            code: `<span class="code-accent">const</span> deploySystem = <span class="code-accent">async</span> () =&gt; {\n  <span class="code-muted">// Initialize infrastructure</span>\n  await infra.provision();\n  await db.migrate();\n\n  <span class="code-muted">// Deploy to production</span>\n  <span class="code-accent">return</span> <span class="code-ok">\"System Online\"</span>;\n};`
        }
    };

    const setProcessStep = (stepId) => {
        processSteps.forEach((step) => {
            step.classList.toggle('active', step.dataset.step === stepId);
        });

        const snippet = processSnippets[stepId];
        if (!snippet || !processFile || !processCode) return;
        processFile.textContent = snippet.file;
        processCode.innerHTML = snippet.code;
    };

    processSteps.forEach((step) => {
        step.addEventListener('click', () => setProcessStep(step.dataset.step));
        step.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                setProcessStep(step.dataset.step);
            }
        });
    });
});