"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import { useAppDispatch } from "@/redux/hooks";
import { loginStart, loginSuccess } from "@/redux/slices/authSlice";
interface LoginFormData {
  email: string;
  adminId?: string;
  password: string;
}

type UserRole = "user";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>();
  if (loading) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground">Login...</p>
        </div>
      </div>
    );
  }

  const onSubmit = async (data: LoginFormData) => {
    try {
      setLoading(true);
      setError(null);
      dispatch(loginStart());

     
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email, // Using the same field name for simplicity
            password: data.password,
          }),
        });
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Login failed");
        }
        dispatch(
          loginSuccess({
            _id: result._id,
            email: data.email,
            token: result.token,
            createdAt: result.createdAt || new Date().toISOString(),
          })
        );
      

      // Redirect to user page after successful login
      navigate("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex justify-center  items-center pt-10 pb-auto">
        <Card className="w-[450px] bg-gray-100">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Login</CardTitle>
           
          </CardHeader>
          <CardContent>
            {" "}
            
              <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="space-y-2 mb-5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="focus-visible:ring-0 border border-[hsl(201,72%,38%)]  shadow-md"
                  />

                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}

                </div>

                <div className="space-y-2 mb-8">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">

                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                      className="focus-visible:ring-0 focus-visible:ring-blue-600 border border-[hsl(201,72%,38%)] shadow-md"
                    />
            
                    <Button
                      type="button"
                      variant="ghost"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
 
                    </Button>
                  </div>
                  {errors.password && (
                    <p className="text-sm text-red-500">
                   {errors.password.message}
                    </p>
                  )}   
                </div>
                <div className="mt-0">
                  {error && <p className="text-sm text-red-500">{error}</p>} 
                  <Button type="submit" className="w-full bg-[#2A9D6E]" disabled={loading}>
                    {" "}
                    {loading
                      ? "Loading..."
                      : `Login`}   
                  </Button>
                </div>
                <div className="text-center text-sm mt-2">
                  <Link
                    to="/register"
                    className="text-primary hover:underline "
                  >
                    Don't have an account? Create account
                  </Link>{" "}
                </div>{" "}
              </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
