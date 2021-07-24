import React from "react";
import { Button, Notification } from "test-vendor-2";

const NotificationExample = () => {
  const openNotification = () => {
    Notification.open({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  return (
    <div>
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </div>
  );
};

export default NotificationExample;
