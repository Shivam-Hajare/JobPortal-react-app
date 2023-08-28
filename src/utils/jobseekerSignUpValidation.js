const validateForm = (formData) => {

    const newErrors = {};
    let isValid = true;

    if (!formData.email || formData.email.trim() === "") {
        newErrors.email = 'Email is required';
        isValid = false;
    }
    if (!formData.firstName || formData.firstName.trim() === "") {
        newErrors.firstName = 'First name is required';
        isValid = false;
    }
    if (!formData.lastName || formData.lastName.trim() === "") {
        newErrors.lastName = 'Last name is required';
        isValid = false;
    }
    if ( formData.yearOfExperience != undefined && formData.yearOfExperience != 0 && !formData.yearOfExperience) {
        newErrors.yearOfExperience = 'Year of Experience is required';
        isValid = false;
    }
    if (formData?.yearOfExperience < 0) {
        newErrors.yearOfExperience = 'Year of Experience cannot be negative';
        isValid = false;
    }
    if (!formData.firstName || formData.firstName.length < 4) {
        newErrors.firstName = 'First name should be at least 4 characters long';
        isValid = false;
    }

    return { newErrors:newErrors, isValid:isValid }
};

export default validateForm;