import DeviceGate from "@/components/DeviceGate";
import EnableNotifications from "@/components/EnableNotifications";

export default function Home() {
  return (
    <div className="mt-10 ml-10">
      <main>
        <h1 className="py-4 text-xl tracking-tight text-white">Hola Mundo!</h1>
      </main>
      <DeviceGate />
    </div>
  );
}
