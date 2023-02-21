import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

interface FormData {
  name: string
  email: string
  password: string
  passwordAgain: string
  gender: string
  subs: boolean
  location: String
}

function EditProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const locations: string[] = [
    'Hungary',
    'Germany',
    'UK',
    'Australia',
    'Austria',
    'Canada',
  ]
  const gender: string[] = ['Male', 'Female', 'Other']

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
    navigate('/')
    toast.success('Changes Saved!', {
      position: toast.POSITION.TOP_CENTER,
    })
  }
  const onError: SubmitErrorHandler<FormData> = (errors) => {
    toast.error('Please correct the form!', {
      position: toast.POSITION.TOP_CENTER,
    })
  }

  return (
    <div>
      <form
        className="flex flex-col justify-center items-center text-black my-2 max-w-2xl m-auto"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <div className="editPageItems">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...register('name', {
              required: 'Name is required!',
              minLength: {
                value: 3,
                message: 'The Name should be minimum 3 character!',
              },
              maxLength: {
                value: 16,
                message: 'The Name should be maximum 16 character!',
              },
            })}
          />
          {errors.name && (
            <p className="errorsMessage">{errors.name.message}</p>
          )}
        </div>
        <div className="editPageItems">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'E-mail address is required!',
              minLength: {
                value: 3,
                message: 'The E-mail address should be minimum 3 character!',
              },
              maxLength: {
                value: 32,
                message: 'The E-mail address should be maximum 32 character!',
              },
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: 'Wrong e-mail address!',
              },
            })}
          />
          {errors.email && (
            <p className="errorsMessage">{errors.email.message}</p>
          )}
        </div>
        <div className="editPageItems">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            {...register('password', {
              required: 'Password is required!',
              minLength: {
                value: 8,
                message: 'The Password should be minimum 8 character!',
              },
              maxLength: {
                value: 100,
                message: 'The Password should be maximum 100 character!',
              },
            })}
          />
          {errors.password && (
            <p className="errorsMessage">{errors.password.message}</p>
          )}
        </div>
        <div className="editPageItems">
          <label htmlFor="passwordAgain">Enter Password again:</label>
          <input
            type="password"
            id="passwordAgain"
            {...register('passwordAgain', {
              validate: (passwordAgain, formValues) => {
                if (passwordAgain !== formValues.password) {
                  return 'The 2 password are not matching!'
                }
              },
            })}
          />
          {errors.passwordAgain && (
            <p className="errorsMessage">{errors.passwordAgain.message}</p>
          )}
        </div>
        <div className="editPageItems">
          <label>Gender:</label>
          <div className="flex justify-center">
            {gender.map((g) => (
              <div className="mx-1">
                <input
                  type="radio"
                  id={g}
                  value={g}
                  key={g}
                  className="mx-1"
                  {...register('gender', { required: 'Gender is required!' })}
                />
                <label htmlFor={g}> {g}</label>
              </div>
            ))}
          </div>
          {errors.gender && (
            <p className="errorsMessage">{errors.gender.message}</p>
          )}
        </div>
        <div className="text-base lg:text-lg flex flex-row items-baseline accent-turquoise-700 my-3">
          <input
            type="checkbox"
            id="subs"
            {...register('subs')}
            className="mr-2"
          />
          <label htmlFor="subs">Subscribe to newsletter</label>
        </div>
        <div className="text-base lg:text-lg flex flex-row  items-baseline accent-turquoise-700 my-3">
          <label className="p-2" htmlFor="location">
            Location:
          </label>
          <select
            {...register('location')}
            className="ml-2 z-10 inline-flex items-center py-2 px-2 text-sm  bg-turquoise-600/10 border border-turquoise-800 rounded-lg hover:bg-turquoise-100  focus:outline-none"
          >
            <option value={[]}></option>
            {locations.map((l) => (
              <option value={l} key={l} id="location">
                {l}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="buttons mt-3 w-36 md:w-48 md:mt-10">
          Submit
        </button>
      </form>
    </div>
  )
}

export default EditProfileForm
