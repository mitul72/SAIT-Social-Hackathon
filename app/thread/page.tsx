/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sAUyBC1wVQr
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import req from "../../lib/interests";

export default function Component() {
  async function yourFunction() {
    //Most compact way to return a fetch
    const response = await fetch("/api/threads", {});
    const json = await response.json();
    return json; //do here wathever with your json if you want to return
  } //a specific part of it.
  yourFunction().then((resp) => {
    console.log(resp); //Here you get the function response and print it
  });

  return (
    <>
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <div className="w-[150px]"></div>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Select Your Interests
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Choose the topics you are interested in to personalize your
                Saitface experience.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button className="bg-blue-500 text-white px-6 py-2 rounded">
                Music
              </Button>
              <Button className="bg-red-500 text-white px-6 py-2 rounded">
                Movies
              </Button>
              <Button className="bg-green-500 text-white px-6 py-2 rounded">
                Sports
              </Button>
              <Button className="bg-purple-500 text-white px-6 py-2 rounded">
                Tech
              </Button>
              <Button className="bg-yellow-500 text-black px-6 py-2 rounded">
                Travel
              </Button>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Create a New Interest
              </h2>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input placeholder="New Interest" type="text" />
                <Button type="submit">Create</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Discussions
            </h2>
            <Card>
              <CardHeader>
                <Avatar
                  alt="User Avatar"
                  className="w-10 h-10"
                  src="/placeholder.svg?height=50&width=50"
                />
                <h3 className="font-bold">User123</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  This is a sample discussion post on the Saitface website.
                </p>
              </CardContent>
            </Card>
            <Link
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              href="#"
            >
              View More Discussions
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-20 my-10">
        <h1 className="text-4xl font-bold mb-4">Interests</h1>
        <p className="text-gray-600 mb-8">
          Select your interests to personalize your experience.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <Card className="shadow-lg rounded-lg">
            <CardHeader className="px-4 py-2">
              <h2 className="text-xl font-bold">Sports</h2>
            </CardHeader>
            <CardContent className="px-4 py-2">
              <p className="text-gray-600">
                Discuss your favorite sports and teams.
              </p>
              <Button className="mt-4">View Discussions</Button>
            </CardContent>
          </Card>
          <Card className="shadow-lg rounded-lg">
            <CardHeader className="px-4 py-2">
              <h2 className="text-xl font-bold">Movies</h2>
            </CardHeader>
            <CardContent className="px-4 py-2">
              <p className="text-gray-600">
                Talk about the latest movies and series.
              </p>
              <Button className="mt-4">View Discussions</Button>
            </CardContent>
          </Card>
          <Card className="shadow-lg rounded-lg">
            <CardHeader className="px-4 py-2">
              <h2 className="text-xl font-bold">Technology</h2>
            </CardHeader>
            <CardContent className="px-4 py-2">
              <p className="text-gray-600">
                Share and learn about the latest in tech.
              </p>
              <Button className="mt-4">View Discussions</Button>
            </CardContent>
          </Card>
          <Card className="shadow-lg rounded-lg">
            <CardHeader className="px-4 py-2">
              <h2 className="text-xl font-bold">Create New Interest</h2>
            </CardHeader>
            <CardContent className="px-4 py-2">
              <p className="text-gray-600">
                Can't find what you're interested in? Create a new category.
              </p>
              <Button className="mt-4">Create</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
