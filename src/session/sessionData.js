class sessionData {
    static userName = null;
    static authToken = null;

    static getUserName = () => {
        return (this.userName == null) ? "Not Signed In" : this.userName;
    }

    static setNewUser = (newUser, token) => {
        if ((newUser != null && newUser.length > 0) &&
            (token != null && token.length > 0)) {
            this.userName = newUser;
            this.authToken = token;
        }
    }
}

export default sessionData;