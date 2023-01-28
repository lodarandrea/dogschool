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
  const [validationMessage, setValidationMessage] = useState(
    new Map<string, string>()
  )

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.checked })

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    if (validationMessage.size === 0) {
      console.log(formData)
    }
  }

  const validateForm = () => {
    const message = new Map<string, string>()
    if (formData.name.length <= 3 || formData.name.length > 16) {
      message.set(
        'Name',
        'The Name should be minimum 3 character and maximum 16 character long!'
      )
    }
    if (
      formData.email.length < 3 ||
      formData.email.length > 32 ||
      !formData.email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      message.set('Email', 'Invalid email address!')
    }
    if (formData.password.length < 8 || formData.password.length > 100) {
      message.set(
        'Password',
        'The Password should be minimum 8 character and maximum 100 character long!'
      )
    }
    if (formData.passwordAgain !== formData.password) {
      message.set('PasswordAgain', 'Invalid password!')
    }
    if (!formData.gender) {
      message.set('Gender', 'Gender is required')
    }
    setValidationMessage(message)
  }

  return (
    <div>
      <form
        className="flex flex-col justify-center items-center text-black my-2"
        onSubmit={handleSubmit}
      >
        <div className="editPageItems">
          <label className="p-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className=" text-white bg-slate-500"
          />
          {validationMessage && (
            <div className="text-red-800 font-normal text-base">
              {validationMessage.get('Name')}
            </div>
          )}
        </div>
        <div className="editPageItems">
          <label className="p-2" htmlFor="email">
            Email:
          </label>
          <input
            className=" text-white bg-slate-500"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {validationMessage && (
            <div className="text-red-800 font-normal text-base">
              {validationMessage.get('Email')}
            </div>
          )}
        </div>
        <div className="editPageItems">
          <label className="p-2" htmlFor="password">
            Password:
          </label>
          <input
            className=" text-white bg-slate-500"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {validationMessage && (
            <div className="text-red-800 font-normal text-base">
              {validationMessage.get('Password')}
            </div>
          )}
        </div>
        <div className="editPageItems">
          <label className="p-2" htmlFor="passwordAgain">
            Password again:
          </label>
          <input
            type="password"
            name="passwordAgain"
            className=" text-white bg-slate-500"
            value={formData.passwordAgain}
            onChange={handleChange}
          />
          {validationMessage && (
            <div className="text-red-800 font-normal text-base">
              {validationMessage.get('PasswordAgain')}
            </div>
          )}
        </div>
        <div className="editPageItems">
          <label className="p-2" htmlFor="gender">
            Gender:
          </label>
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
          {validationMessage && (
            <div className="text-red-800 font-normal text-base">
              {validationMessage.get('Gender')}
            </div>
          )}
        </div>
        <div className="editPageItems">
          <label htmlFor="subs">
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
          <label className="p-2" htmlFor="location">
            Location:
          </label>
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
          onClick={validateForm}
          className="block m-auto mt-3 text-lg font-semibold rounded-lg border-2 bg-slate-500 text-white active:translate-y-1 transform transition px-5 py-3"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default EditCustomerProfile
