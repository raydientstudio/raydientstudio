"use client";

import { useEffect, useState, useRef, useCallback, useContext, createContext, ReactNode } from "react";

type TabItem = {
  value: string;
  label: string;
};

type TabsContextType = {
  activeTab: string;
  direction: number;
  onTabChange: (value: string) => void;
};

const TabsContext = createContext<TabsContextType | null>(null);

const useActiveTab = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useActiveTab must be used within AnimatedTabs");
  }
  return context;
};

type AnimatedTabsProps = {
  tabs: readonly TabItem[];
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children: ReactNode;
};

const AnimatedTabs = ({ tabs, defaultValue, onValueChange, children }: AnimatedTabsProps) => {
  const initialValue = defaultValue || tabs?.[0]?.value || "";
  const [activeTab, setActiveTab] = useState<string>(initialValue);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (defaultValue !== undefined && defaultValue !== activeTab) {
      setActiveTab(defaultValue);
    }
  }, [defaultValue]);

  const handleTabChange = useCallback(
    (value: string) => {
      if (value === activeTab) return;

      const currentIndex = tabs.findIndex((t) => t.value === activeTab);
      const nextIndex = tabs.findIndex((t) => t.value === value);

      setDirection(nextIndex > currentIndex ? 1 : -1);
      setActiveTab(value);
      onValueChange?.(value);
    },
    [activeTab, tabs, onValueChange],
  );

  if (!mounted) {
    return (
      <div className="w-full">
        <div className="flex border-b border-border opacity-0" />
      </div>
    );
  }

  return (
    <TabsContext.Provider
      value={{ activeTab, direction, onTabChange: handleTabChange }}
    >
      {children}
    </TabsContext.Provider>
  );
};
AnimatedTabs.displayName = "Animated Tabs";

type TabsListProps = {
  className?: string;
  children: ReactNode;
};

const TabsListContext = createContext<{
  activeTab: string;
  registerButton: (value: string, element: HTMLButtonElement) => void;
  unregisterButton: (value: string) => void;
} | null>(null);

const TabsList = ({ className, children }: TabsListProps) => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("TabsList must be used within AnimatedTabs");
  }

  const { activeTab } = context;
  const [activeStyle, setActiveStyle] = useState({ x: 0, width: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);

  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastUpdateTimeRef = useRef<number>(0);

  const THROTTLE_DELAY = 16;
  const ANIMATION_DURATION = 150;

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateActiveStyle = useCallback(() => {
    if (!mounted) return;

    const now = Date.now();
    if (now - lastUpdateTimeRef.current < THROTTLE_DELAY) {
      return;
    }
    lastUpdateTimeRef.current = now;

    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }

    setIsAnimating(true);

    const updateMeasurements = () => {
      const activeElement = itemRefs.current[activeTab];
      const container = containerRef.current;

      if (activeElement && container && activeElement.offsetParent) {
        void container.offsetHeight;
        const { offsetLeft, offsetWidth } = activeElement;
        if (offsetLeft >= 0 && offsetWidth > 0) {
          setActiveStyle({
            x: offsetLeft,
            width: offsetWidth,
          });
        }
      }

      animationTimeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
      }, ANIMATION_DURATION);
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(updateMeasurements);
      });
    });
  }, [activeTab, mounted]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      updateActiveStyle();
    }, 10);
    return () => clearTimeout(timeoutId);
  }, [updateActiveStyle]);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;
    let timeoutId: NodeJS.Timeout;
    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        updateActiveStyle();
      }, 50);
    });
    resizeObserver.observe(containerRef.current);
    return () => {
      resizeObserver.disconnect();
      clearTimeout(timeoutId);
    };
  }, [mounted, updateActiveStyle]);

  if (!mounted) return <div className="w-full opacity-0" />;

  const registerButton = (value: string, element: HTMLButtonElement) => {
    itemRefs.current[value] = element;
  };

  const unregisterButton = (value: string) => {
    delete itemRefs.current[value];
  };

  return (
    <TabsListContext.Provider value={{ activeTab, registerButton, unregisterButton }}>
      <div ref={containerRef} className={`relative w-full md:w-fit md:inline-flex ${className || ""}`}>
        <div
          className="absolute top-0 h-full bg-surface shadow-xs rounded-full"
          style={{
            transform: `translate3d(${activeStyle.x}px, 0, 0)`,
            width: `${activeStyle.width}px`,
            opacity: activeStyle.width > 0 ? 1 : 0,
            transition: isAnimating ? "all 0.150s ease-out" : "none",
            backfaceVisibility: "hidden",
            pointerEvents: "none",
          }}
        />
            <div className="flex w-full md:w-fit gap-4">
                {children}
            </div>
      </div>
    </TabsListContext.Provider>
  );
};
TabsList.displayName = "Tabs List";

const TabsTrigger = ({ value, children, className }: { value: string; children: ReactNode; className?: string;}) => {
  const context = useContext(TabsContext);
  const listContext = useContext(TabsListContext);
  if (!context) throw new Error("TabsTrigger must be used within AnimatedTabs");

  const { activeTab, onTabChange } = context;
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current && listContext) {
      listContext.registerButton(value, buttonRef.current);
      return () => listContext.unregisterButton(value);
    }
  }, [value, listContext]);

  return (
    <button
      ref={buttonRef}
      onClick={() => onTabChange(value)}
      onMouseEnter={() => setHoveredTab(value)}
      onMouseLeave={() => setHoveredTab(null)}
      className={`relative flex-1 md:flex-none px-2.5 py-2 text-sm font-mono truncate transition-colors duration-200 rounded-full ${
        activeTab === value ? "font-medium text-foreground" : hoveredTab === value ? "font-normal text-muted-foreground" : "font-normal hover:font-medium active:font-medium text-muted-foreground hover:text-foreground active:text-foreground"
      } ${className || ""}`}>
      {children}
    </button>
  );
};
TabsTrigger.displayName = "Tabs Trigger";

const TabsContent = ({value, children, className,}: { value: string; children: ReactNode; className?: string;}) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabsContent must be used within AnimatedTabs");

  const { activeTab, direction } = context;
  const [isRendered, setIsRendered] = useState(activeTab === value);
  const [animationState, setAnimationState] = useState(activeTab === value ? "enter" : "exit",);

  useEffect(() => {
    if (activeTab === value) {
      setIsRendered(true);
      // Small delay to trigger transition after render
      const timer = setTimeout(() => setAnimationState("center"), 20);
      return () => clearTimeout(timer);
    } else {
      setAnimationState("exit");
      const timer = setTimeout(() => setIsRendered(false), 200);
      return () => clearTimeout(timer);
    }
  }, [activeTab, value]);

  if (!isRendered) return null;

  const offset = direction > 0 ? 20 : -20;

  return (
      <div className={`transition-all duration-200 ease-out w-full ${className || ""}`}
      style={{
        opacity: animationState === "center" ? 1 : 0,
        transform: animationState === "center" ? "translate3d(0, 0, 0)" : `translate3d(${animationState === "enter" ? offset : -offset}px, 0, 0)`,
      }}>
      {children}
    </div>
  );
};
TabsContent.displayName = "Tabs Content";

export { useActiveTab, AnimatedTabs, TabsList, TabsTrigger, TabsContent };