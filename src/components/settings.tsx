import { createElement, forwardRef, HTMLAttributes, ComponentPropsWithoutRef, ComponentPropsWithRef, Ref } from "react";
import { Item, ItemActions, ItemContent, ItemMedia, ItemTitle } from "./ui/item";
import { Switch } from "./ui/switch";
import { type TablerIcon } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { FlexLayout } from "./layout/flex-layout";

interface SettingsItemProps extends HTMLAttributes<HTMLDivElement> {
    icon?: TablerIcon;
    label: string;
    description?: string;
    state?: boolean;
    action?: (checked: boolean) => void;
}

type FlexLayoutRef = ComponentPropsWithRef<typeof FlexLayout>['ref'] extends Ref<infer R> ? R : never;

const Settings = forwardRef<FlexLayoutRef, ComponentPropsWithoutRef<typeof FlexLayout>>(({ className, ...props }, ref) => {
    return <FlexLayout ref={ref} className={className} {...props} />;
});
Settings.displayName = "Settings";

const SettingsTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => {
    return <h1 ref={ref} className={cn("text-3xl font-bold text-primary", className)} {...props} />;
});
SettingsTitle.displayName = "SettingsTitle";

const SettingsItem = forwardRef<HTMLDivElement, SettingsItemProps>(({ icon, label, description, state, action, className, ...props }, ref) => {
    return (
        <div ref={ref} className={className} {...props}>
            <Item variant="outline">
                <ItemMedia>
                    {icon && createElement(icon, { className: "w-5 h-5" })}
                </ItemMedia>
                <ItemContent>
                    <ItemTitle>{label}</ItemTitle>
                    {description && <div className="text-sm text-muted-foreground">{description}</div>}
                </ItemContent>
                <ItemActions>
                    <Switch checked={!!state} onCheckedChange={action} />
                </ItemActions>
            </Item>
        </div>
    );
});
SettingsItem.displayName = "SettingsItem";

export { Settings, SettingsItem, SettingsTitle };