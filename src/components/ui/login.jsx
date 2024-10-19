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
      await fnLogin()
    } catch (e) {
      const newErrors = {}
      e?.inner?.forEach((err) => {
        newErrors[err.path] = err.message
      });

      setErrors(newErrors)
    }
  } 



  return (
    <Card>
      card
    </Card>
  )
}

export default Login