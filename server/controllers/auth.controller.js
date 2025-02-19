class AuthController {
    constructor() {
        this.redirectUrl =
            process.env.REDIRECT_IF_SUCCESS || 'http://localhost:3000';
    }

    handleSteamAuth(req, res) {
        this.redirectToSuccess(res);
    }

    getCurrentUser(req, res) {
        if (!this.isAuthenticated(req)) {
            return res.status(401).json({ error: 'Not authenticated' });
        }
        return res.json(req.user);
    }

    // eslint-disable-next-line class-methods-use-this
    isAuthenticated(req) {
        return req.user !== undefined;
    }

    logoutUser(req, res) {
        req.logout((err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to log out' });
            }
            return this.redirectToSuccess(res);
        });
    }

    redirectToSuccess(res) {
        res.redirect(this.redirectUrl);
    }
}

module.exports = new AuthController();
