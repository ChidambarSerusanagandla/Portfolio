
import { type ToastActionElement, type ToastProps } from "@/components/ui/toast";
import { useState, useEffect, createContext, useContext } from "react";

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

const TOAST_LIMIT = 5;
const TOAST_REMOVE_DELAY = 1000;

type ToasterToastState = {
  toasts: ToasterToast[];
};

const ToastContext = createContext<{
  toasts: ToasterToast[];
  addToast: (toast: Omit<ToasterToast, "id">) => void;
  removeToast: (toastId: string) => void;
  updateToast: (toast: ToasterToast) => void;
} | null>(null);

function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}

export { useToast, ToastContext };
export { toast } from "@/components/ui/sonner";
