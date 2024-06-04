interface FormData { 
	first_name?: string;
	last_name?: string;
	email?: string;
	phone_number?: string;
	message?: string;
}

interface Errors { 
	first_name?: string;
	last_name?: string;
	email?: string;
	phone_number?: string;
	message?: string;
}

export const validateContactForm = (formData : FormData) : Errors => {
    let errors : Errors = {};

    if (!formData.first_name) {
      errors.first_name = 'First name is required';
    }

    if (!formData.last_name) {
      errors.last_name = 'Last name is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if(!formData.phone_number) {
        errors.phone_number = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone_number)) {
        errors.phone_number = 'Phone number is invalid';
    }

    if (!formData.message) {
      errors.message = 'Message is required';
    }

    //
    //if(!formData.agree) {
    //  errors.agree = 'Above agreement is required';
    //}

    return errors;
};