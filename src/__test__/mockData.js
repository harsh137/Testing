export const validUser = {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "dob": "1995-06-15",
    "password": "SecurePass@123",
    "confirmPassword": "SecurePass@123",
    "address": "123 Main Street, New York, USA",
    "gender": "male",
    "country": "USA",
    "success": "Form submitted successfully"
  }
  ;

export const invalidUser = [
    {
      "name": "",
      "email": "john.doe@example.com",
      "dob": "1995-06-15",
      "password": "SecurePass@123",
      "confirmPassword": "SecurePass@123",
      "address": "123 Main Street, New York, USA",
      "gender": "male",
      "country": "USA",
      "error": "All fields are required"
    },
    {
      "name": "John Doe",
      "email": "john.doe.com",
      "dob": "1995-06-15",
      "password": "SecurePass@123",
      "confirmPassword": "SecurePass@123",
      "address": "123 Main Street, New York, USA",
      "gender": "male",
      "country": "USA",
      "error": "Invalid email format"
    },
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "dob": "1995-06-15",
      "password": "12345",
      "confirmPassword": "12345",
      "address": "123 Main Street, New York, USA",
      "gender": "male",
      "country": "USA",
      "error": "Password must be at least 8 characters long"
    },
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "dob": "1995-06-15",
      "password": "SecurePass@123",
      "confirmPassword": "WrongPass",
      "address": "123 Main Street, New York, USA",
      "gender": "male",
      "country": "USA",
      "error": "Passwords do not match"
    },
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "dob": "2030-01-01",
      "password": "SecurePass@123",
      "confirmPassword": "SecurePass@123",
      "address": "",
      "gender": "male",
      "country": "USA",
      "error": "All fields are required."
    },
    
    
  ]
  ;
