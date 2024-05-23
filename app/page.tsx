import Controls from "@/components/Controls";
import Display from "@/components/Display";

export default function Home() {
  return (
   <main className=" min-h-screen my-10">
    <h1 className="text-center mb-5 text-3xl font-semibold uppercase">Rubiks Cube Solver 1.0</h1>
    <Display/>
    <Controls/>
   </main>
  )
}
