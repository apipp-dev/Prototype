import React, { StrictMode, ErrorInfo, ReactNode } from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { AppProvider } from './context/AppContext.tsx';
import './index.css';

// Intercept cross-origin script errors and unhandled rejections from external browser plugins/sandbox environments
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    const msg = event.message || '';
    const filename = event.filename || '';
    if (msg === 'Script error.' || !filename || filename.includes('extensions') || filename.includes('chrome-extension')) {
      console.warn("Pre-empted benign cross-origin script error:", msg, filename);
      event.stopImmediatePropagation();
      event.preventDefault();
    }
  }, true);

  window.onerror = function (message, source, lineno, colno, error) {
    if (message === 'Script error.' || !source) {
      console.warn("Muted benign cross-origin script error.");
      return true; // prevent error bubbling
    }
    console.error("Local Runtime Error captured:", message, "at", source, ":", lineno);
    return false;
  };

  window.addEventListener('unhandledrejection', (event) => {
    // Ignore cross-origin promise rejections that might not affect our functional components
    const reasonStr = event.reason ? String(event.reason.message || event.reason) : '';
    if (reasonStr.includes('Script error') || reasonStr.includes('Extension') || reasonStr.includes('cross-origin')) {
      console.warn("Pre-empted benign unhandled promise rejection:", reasonStr);
      event.stopImmediatePropagation();
      event.preventDefault();
    }
  }, true);
}

// React Error Boundary to catch any local render exceptions gracefully
class ErrorBoundary extends (React.Component as any) {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("ErrorBoundary caught an exception:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col items-center justify-center p-6 text-center font-sans">
          <div className="max-w-md space-y-4">
            <h2 className="text-2xl font-bold text-brand-orange uppercase">Application Recovering</h2>
            <p className="text-sm text-neutral-400">An unexpected script or rendering error occurred. Please click below to refresh the active page node.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-6 py-2 bg-brand-orange text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-brand-orange/95 transition-all"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <AppProvider>
        <App />
      </AppProvider>
    </ErrorBoundary>
  </StrictMode>,
);


