import { useState } from "react";
import { NodemailerRequestDto, sendEmailAction } from "@/lib/nodemailer";
import { sleep } from "@/utils";

export function useEmailAction() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSend = async (payload: NodemailerRequestDto, next?: () => void) => {
    setSending(true);
    await sendEmailAction(payload);
    setSending(false);

    next?.();

    setSent(true);
    await sleep(1.5);
    setSent(false);
  };

  const handleSendStub = async (next?: () => void) => {
    setSending(true);
    await sleep();
    setSending(false);

    next?.();

    setSent(true);
    await sleep(1);
    setSent(false);
  };

  return { sending, sent, handleSend, handleSendStub };
}
