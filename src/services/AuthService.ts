export class AuthService{

    private isAuthenticated = false;
    private jwt= null;

    constructor() {
        this.isAuthenticated = false;
        this.jwt = null;
    }
    
    async login(username: string, password: string) {
        // Simulate an API call for authentication
        if (username === 'user' && password === 'pass') {
            this.isAuthenticated = true;
            return Promise.resolve({ success: true, mesaje: 'Login successful', token: 'fake-jwt-token' });
        } else {
            return Promise.reject({ success: false, message: 'Invalid credentials' });
        }
    }
    
    logout() {
        this.isAuthenticated = false;
        return Promise.resolve({ success: true });
    }
    
    checkAuthStatus() {
        return this.isAuthenticated;
    }

    testCall() {
        console.log("AuthService testAuth called");
    }
}

export default new AuthService();