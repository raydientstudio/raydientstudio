import { ReactNode } from "react";

type Info = {
    title: string;
    subtitle: string | ReactNode;
};

const SectionHeader = ({ info }: { info: Info }) => {
    return (
        <div className="flex flex-col justify-start items-start w-fit h-fit gap-y-4">
            <h2 className="text-[13px] text-muted font-mono font-normal uppercase leading-none tracking-normal">
                {info.title}
            </h2>
            <h3 className="text-base text-foreground font-mono font-[550] uppercase leading-relaxed tracking-tight">
                {info.subtitle}
            </h3>
        </div>
    );
}

export default SectionHeader;