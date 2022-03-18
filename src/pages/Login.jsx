function Login() {
  return (
    <main className="form-signin">
      <form>
        <h1 className="h3 mb-3 fw-normal">Login</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email:</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="senha"
            placeholder="Password"
          />
          <label for="floatingPassword">Senha</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Lembrar-me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Entrar
        </button>
      </form>
    </main>
  );
}

export default Login;
