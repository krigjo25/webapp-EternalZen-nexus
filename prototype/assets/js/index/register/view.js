function registerView()
{
    html = /* HTML */`
        <form id="register-form" class="EZ-form">
            <h2>Register</h2>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required>
                <label for="password">Pasword</label>
                <input type="text" id="password" name="username" required>
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required>
            </div>`;
    return html;
}