import { Input } from "~/components/ui/input";
import type { Route } from "./+types/home";
import { useActionData } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Note-Taker | Login" },
    { name: "description", content: "Welcome to the login page!" },
  ];
}
export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const email = formData.get("email2");
  return { email };
}

export default function Login() {
  const data = useActionData();
  return (
    <div className="border border-neutral-200 flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white rounded-xl">
      <div className="">
        <img
          alt="Your Company"
          src="assets/images/logo.svg"
          className="mx-auto w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Welcome to Note
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form method="POST" className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <Input
                className=""
                id="email2"
                name="email2"
                type="email"
              />
              <div>{data ? data.email : ""}</div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Not a member?{" "}
          <a
            href="#"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
}
