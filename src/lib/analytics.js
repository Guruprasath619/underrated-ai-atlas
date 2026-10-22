export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined') return;

  const payload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...params,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  try {
    const previous = JSON.parse(window.localStorage.getItem('atlas-analytics-events') || '[]');
    const next = [...previous, payload].slice(-100);
    window.localStorage.setItem('atlas-analytics-events', JSON.stringify(next));
  } catch (error) {
    // Ignore localStorage failures in private browsing / restricted contexts.
  }
}

export function initAnalytics() {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  if (!document.getElementById('gtag-script')) {
    const script = document.createElement('script');
    script.id = 'gtag-script';
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    document.head.appendChild(script);

    const inline = document.createElement('script');
    inline.id = 'gtag-init';
    inline.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX', { send_page_view: false });
    `;
    document.head.appendChild(inline);
  }
}
