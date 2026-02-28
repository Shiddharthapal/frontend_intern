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
  } = useForm<LoginFormData>();

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-b-2 border-primary" />
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
          email: data.email,
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

      navigate("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-gray-200 px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto flex min-h-[calc(100vh-6.5rem)] w-full max-w-md items-center justify-center">
        <Card className="w-full bg-gray-100">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5 space-y-2">
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
                  className="border border-[hsl(201,72%,38%)] shadow-md focus-visible:ring-0"
                />

                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="mb-8 space-y-2">
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
                    className="border border-[hsl(201,72%,38%)] shadow-md focus-visible:ring-0 focus-visible:ring-blue-600"
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
                  <p className="text-sm text-red-500">{errors.password.message}</p>
                )}
              </div>

              <div className="mt-0">
                {error && <p className="text-sm text-red-500">{error}</p>}
                <Button
                  type="submit"
                  className="w-full bg-[#2A9D6E]"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Login"}
                </Button>
              </div>

              <div className="mt-2 text-center text-sm">
                <Link to="/createaccount" className="text-primary hover:underline">
                  Don't have an account? Create account
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
