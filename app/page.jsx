import { ActionNotificationProvider } from "../features/notifications";
import { Home } from "../widgets/home";

export default function HomePage() {
  return (
    <ActionNotificationProvider>
      <Home />
    </ActionNotificationProvider>
  );
}
