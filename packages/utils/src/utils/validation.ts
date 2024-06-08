/**
 * Represents FormData
 */
interface FormData { 
	/**
	 * The first name submitted
	 */
	first_name?: string;
	/**
	 * The last name submitted
	 */
	last_name?: string;
	/**
	 * The email submitted
	 */
	email?: string;
	/**
	 * The phone number submitted
	 */	
	phone_number?: string;
	/**
	 * The message submitted
	 */ 
	message?: string;
}

/**
 * Represents Error Messages
 */ 
interface Errors { 
	/**
	 * The first name error message
	 */
	first_name?: string;
	/**
	 * The last name error message
	 */
	last_name?: string;
	/**
	 * The email error message
	 */
	email?: string;
	/**
	 * The phone number error message
	 */	
	phone_number?: string;
	/**
	 * The message error message
	 */ 
	message?: string;
}


/**
 * validateContactForm - Takes user data and validates contact form
 * @param {FormData} formdata - takes formdata
 * @returns {Errors}
 */
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

    return errors;
};


/**
 * validateEmail - validate email
 * @param {string} email
 * @returns {boolean}
 */
export const validateEmail = (email: string): boolean => {
	if (!email) 
		return false;
	else if (!/\S+@\S+\.\S+/.test(email)) 
		return false;
	else 
		return true;
}  


/**
 * validatePassword - validate password with given regex
 * @param {string} password 
 * @param {RegExp} regex 
 * @returns {boolean}
 */
export const validatePassword = (password: string, regex: RegExp): boolean => {
	if (!password)
		return false;
	else if(!regex.test(password))
		return false;
	else
		return true;
}


/**
 * validatePhoneNumber - validate phone number
 * @param {string} phoneNumber 
 * @returns {boolean}
 */
export const validatePhoneNumber = (phoneNumber: string): boolean => {
	if (!phoneNumber)
		return false;
	else if(!/^\d{10}$/.test(phoneNumber))
		return false;
	else
		return true;
}
	