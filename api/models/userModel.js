const mongoose = require('mongoose');
const validator = require('validator');

const userModel = mongoose.model('User', {
    firstname: {
        type: String,
        required: true,
        validate: {
            validator(firstName) {
                 return validator.isAlphanumeric(firstName);
            },
        },
    },
    secondName: {
        type: String,
        required: true,
        validate: {
            validator(secondName) {
                return validator.isAlphanumeric(secondName);
            },
        },
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator(email) {
                return validator.isEmail(email);
            },
        },
    },
    //TODO encryption goes in the schema see https://www.mongodb.com/blog/post/password-authentication-with-mongoose-part-1
    password: {
        type: string,
        required: true
    },
    displayName: {
        type: String,
        required: true,
        validate: {
            validator(displayName) {
                return validator.isAlphanumeric(displayName);
            }
        }
    },
    address: {
        line1: {
            type: String,
            validate: {
                validator(line1) {
                    return validator.isAlphanumeric(line1)
                }
            }
        },
        line2: {
            type: String,
            validate: {
                validator(line2) {
                    return validator.isAlphanumeric(line2)
                }
            }
        },
        line3: {
            type: String,
            validate: {
                validator(line3) {
                    return validator.isAlphanumeric(line3)
                }
            }
        },
        line4: {
            type: String,
            validate: {
                validator(line4) {
                    return validator.isAlphanumeric(line4)
                }
            }
        },
        country: {
            type: String,
            validate: {
                validator(country) {
                    return validator.isISO31661Alpha2(country)
                }
            }
        },
        postcode: {
            type: String,
            validate: {
                validator(postcode) {
                    return validator.isPostalCode(postcode, 'any')
                }
            }
        }
    },
    beebaseDetails: {
        username: {
            type: String,
            validate: {
                validator(username) {
                    return validator.isAlphanumeric(username)
                }
            }
        },
        password: {
            type: String,
            validate: {
                validator(password) {
                    return validator.isAlphanumeric(password)
                }
            }
        }
    }
});
