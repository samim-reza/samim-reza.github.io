// Chat Widget Functionality
(function(){
  const widget = document.getElementById('chat-widget');
  const toggle = document.getElementById('chat-toggle');
  const panel = document.getElementById('chat-panel');
  const closeBtn = document.getElementById('chat-close');
  const iframe = document.getElementById('chat-iframe');

  function openChat() {
    widget.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    try { iframe.contentWindow.focus(); } catch(e){}
    localStorage.setItem('chat_open', '1');
  }
  
  function closeChat() {
    widget.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    localStorage.setItem('chat_open', '0');
  }

  toggle.addEventListener('click', function(e){
    if (widget.classList.contains('open')) closeChat(); else openChat();
  });
  
  closeBtn.addEventListener('click', closeChat);
  
  // Close when clicking outside panel
  document.addEventListener('click', function(e){
    if (!widget.contains(e.target) && widget.classList.contains('open')) closeChat();
  });
  
  // Restore previous state
  if (localStorage.getItem('chat_open') === '1') openChat();
})();

// Panel Navigation (no-scroll layout)
(function () {
  function setActivePanel(panelId) {
    const panels = document.querySelectorAll('.panel[data-panel]');
    const links = document.querySelectorAll('.sidebar-link[data-panel-target]');

    let hasMatch = false;

    panels.forEach((panel) => {
      const isTarget = panel.getAttribute('data-panel') === panelId;
      panel.classList.toggle('is-active', isTarget);
      if (isTarget) hasMatch = true;
    });

    links.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('data-panel-target') === panelId);
    });

    if (hasMatch) {
      try {
        localStorage.setItem('active_panel', panelId);
      } catch (e) {}
    }
  }

  function onPanelLinkClick(e) {
    const target = e.currentTarget.getAttribute('data-panel-target');
    if (!target) return;
    e.preventDefault();
    setActivePanel(target);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const panelLinks = document.querySelectorAll('.sidebar-link[data-panel-target]');
    panelLinks.forEach((link) => link.addEventListener('click', onPanelLinkClick));

    const actionLinks = document.querySelectorAll('[data-panel-target].btn');
    actionLinks.forEach((link) => link.addEventListener('click', onPanelLinkClick));

    let initial = 'home';
    try {
      const stored = localStorage.getItem('active_panel');
      if (stored) initial = stored;
    } catch (e) {}

    setActivePanel(initial);
  });
})();
