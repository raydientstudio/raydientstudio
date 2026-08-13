import {
  forwardRef,
  HTMLAttributes,
  ComponentPropsWithoutRef,
} from "react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "./ui/item";
import { Switch } from "./ui/switch";
import { type TablerIcon } from "@tabler/icons-react";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SettingsItemProps extends HTMLAttributes<HTMLDivElement> {
  icon?: TablerIcon | LucideIcon;
  label: string;
  description?: string;
  state?: boolean;
  action?: (checked: boolean) => void;
}

const Settings = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={className} {...props} />;
});

Settings.displayName = "Settings";

const SettingsTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h1
      ref={ref}
      className={cn("text-3xl font-bold text-primary", className)}
      {...props}
    />
  );
});

SettingsTitle.displayName = "SettingsTitle";

const SettingsItem = forwardRef<HTMLDivElement, SettingsItemProps>(
  ({ icon: Icon, label, description, state, action, className, ...props }, ref) => {
    return (
      <div ref={ref} className={className} {...props}>
        <Item variant="outline">
          <ItemMedia variant="icon">
            {Icon && <Icon className="h-5 w-5" />}
          </ItemMedia>

          <ItemContent>
            <ItemTitle>{label}</ItemTitle>

            {description && (
              <div className="text-sm text-muted-foreground">
                {description}
              </div>
            )}
          </ItemContent>

          <ItemActions>
            <Switch
              checked={!!state}
              onCheckedChange={action}
            />
          </ItemActions>
        </Item>
      </div>
    );
  },
);

SettingsItem.displayName = "SettingsItem";

export { Settings, SettingsItem, SettingsTitle };