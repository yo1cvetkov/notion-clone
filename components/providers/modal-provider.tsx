"use client";

import * as React from "react";

import { SettingsModal } from "../modals/settings-modal";

export function ModalProvider() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <SettingsModal />
    </>
  );
}
