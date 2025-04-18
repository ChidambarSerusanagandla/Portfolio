
import { useToast, ToastContext } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider as ToastProviderPrimitive,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { useCallback, useState } from "react";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProviderPrimitive>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProviderPrimitive>
  )
}

// This Provider component needs to be added to ensure the toast context is available
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<any[]>([]);
  
  const addToast = useCallback((toast: any) => {
    setToasts((prevToasts) => [...prevToasts, { id: crypto.randomUUID(), ...toast }]);
  }, []);
  
  const removeToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);
  
  const updateToast = useCallback((toast: any) => {
    setToasts((prevToasts) => 
      prevToasts.map((t) => (t.id === toast.id ? { ...t, ...toast } : t))
    );
  }, []);
  
  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, updateToast }}>
      {children}
    </ToastContext.Provider>
  );
}
