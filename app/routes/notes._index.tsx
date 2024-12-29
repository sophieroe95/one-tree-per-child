import ClientOnly from "~/components/ClientOnly/ClientOnly";
import Map from "~/routes/Map.client";

export default function NoteIndexPage() {
  return (
    <ClientOnly fallback={<div>Loading...</div>}>
      {() => (
        <div style={{ height: "500px" }}>
          <Map />
        </div>
      )}
    </ClientOnly>
  );
}
