import { useForm } from 'react-hook-form'

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

  return (
    <div>
      <form
        className="flex flex-col justify-center items-center text-black my-2"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <div className="editPageItems">
          <label className="p-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
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
            className=" text-white bg-slate-500"
          />
          <p className="text-red-800 font-normal text-base">
            {errors.name?.message}
          </p>
        </div>
        <div className="editPageItems">
          <label className="p-2" htmlFor="email">
            Email:
          </label>
          <input
            className=" text-white bg-slate-500"
            type="email"
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
          <p className="text-red-800 font-normal text-base">
            {errors.email?.message}
          </p>
        </div>
        <div className="editPageItems">
          <label className="p-2" htmlFor="password">
            Password:
          </label>
          <input
            className=" text-white bg-slate-500"
            type="password"
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
          <p className="text-red-800 font-normal text-base">
            {errors.password?.message}
          </p>
        </div>
        <div className="editPageItems">
          <label className="p-2" htmlFor="passwordAgain">
            Enter Password again:
          </label>
          <input
            type="password"
            className=" text-white bg-slate-500"
            {...register('passwordAgain', {
              validate: (passwordAgain, formValues) => {
                if (passwordAgain !== formValues.password) {
                  return 'The 2 password are not matching!'
                }
              },
            })}
          />
          <p className="text-red-800 font-normal text-base">
            {errors.passwordAgain?.message}
          </p>
        </div>
        <div className="editPageItems">
          <label className="p-2" htmlFor="gender">
            Gender:
          </label>
          <div>
            <input
              type="radio"
              value="Male"
              className="mx-2"
              {...register('gender', { required: 'Gender is required!' })}
            />
            Male
            <input
              type="radio"
              {...register('gender', { required: 'Gender is required!' })}
              value="Female"
              className="mx-2"
            />
            Female
            <input
              type="radio"
              {...register('gender', { required: 'Gender is required!' })}
              value="Other"
              className="mx-2"
            />
            Other
          </div>
          <p className="text-red-800 font-normal text-base">
            {errors.gender?.message}
          </p>
        </div>
        <div className="editPageItems">
          <label htmlFor="subs">
            <input type="checkbox" className="mx-5" {...register('subs')} />
            Subscribe to newsletter
          </label>
        </div>
        <div className="text-xl m-2">
          <label className="p-2" htmlFor="location">
            Location:
          </label>
          <select {...register('location')}>
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
          className="block m-auto mt-3 text-lg font-semibold rounded-lg border-2 bg-slate-500 text-white active:translate-y-1 transform transition px-5 py-3"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default EditProfileForm
