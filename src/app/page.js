import DeviceGate from "@/components/DeviceGate";
import EnableNotifications from "@/components/EnableNotifications";

export default function Home() {
  return (
    <div className="">
      <main>
        <EnableNotifications />
      </main>
      <DeviceGate />
    </div>
  );
}
