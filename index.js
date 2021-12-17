function login(params) {
    const { email, password } = params;
    localStorage.setItem("login", JSON.stringify({ email, password }));
}

function getUserInfor(params) {
    const { email, password } = params;
    const users = JSON.parse(localStorage.getItem("information") || '[]');
    const user = [...users].filter((user) => user.email === email && user.password === password);
    return user[0];
    // { lastName, firstName, phoneNumber, email, password } format data user
}

function logout() {
    localStorage.removeItem("login");
}

function register(params) {
    const { lastName, firstName, phoneNumber, email, password } = params;
    if (!(lastName && firstName && phoneNumber && email && password)) {
        alert("Ban hay nhap day du thong tin");
    }
    const users = JSON.parse(localStorage.getItem("information") || '[]');
    [...users].map((user) => {
        if (user.email === email) {
            alert("Email da ton tai");
        }
    })
    const json = [...users, { lastName, firstName, phoneNumber, email, password }];
    localStorage.setItem("information", JSON.stringify(json));
}

function clearUsers() {
    localStorage.removeItem("information");
}