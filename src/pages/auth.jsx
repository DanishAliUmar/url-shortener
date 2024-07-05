import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Login from '@/components/ui/login';
import SignUp from '@/components/ui/signup';
const Auth = () => {
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const longLink = searchParams.get("createNew");

  return (
    <div className="mt-36 flex flex-col items-center gap-10">
    <h1 className="text-5xl font-extrabold">
      {searchParams.get("createNew")
        ? "Hold up! Let's login first.."
        : "Login / Signup"}
    </h1>
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="signup">Signup</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Login />
      </TabsContent>
      <TabsContent value="signup">
        <SignUp />
      </TabsContent>
    </Tabs>
  </div>
  )
}

export default Auth