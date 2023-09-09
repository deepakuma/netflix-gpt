export const checkValidationData = ({email, password, name}) =>{
    const isEmailValid = email && /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/.test(email);
    const isPasswordValid = password && /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);
    const isNameValid = name && /^[A-Za-z\s'-]+$/.test(name);

    if(name && !isNameValid) return "Please enter a valid full name";
    if(email && !isEmailValid) return "Email is not valid!";
    if(password && !isPasswordValid) return "Password is not valid!";

    return null;
} 