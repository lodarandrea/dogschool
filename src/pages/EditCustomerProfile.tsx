import { useState } from 'react'

interface FormData {
  name: string
  email: string
  password: string
  passwordAgain: string
  gender: string
  subs: boolean
  location: String
}

function EditCustomerProfile() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    passwordAgain: '',
    gender: '',
    subs: false,
    location: '',
  })
  const locations: string[] = [
    'Hungary',
    'Germany',
    'UK',
    'Australia',
    'Austria',
    'Canada',
  ]
  const [validationMessage, setValidationMessage] = useState<{
    [key: string]: string
  }>({})

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }

  const handleCheckbox = (e: { target: { name: string; checked: boolean } }) =>
    setFormData({ ...formData, [e.target.name]: e.target.checked })

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    if (Object.entries(validationMessage).length === 0) {
      console.log(formData)
    }
  }

  const validateName = () => {
    if (formData.name.length <= 3 || formData.name.length > 16) {
      setValidationMessage((previousMap) => ({
        ...previousMap,
        Name: 'The Name should be minimum 3 character and maximum 16 character long!',
      }))
    } else {
      setValidationMessage((previousMap) => {
        delete previousMap.Name
        return previousMap
      })
    }
  }

  const validateEmail = () => {
    if (
      formData.email.length < 3 ||
      formData.email.length > 32 ||
      !formData.email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      setValidationMessage((previousMap) => ({
        ...previousMap,
        Email: 'Invalid email address!',
      }))
    } else {
      setValidationMessage((previousMap) => {
        delete previousMap.Email
        return previousMap
      })
    }
  }

  const validatePassword = () => {
    if (formData.password.length < 8 || formData.password.length > 100) {
      setValidationMessage((previousMap) => ({
        ...previousMap,
        Password:
          'The Password should be minimum 8 character and maximum 100 character long!',
      }))
    } else {
      setValidationMessage((previousMap) => {
        delete previousMap.Password
        return previousMap
      })
    }
  }

  const validatePassAgain = () => {
    if (formData.passwordAgain !== formData.password) {
      setValidationMessage((previousMap) => ({
        ...previousMap,
        PasswordAgain: 'Invalid password!',
      }))
    } else {
      setValidationMessage((previousMap) => {
        delete previousMap.PasswordAgain
        return previousMap
      })
    }
  }

  const validateGender = () => {
    if (!formData.gender) {
      setValidationMessage((previousMap) => ({
        ...previousMap,
        Gender: 'Gender is required',
      }))
    } else {
      setValidationMessage((previousMap) => {
        delete previousMap.Gender
        return previousMap
      })
    }
  }

  return (
    <div>
      <form
        className="flex flex-col justify-center items-center text-black my-2"
        onSubmit={handleSubmit}
      >
        <div className="editPageItems">
          <label className="p-2">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={validateName}
            required
            className=" text-white bg-slate-500"
          />
          <div>{validationMessage.Name || null}</div>
        </div>
        <div className="editPageItems">
          <label className="p-2">Email:</label>
          <input
            className=" text-white bg-slate-500"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={validateEmail}
            required
          />
          <div>{validationMessage.Email || null}</div>
        </div>
        <div className="editPageItems">
          <label className="p-2">Password:</label>
          <input
            className=" text-white bg-slate-500"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={validatePassword}
            required
          />
          <div>{validationMessage.Password || null}</div>
        </div>
        <div className="editPageItems">
          <label className="p-2">Password again:</label>
          <input
            type="password"
            name="passwordAgain"
            className=" text-white bg-slate-500"
            value={formData.passwordAgain}
            onChange={handleChange}
            onBlur={validatePassAgain}
          />
          <div>{validationMessage.PasswordAgain || null}</div>
        </div>
        <div className="editPageItems">
          <label className="p-2">Gender:</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              className="mx-2"
              onChange={handleChange}
            />
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              className="mx-2"
              onChange={handleChange}
            />
            Female
            <input
              type="radio"
              name="gender"
              value="Other"
              className="mx-2"
              onChange={handleChange}
            />
            Other
          </div>
          <div>{validationMessage.Gender || null}</div>
        </div>
        <div className="editPageItems">
          <label>
            <input
              type="checkbox"
              name="subs"
              className="mx-5"
              checked={formData.subs}
              onChange={handleCheckbox}
            />
            Subscribe to newsletter
          </label>
        </div>
        <div className="text-xl m-2">
          <label className="p-2">Location:</label>
          <select name="location" onChange={handleChange}>
            <option value={[]}></option>
            {locations.map((l) => (
              <option value={l} key={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          onClick={validateGender}
          className="block m-auto mt-3 text-lg font-semibold rounded-lg border-2 bg-slate-500 text-white active:translate-y-1 transform transition px-5 py-3"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default EditCustomerProfile
