import { ActionNotificationProvider } from "../widgets/notifications";
import { Home } from "./Home";

export default function HomePage() {
  return (
    <ActionNotificationProvider>
      <Home />
    </ActionNotificationProvider>
  );
}
