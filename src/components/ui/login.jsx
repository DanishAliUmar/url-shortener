import React, { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from './input'
import { Button } from './button'
import { BeatLoader } from 'react-spinners'
import Error from '../error'
import * as Yup from 'yup'
import useFetch from '@/hooks/use-fetch'
import { login } from '@/db/apiAuth'
import { useNavigate, useSearchParams } from 'react-router-dom'
const Login = () => {
  const [errors, setErrors] = useState([])
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const longLink = searchParams.get("createNew"); 
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  } 


  const {data , error, loading, fn:fnLogin} = useFetch(login, formData)
  
  useEffect(() => {
  if (error === null && data) {
    navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ""}`)
  }
  }, [data, error])


  const handleLogin = async () => {
    setErrors([])
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email("Invalid Email").required("Email is Required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is Required"),
      })

      await schema.validate(formData, { abortEarly: false })
      //api call
      // await fnLogin()
    } catch (e) {
      // const newErrors = {}
      // e?.inner?.forEach((err) => {
      //   newErrors[err.path] = err.message
      // });

      setErrors(newErrors)
    }
  } 



  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          to your account if you already have one
        </CardDescription>
        {errors && <Error message={errors.message} />}
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Input
            name="email"
            type="email"
            placeholder="Enter Email"
            onChange={handleInputChange}
          />
        </div>
        {errors.email && <Error message={errors.email} />}
        <div className="space-y-1">
          <Input
            name="password"
            type="password"
            placeholder="Enter Password"
            onChange={handleInputChange}
          />
        </div>
        {errors.password && <Error message={errors.password} />}
      </CardContent>
      <CardFooter>
        <Button onClick={handleLogin}>{loading ? <BeatLoader size={10} color='#36d7b7' /> : "Login"}</Button>
      </CardFooter>
    </Card>
  )
}

export default Login