(function(){
  const loginForm = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const loginError = document.getElementById('loginError');
  const passwordToggle = document.getElementById('passwordToggle');

  passwordToggle.addEventListener('click',()=>{
    const showingPassword = passwordInput.type === 'password';
    passwordInput.type = showingPassword ? 'text' : 'password';
    passwordToggle.classList.toggle('is-visible',showingPassword);
    passwordToggle.setAttribute('aria-pressed',String(showingPassword));
    passwordToggle.setAttribute('aria-label',showingPassword ? 'Hide password' : 'Show password');
    passwordInput.focus();
  });

  [usernameInput,passwordInput].forEach(input=>{
    input.addEventListener('input',()=>{ loginError.hidden=true; });
  });

  loginForm.addEventListener('submit',event=>{
    event.preventDefault();

    if(usernameInput.value === 'btv-editor' && passwordInput.value === 'btv@1234'){
      sessionStorage.setItem('btvEditorAuthenticated','true');
      window.location.replace('editor.html');
      return;
    }

    loginError.hidden = false;
    passwordInput.value = '';
    passwordInput.focus();
  });
})();