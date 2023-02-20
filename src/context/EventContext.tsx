import React, { createContext, useContext, useState } from "react";

interface Listener {
  id: string;
  callback: (data: any) => void;
}

interface EventContextType {
  registerListener: (id: string, callback: (data: any) => void) => void;
  unregisterListener: (id: string) => void;
  dispatchEvent: (id: string, data: any) => void;
}

const EventContext = createContext<EventContextType>({
  registerListener: () => {},
  unregisterListener: () => {},
  dispatchEvent: () => {},
});

// Create the context object
export function EventProvider({ children }: any) {
  const [listeners, setListeners] = useState<Listener[]>([]);

  const dispatchEvent = (id: string, data: any) => {
    // Call all the registered listeners with the given ID, passing the data
    console.log("listeners", listeners);
    listeners
      .filter((listener) => listener.id === id)
      .forEach((listener) => listener.callback(data));
  };

  const registerListener = (id: string, callback: (data: any) => void) => {
    // Add the new listener to the state
    let alreadyAdded = listeners.find((l) => l.id === id);
    !alreadyAdded &&
      setListeners((prevListeners) => [...prevListeners, { id, callback }]);
  };

  const unregisterListener = (id: string) => {
    // Remove the listener with the given ID from the state
    setListeners((prevListeners) =>
      prevListeners.filter((listener) => listener.id !== id)
    );
  };

  const contextValue = {
    dispatchEvent,
    registerListener,
    unregisterListener,
  };

  return (
    <EventContext.Provider value={contextValue}>
      {children}
    </EventContext.Provider>
  );
}

export const useEventContext = () => useContext(EventContext);
