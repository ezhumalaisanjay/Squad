"use client"

import { Loader2, Sparkle } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card"
import { Checkbox } from "../ui/checkbox"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Link } from "react-router-dom"
import { useState } from "react"
import Image from "next/image";
import logo from '../Images/logo.png';
function Login() {
  const [loading, setLoading] = useState(false);

  const loadingHandler = () => {
    setLoading(true);
    setTimeout(()=> s.etLoading(false), 2000)
  }

  return (
    <>
      <div className="h-full lg:w-[1200] m-auto mt-20">
        <CardContent className="flex justify-center h-[470]">
          <Card className="bg-slate-700 flex justify-center rounded-r-none items-center border-none">
            <CardContent>
              <Image src={logo} alt="Logo" width={100} height={100} />
            </CardContent>
          </Card>
          <Card className="flex flex-col justify-center p-8 sm:p-20 items-center rounded-l-none">
            <CardHeader>
              <div className="flex flex-col items-center gap-2 font-bold text-lg">
                <div><Sparkle /></div>
                <div>Welcome back!</div>
              </div>
            </CardHeader>
            <CardDescription>Please enter your details</CardDescription>
            <CardContent className="mt-5 flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <Label>Email</Label>
                <Input className="outline-none" type="mail" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Password</Label>
                <Input type="password" />
              </div>
              
              <div className="grid gap-4">
                <div className="flex gap-2 items-center">
                  <Checkbox />
                  <Label>Remember for 30 days</Label>
                </div>
                <div className="flex flex-col gap-2">
                  <Link to="/home/">
                  <Button className="w-full" onClick={loadingHandler} disabled={loading}>
                    {loading && <Loader2 className="animate-spin" />}
                    Log in
                  </Button></Link>
                  <Button variant="secondary"> Login in with Google</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </div>
    </>
  )
}

export default Login