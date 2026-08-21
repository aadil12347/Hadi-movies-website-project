export function initSettingsModal() {
  // Read state from localStorage on initial boot
  let isLowDeviceMode = localStorage.getItem('neonflix_low_device_mode') === 'true';

  if (isLowDeviceMode) {
    document.body.classList.add('low-device-mode');
  } else {
    document.body.classList.remove('low-device-mode');
  }

  window.openSettingsModal = function() {
    let modalContainer = document.getElementById('settingsModalContainer');
    if (!modalContainer) {
      modalContainer = document.createElement('div');
      modalContainer.id = 'settingsModalContainer';
      document.body.appendChild(modalContainer);
    }

    isLowDeviceMode = localStorage.getItem('neonflix_low_device_mode') === 'true';

    modalContainer.innerHTML = `
      <div class="modal-backdrop active" id="settingsModalBackdrop">
        <div class="modal-content-box settings-modal-box">
          <button type="button" class="modal-close-btn" id="closeSettingsModalBtn" aria-label="Close Settings">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="20" width="20">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <div class="settings-header">
            <div class="settings-title-row">
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="24" width="24" style="color:var(--color-neon-red); flex-shrink:0;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <h2>Website Settings</h2>
            </div>
            <p class="settings-subtitle">Manage performance & device preferences</p>
          </div>

          <div class="settings-body">
            <div class="settings-option-card">
              <div class="option-info">
                <div class="option-title-wrap">
                  <span class="option-icon">⚡</span>
                  <span class="option-title">Low-End Device Mode (Lite Performance)</span>
                  <span class="option-badge ${isLowDeviceMode ? 'active' : ''}">${isLowDeviceMode ? 'ACTIVE' : 'OFF'}</span>
                </div>
                <p class="option-desc">
                  Disables heavy CSS blur filters, animations, and GPU shadows to make the website run ultra-fast & butter smooth on low-end / old devices.
                </p>
              </div>

              <label class="toggle-switch">
                <input type="checkbox" id="lowDeviceModeToggle" ${isLowDeviceMode ? 'checked' : ''} />
                <span class="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    `;

    const backdrop = document.getElementById('settingsModalBackdrop');
    const closeBtn = document.getElementById('closeSettingsModalBtn');
    const toggleInput = document.getElementById('lowDeviceModeToggle');

    function closeSettings() {
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
      setTimeout(() => {
        modalContainer.innerHTML = '';
      }, 300);
    }

    closeBtn.addEventListener('click', closeSettings);
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeSettings();
    });

    toggleInput.addEventListener('change', (e) => {
      const enabled = e.target.checked;
      localStorage.setItem('neonflix_low_device_mode', enabled);
      if (enabled) {
        document.body.classList.add('low-device-mode');
      } else {
        document.body.classList.remove('low-device-mode');
      }

      const badge = modalContainer.querySelector('.option-badge');
      if (badge) {
        badge.className = `option-badge ${enabled ? 'active' : ''}`;
        badge.textContent = enabled ? 'ACTIVE' : 'OFF';
      }

      let toastContainer = document.getElementById('toastContainer');
      if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toastContainer';
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
      }
      const toast = document.createElement('div');
      toast.className = 'toast-message show';
      toast.innerHTML = `<span>${enabled ? '⚡ Low-End Device Mode Enabled (Butter Smooth)' : 'Low-End Device Mode Disabled'}</span>`;
      toastContainer.appendChild(toast);
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
      }, 2500);
    });
  };
}
