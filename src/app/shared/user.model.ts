export class User {
    public firstname: string;
    public lastname: string;
    public email: string;
    public phone: string;
    public role: string;
    constructor(firstname: string, lastname: string, email: string, phone: string, role: string) {
        this.firstname = firstname,
            this.lastname = lastname,
            this.email = email,
            this.phone = phone,
            this.role = role
    }
}