import { useForm } from "react-hook-form"
import classes from "styles/authorization.module.css"

interface IFormAuthorization {
  email: string
  password: string
}

export function AuthorizationPage() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data: IFormAuthorization) => console.log(errors)
  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Авторизация</h2>
        {errors.email && errors.email.type}
        <input name="email" ref={register({ required: true })} />
        <input name="password" ref={register({ required: true })} />
        <button>Войти</button>
      </form>
    </div>
  )
}
