import { RegisterForm } from "@/components/forms/register";

export default function RegisterPage() {
  return (
    <div className="container max-w-md py-24">
      <h1 className="text-2xl font-bold mb-8">Create an Account</h1>
      <RegisterForm />
    </div>
  );
}
